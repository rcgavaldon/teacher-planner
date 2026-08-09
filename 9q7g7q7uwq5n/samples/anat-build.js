const fs=require("fs"),path=require("path"),vm=require("vm");
const ROOT=path.join(__dirname,"..");
const idx=fs.readFileSync(path.join(ROOT,"index.html"),"utf8");
const slice=(a,b)=>{const i=idx.indexOf(a),j=idx.indexOf(b,i);if(i<0||j<0)throw new Error("slice "+a);return idx.slice(i,j);};
const dd=JSON.parse(fs.readFileSync(path.join(__dirname,"anat-mon.json"),"utf8"));
const quiz=JSON.parse(fs.readFileSync(path.join(__dirname,"anat-quiz.json"),"utf8"));
const co={name:"Anatomy & Physiology",teks:"Biology"};

/* science-mode sanity */
const sbC={};vm.createContext(sbC);
vm.runInContext(slice("function courseIsSci(co){","\nfunction ")+"; this.courseIsSci=courseIsSci;",sbC);
console.log("courseIsSci(Anatomy):",sbC.courseIsSci(co));

/* validateDay */
const sbV={console};vm.createContext(sbV);
vm.runInContext(slice("function validateDay(d,opts){","\nfunction ")+"; this.validateDay=validateDay;",sbV);
const vr=sbV.validateDay(dd,{needNotes:true});
console.log("validateDay ok:",vr.ok,"| issues:",JSON.stringify(vr.issues),"| warnings:",JSON.stringify(vr.warn));
const mins=(dd.script||[]).reduce((a,s)=>a+s.min,0);console.log("script minutes:",mins);
// answer-key counts line up with worksheet problems
const wp=dd.worksheet.sections.reduce((a,s)=>a+s.problems.length,0);
const ak=dd.answerKey.reduce((a,g)=>a+g.answers.length,0);
console.log("worksheet problems:",wp,"| answer-key answers:",ak,ak===wp?"(aligned ✓)":"(MISMATCH)");

