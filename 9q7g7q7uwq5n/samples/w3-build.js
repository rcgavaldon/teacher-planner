const fs=require("fs"),path=require("path"),vm=require("vm");
const ROOT=path.join(__dirname,"..");
const idx=fs.readFileSync(path.join(ROOT,"index.html"),"utf8");
const slice=(a,b)=>{const i=idx.indexOf(a),j=idx.indexOf(b,i);if(i<0||j<0)throw new Error("slice "+a);return idx.slice(i,j);};
const dd=JSON.parse(fs.readFileSync(path.join(__dirname,"w3mon.json"),"utf8"));

/* 1. numeric mark verification on every graph in the day */
const FN={parabola:s=>x=>s.a*x*x+(s.b||0)*x+(s.c||0),cubic:s=>x=>s.a*x*x*x+(s.b||0)*x*x+(s.c||0)*x+(s.d||0),
  abs:s=>x=>(s.a||1)*Math.abs(x-(s.h||0))+(s.k||0),sqrt:s=>x=>(x-(s.h||0))>=0?(s.a||1)*Math.sqrt(x-(s.h||0))+(s.k||0):NaN};
let checked=0,bad=0;
const checkG=(g,where)=>{if(!g||!g.marks)return;const f=FN[g.kind];if(!f)return;
  for(const mk of g.marks){checked++;const y=f(g)(mk.x);if(!(Math.abs(y-mk.y)<1e-6)){bad++;console.log("OFF-CURVE",where,JSON.stringify(mk),"->",y);}}};
(dd.presentation.slides||[]).forEach((s,i)=>checkG(s.graph,"slide"+i));
(dd.guidedNotes.examples||[]).forEach((e,i)=>checkG(e.graph,"gnEx"+i));
// worksheet diagram: evaluate expr plots at marked points
const dgm=dd.worksheet.sections[0].diagram;
const ev=e=>x=>{const s=String(e).replace(/\^/g,"**").replace(/(\d)x/g,"$1*x");return Function("x","return "+s)(x);};
for(const p of dgm.points){checked++;const y1=ev(dgm.plots[0].expr)(p[0]),y2=ev(dgm.plots[1].expr)(p[0]);
  if(!(Math.abs(y1-p[1])<1e-6||Math.abs(y2-p[1])<1e-6)){bad++;console.log("DIAGRAM OFF",p);}}
console.log("marks checked:",checked,"bad:",bad); if(bad)process.exit(1);

/* 2. REAL validateDay */
const sbV={console};vm.createContext(sbV);
vm.runInContext(slice("function validateDay(d,opts){","\nfunction ")+"; this.validateDay=validateDay;",sbV);
const vr=sbV.validateDay(dd,{needNotes:true});
console.log("validateDay ok:",vr.ok,"| issues:",JSON.stringify(vr.issues),"| warnings:",JSON.stringify(vr.warn));
if(!vr.ok)process.exit(1);
const mins=(dd.script||[]).reduce((a,s)=>a+s.min,0);console.log("script minutes:",mins);

