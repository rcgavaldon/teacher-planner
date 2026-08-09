const fs=require("fs"),path=require("path"),vm=require("vm");
const ROOT=path.join(__dirname,"..");
const idx=fs.readFileSync(path.join(ROOT,"index.html"),"utf8");
const slice=(from,to)=>{const a=idx.indexOf(from);const b=idx.indexOf(to,a);if(a<0||b<0)throw new Error("slice fail: "+from);return idx.slice(a,b);};
const esc=s=>String(s==null?"":s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");

const sandbox={esc,console,window:{}};
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync(path.join(ROOT,"deck-plot.js"),"utf8")+"; this.plotSvg=window.plotSvg;",sandbox); // deck engine (plotSvg)
vm.runInContext(slice("function md(src=\"\"){","/* ---- guided notes as HTML"),sandbox);           // md
vm.runInContext(slice("function gnLine(","/* ---- Clean native print")+"; this.GN_CSS=GN_CSS; this.guidedNotesHtml=guidedNotesHtml;",sandbox); // gnLine+guidedNotesHtml+GN_CSS
const PRINT_CSS=sandbox.GN_CSS + idx.match(/const PRINT_CSS=GN_CSS\+`([\s\S]*?)`;/)[1];

const data=eval("("+fs.readFileSync(path.join(ROOT,"prebaked-weeks.js"),"utf8").match(/window\.PREBAKED\s*=\s*([\s\S]*?);?\s*$/)[1]+")");
const mon=data.precal.days.Mon;
const gnStudent=sandbox.guidedNotesHtml({name:"Pre-Calculus"},mon.guidedNotes,{key:false,dateStr:"Aug 10",ck12:mon.ck12});

// worksheet 1-up markup (same shapes the app prints)
let n=0;
const ws=mon.worksheet;
const md=sandbox.md;
const secsHTML=(ws.sections||[]).map((s,si)=>{
  const probs=(s.problems||[]).map(p=>{n++;const chili=/^\s*🌶/.test(p);const clean=String(p).replace(/^\s*🌶\s*/,"");
    return `<div class="ws-q ${chili?'chili':''}"><span class="ws-num">${n}.</span><span class="ws-body">${esc(clean)}</span><div class="ws-work"></div></div>`;}).join("");
  return `<div class="ws-sec"><div class="ws-sec-h"><span class="ws-tag">Type ${si+1}</span> ${esc(s.type||"")}</div>
    ${s.workedExample?`<div class="ws-ex"><div class="ws-ex-lab">Example</div><div>${md(s.workedExample)}</div></div>`:""}
    <hr class="ws-divider">${s.directions?`<div class="ws-directions">Directions: ${esc(s.directions)}</div>`:""}
    <div class="ws-cols">${probs}</div></div>`;}).join("");
const total=n+(ws.optionalExtra||[]).length;
const wsheet=`<div class="wsheet"><div class="ws-title">${esc(ws.title)}</div>
  <div class="ws-name"><span>Name: __________________</span><span>Period: ____</span><span>Date: Aug 10</span></div>
  <div class="ws-scantron"><div class="ws-scantron-t">Final answers — record here</div><div class="ws-scantron-grid">${Array.from({length:total},(_,i)=>`<span class="ws-cell"><b>${i+1}.</b><span class="ws-blank"></span></span>`).join("")}</div></div>
  ${ws.instructions?`<p class="ws-instr">${esc(ws.instructions)}</p>`:""}${secsHTML}</div>`;

const SCALE=0.80; // simulates the app's measured scale-to-fit for this dense day
const half=`<div class="half2"><div style="transform:scale(${SCALE});transform-origin:top left;width:${(100/SCALE).toFixed(1)}%">${gnStudent}</div></div>`;
const html=`<!doctype html><html><head><meta charset="utf-8">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css">
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.js"></script>
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/contrib/auto-render.min.js"></script>
<style>${PRINT_CSS}</style></head><body>
<section class="pp twoup"><div class="duo">${half}${half}</div></section>
<section class="pp brk"><div class="headline">Pre-Calculus · Mon · Worksheet (1-up)</div>${wsheet}</section>
<script>window.addEventListener("load",function(){setTimeout(function(){if(window.renderMathInElement)window.renderMathInElement(document.body,{delimiters:[{left:"$$",right:"$$",display:true},{left:"$",right:"$",display:false}],throwOnError:false});},60);});</script>
</body></html>`;
fs.writeFileSync(path.join(__dirname,"print-test.html"),html);
console.log("print-test rebuilt with real guided notes,",Math.round(html.length/1024),"KB");