/* render pipeline */
const W={};vm.runInNewContext(fs.readFileSync(path.join(ROOT,"deck-plot.js"),"utf8"),{window:W,globalThis:W,document:undefined});
const esc=s=>String(s==null?"":s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
const sb={window:W,esc,console,plotSvg:W.plotSvg};vm.createContext(sb);
vm.runInContext(slice("function md(src=\"\"){","/* ---- guided notes as HTML"),sb);
vm.runInContext(slice("function gnLine(","/* ---- Clean native print")+"; this.GN_CSS=GN_CSS; this.guidedNotesHtml=guidedNotesHtml;",sb);
vm.runInContext(slice("function stripExampleLabel(","\nfunction "),sb);
vm.runInContext(slice("function diagramHtml(d){","function renderMaterials(")+"; this.diagramHtml=diagramHtml; this.figHTML=figHTML;",sb);
sb.slideEl=W.slideEl;
vm.runInContext(slice("const PACKET_CSS=","function openTeacherPacket")+"; this.teacherPacketDoc=teacherPacketDoc;",sb);
const PRINT_CSS=sb.GN_CSS + idx.match(/const PRINT_CSS=GN_CSS\+`([\s\S]*?)`;/)[1];
const KATEX=`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css"><script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.js"></script><script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/contrib/auto-render.min.js"></script><script>window.addEventListener("load",function(){setTimeout(function(){if(window.renderMathInElement)window.renderMathInElement(document.body,{delimiters:[{left:"$$",right:"$$",display:true},{left:"$",right:"$",display:false}],throwOnError:false});},60);});</script>`;

/* notes 1-up full page (science notes are diagram/vocab-dense — a full sheet, not a half) */
const gn=sb.guidedNotesHtml(co,dd.guidedNotes,{key:false,dateStr:"Sep 2",ck12:dd.ck12});
fs.writeFileSync(path.join(__dirname,"anat-notes.html"),`<!doctype html><html><head><meta charset="utf-8">${KATEX}<style>${PRINT_CSS}\n.gnotes{font-size:11pt}</style></head><body><section class="pp">${gn}</section></body></html>`);

/* recap worksheet 1-up */
const md=sb.md;let n=0;const ws=dd.worksheet;
const secsHTML=(ws.sections||[]).map((s,si)=>{
  const fig=s.figure?sb.figHTML(s.figure):"";
  const probs=(s.problems||[]).map(p=>{n++;const chili=/^\s*🌶/.test(p);const clean=String(p).replace(/^\s*🌶\s*/,"");
    const cls="ws-work"+(s.space==="s"?" ws-work-s":s.space==="l"?" ws-work-l":"");
    return `<div class="ws-q ${chili?"chili":""}"><span class="ws-num">${n}.</span><span class="ws-body">${esc(clean)}</span><div class="${cls}"></div></div>`;}).join("");
  return `<div class="ws-sec"><div class="ws-sec-h"><span class="ws-tag">Part ${si+1}</span> ${esc(s.type||"")}</div>${fig}${s.directions?`<div class="ws-directions">Directions: ${esc(s.directions)}</div>`:""}<div class="ws-cols">${probs}</div></div>`;}).join("");
fs.writeFileSync(path.join(__dirname,"anat-worksheet.html"),`<!doctype html><html><head><meta charset="utf-8">${KATEX}<style>${PRINT_CSS}</style></head><body><section class="pp"><div class="wsheet"><div class="ws-title">${esc(ws.title)}</div><div class="ws-name"><span>Name: __________________</span><span>Period: ____</span><span>Date: Sep 2</span></div>${ws.instructions?`<p class="ws-instr">${esc(ws.instructions)}</p>`:""}${secsHTML}</div></section></body></html>`);

/* launch deck (projector pages) */
const slides=dd.presentation.slides;
const deckPages=slides.map((sl,i)=>`<div class="deckshow spage"><div class="deckbar"><div class="f" style="width:${Math.round((i+1)/slides.length*100)}%"></div></div><div class="deckstage">${W.slideEl(sl,i,slides.length)}</div><div class="deckfoot"><span class="dtitle">Anatomy &amp; Physiology · ${esc(dd.presentation.title)}</span><span>${i+1} / ${slides.length}</span></div></div>`).join("");
fs.writeFileSync(path.join(__dirname,"anat-deck.html"),`<!doctype html><html><head><meta charset="utf-8">${KATEX}<style>html,body{margin:0;background:#0b0f24}@page{size:13.333in 7.5in;margin:0}.spage{position:static!important;width:13.333in;height:7.5in;overflow:hidden;break-after:page}.spage:last-child{break-after:auto}*{-webkit-print-color-adjust:exact;print-color-adjust:exact}</style><style>${W.DECK_CSS}</style></head><body>${deckPages}</body></html>`);

/* packet */
fs.writeFileSync(path.join(__dirname,"anat-packet.html"),sb.teacherPacketDoc(co,dd,"Mon","Sep 2"));

/* quiz — MC with bubble sheet, design-standard */
const qitems=quiz.items.map(it=>`<div class="q"><div class="qh"><span class="qn">${it.n}.</span> ${esc(it.question)}</div><ol class="ch">${it.choices.map(c=>`<li>${esc(c)}</li>`).join("")}</ol></div>`).join("");
const bubbles=quiz.items.map(it=>`<div class="br"><span class="bn">${it.n}.</span>${["A","B","C","D"].map(L=>`<span class="bub">${L}</span>`).join("")}</div>`).join("");
const qcss=`:root{--ink:#0E1330;--muted:#5A6382;--line:#E4E9F5;--indigo:#383CC1;--serif:Georgia,serif;--mono:ui-monospace,Consolas,monospace}*{box-sizing:border-box}body{margin:0;font-family:system-ui,Arial;color:var(--ink)}@page{size:letter;margin:.5in}.qt{font-family:var(--serif);font-size:19px;font-weight:700;text-align:center;margin:0}.qsub{font-style:italic;color:var(--muted);font-size:12px;text-align:center;margin:3px 0 8px}.nm{display:flex;justify-content:space-between;border-bottom:1.5px solid var(--ink);padding-bottom:6px;margin-bottom:12px;font-size:11px;color:#444}.bubsheet{border:1.5px solid var(--ink);border-radius:8px;padding:8px 12px;margin:0 0 14px}.bubsheet .t{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);margin-bottom:6px}.brow{display:flex;flex-wrap:wrap;gap:5px 18px}.br{display:inline-flex;align-items:center;gap:5px}.bn{width:20px;text-align:right;font-weight:700;color:var(--indigo);font-size:12px}.bub{display:inline-grid;place-items:center;width:19px;height:19px;border:1.4px solid #888;border-radius:50%;font-size:10px;color:#666}.q{break-inside:avoid;margin:0 0 12px}.qh{font-size:14px;font-weight:600;line-height:1.4}.qn{color:var(--indigo);font-weight:800;margin-right:4px}.ch{list-style:upper-alpha;margin:5px 0 0 26px;font-size:13.5px;line-height:1.7;color:#222}.two{column-count:2;column-gap:28px}`;
fs.writeFileSync(path.join(__dirname,"anat-quiz.html"),`<!doctype html><html><head><meta charset="utf-8">${KATEX}<style>${qcss}</style></head><body>
<div class="qt">${esc(quiz.title)}</div><div class="qsub">Anatomy &amp; Physiology · drawn from Monday's notes</div>
<div class="nm"><span>Name: __________________</span><span>Period: ____</span><span>Date: __________</span></div>
<div class="bubsheet"><div class="t">Bubble your answers — scan-graded</div><div class="brow">${bubbles}</div></div>
<div class="two">${qitems}</div></body></html>`);

console.log("built: anat notes / worksheet / packet / quiz");