/* 3. build the four artifacts through the app's real code */
const W={};vm.runInNewContext(fs.readFileSync(path.join(ROOT,"deck-plot.js"),"utf8"),{window:W,globalThis:W,document:undefined});
const esc=s=>String(s==null?"":s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
const sb={window:W,esc,console,plotSvg:W.plotSvg};vm.createContext(sb);
vm.runInContext(slice("function md(src=\"\"){","/* ---- guided notes as HTML"),sb);
vm.runInContext(slice("function gnLine(","/* ---- Clean native print")+"; this.GN_CSS=GN_CSS; this.guidedNotesHtml=guidedNotesHtml;",sb);
vm.runInContext(slice("function stripExampleLabel(","\nfunction "),sb);
vm.runInContext(slice("function diagramHtml(d){","function renderMaterials(")+"; this.diagramHtml=diagramHtml;",sb);
sb.slideEl=W.slideEl;
vm.runInContext(slice("const PACKET_CSS=","function openTeacherPacket")+"; this.teacherPacketDoc=teacherPacketDoc;",sb);
const PRINT_CSS=sb.GN_CSS + idx.match(/const PRINT_CSS=GN_CSS\+`([\s\S]*?)`;/)[1];
const KATEX=`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css">
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.js"></script>
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/contrib/auto-render.min.js"></script>
<script>window.addEventListener("load",function(){setTimeout(function(){if(window.renderMathInElement)window.renderMathInElement(document.body,{delimiters:[{left:"$$",right:"$$",display:true},{left:"$",right:"$",display:false}],throwOnError:false});},60);});</script>`;

/* 3a. notes 2-up (student) */
const gn=sb.guidedNotesHtml({name:"Pre-Calculus"},dd.guidedNotes,{key:false,dateStr:"Aug 24",ck12:dd.ck12});
const SCALE=0.70;
const half=`<div class="half2"><div style="transform:scale(${SCALE});transform-origin:top left;width:${(100/SCALE).toFixed(1)}%">${gn}</div></div>`;
fs.writeFileSync(path.join(__dirname,"w3-notes.html"),
`<!doctype html><html><head><meta charset="utf-8">${KATEX}<style>${PRINT_CSS}</style></head><body>
<section class="pp twoup"><div class="duo">${half}${half}</div></section></body></html>`);

/* 3b. worksheet 1-up with diagram (the app's real markup shapes) */
const md=sb.md, diagramHtml=sb.diagramHtml;
let n=0; const ws=dd.worksheet;
const secsHTML=(ws.sections||[]).map((s,si)=>{
  const exp=s.workedExample?`<div class="ws-ex"><div class="ws-ex-lab">Example${s.type?" ("+esc(s.type)+")":""}</div><div>${md(s.workedExample.replace(/^\*\*Example:\*\*\s*/,""))}</div></div>`:(s.why?`<div class="ws-ex"><div class="ws-ex-lab">Why it works</div><div>${md(s.why)}</div></div>`:"");
  const probs=(s.problems||[]).map(p=>{n++;const chili=/^\s*🌶/.test(p);const clean=String(p).replace(/^\s*🌶\s*/,"");
    const cls="ws-work"+(s.space==="s"?" ws-work-s":s.space==="l"?" ws-work-l":"");
    return `<div class="ws-q ${chili?"chili":""}"><span class="ws-num">${n}.</span><span class="ws-body">${esc(clean)}</span><div class="${cls}"></div></div>`;}).join("");
  return `<div class="ws-sec"><div class="ws-sec-h"><span class="ws-tag">Type ${si+1}</span> ${esc(s.type||"")}</div>
    ${exp}${diagramHtml(s.diagram)}<hr class="ws-divider">
    ${s.directions?`<div class="ws-directions">Directions: ${esc(s.directions)}</div>`:""}
    <div class="ws-cols">${probs}</div></div>`;}).join("");
const chal=(ws.optionalExtra||[]).length?`<div class="ws-challenge"><div class="ws-sec-h"><span class="ws-tag">Challenge</span> Stretch problems (optional)</div><div class="ws-cols">${ws.optionalExtra.map(p=>{n++;return `<div class="ws-q chili"><span class="ws-num">${n}.</span><span class="ws-body">${esc(String(p).replace(/^\s*🌶\s*/,""))}</span><div class="ws-work"></div></div>`;}).join("")}</div></div>`:"";
const total=n;
fs.writeFileSync(path.join(__dirname,"w3-worksheet.html"),
`<!doctype html><html><head><meta charset="utf-8">${KATEX}<style>${PRINT_CSS}</style></head><body>
<section class="pp"><div class="wsheet"><div class="ws-title">${esc(ws.title)}</div>
<div class="ws-name"><span>Name: __________________</span><span>Period: ____</span><span>Date: Aug 24</span></div>
<div class="ws-scantron"><div class="ws-scantron-t">Final answers — record here (graded on the answer; show your work)</div><div class="ws-scantron-grid">${Array.from({length:total},(_,i)=>`<span class="ws-cell"><b>${i+1}.</b><span class="ws-blank"></span></span>`).join("")}</div></div>
${ws.instructions?`<p class="ws-instr">${esc(ws.instructions)}</p>`:""}${secsHTML}${chal}</div></section></body></html>`);

/* 3c. launch deck (projector pages) */
const slides=dd.presentation.slides;
const deckPages=slides.map((s,i)=>`<div class="deckshow spage"><div class="deckbar"><div class="f" style="width:${Math.round((i+1)/slides.length*100)}%"></div></div>
<div class="deckstage">${W.slideEl(s,i,slides.length)}</div>
<div class="deckfoot"><span class="dtitle">Pre-Calculus · ${esc(dd.presentation.title)}</span><span>${i+1} / ${slides.length}</span></div></div>`).join("");
fs.writeFileSync(path.join(__dirname,"w3-deck.html"),
`<!doctype html><html><head><meta charset="utf-8">${KATEX}
<style>html,body{margin:0;background:#0b0f24}@page{size:13.333in 7.5in;margin:0}.spage{position:static!important;width:13.333in;height:7.5in;overflow:hidden;break-after:page}.spage:last-child{break-after:auto}*{-webkit-print-color-adjust:exact;print-color-adjust:exact}</style>
<style>${W.DECK_CSS}</style></head><body>${deckPages}</body></html>`);

/* 3d. teacher packet */
fs.writeFileSync(path.join(__dirname,"w3-packet.html"),sb.teacherPacketDoc({name:"Pre-Calculus"},dd,"Mon","Aug 24"));
console.log("built 4 artifacts | worksheet problems:",total);
