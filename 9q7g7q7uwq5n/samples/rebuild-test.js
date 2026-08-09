const fs=require("fs"),path=require("path"),vm=require("vm");
const ROOT=path.join(__dirname,"..");
const idx=fs.readFileSync(path.join(ROOT,"index.html"),"utf8");
const slice=(a,b)=>{const i=idx.indexOf(a),j=idx.indexOf(b,i);if(i<0||j<0)throw new Error("slice "+a);return idx.slice(i,j);};

const fx=JSON.parse(fs.readFileSync(path.join(__dirname,"rebuild-rational.json"),"utf8"));
const dd=Object.assign({type:"worksheet",objective:"Multiply and divide rational expressions, simplify, and state restrictions.",customWorksheet:{title:"Multiplying and Dividing Rational Expressions",tex:"(his LaTeX)"},worksheetSource:"custom"},fx);

/* 1. REAL validateDay */
const sbV={console};vm.createContext(sbV);
vm.runInContext(slice("function validateDay(d,opts){","\nfunction ")+"; this.validateDay=validateDay;",sbV);
const vr=sbV.validateDay(dd,{});
console.log("validateDay ok:",vr.ok,"| issues:",JSON.stringify(vr.issues),"| warnings:",JSON.stringify(vr.warn));

/* 2. build notes (student 2-up) + teacher packet through the real code */
const W={};vm.runInNewContext(fs.readFileSync(path.join(ROOT,"deck-plot.js"),"utf8"),{window:W,globalThis:W,document:undefined});
const esc=s=>String(s==null?"":s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
const sb={window:W,esc,console,plotSvg:W.plotSvg};vm.createContext(sb);
vm.runInContext(slice("function md(src=\"\"){","/* ---- guided notes as HTML"),sb);
vm.runInContext(slice("function gnLine(","/* ---- Clean native print")+"; this.GN_CSS=GN_CSS; this.guidedNotesHtml=guidedNotesHtml;",sb);
vm.runInContext(slice("function stripExampleLabel(","\nfunction "),sb);
vm.runInContext(slice("function diagramHtml(d){","function renderMaterials(")+"; this.diagramHtml=diagramHtml;",sb);
sb.md=sb.md;sb.slideEl=W.slideEl;
vm.runInContext(slice("const PACKET_CSS=","function openTeacherPacket")+"; this.teacherPacketDoc=teacherPacketDoc;",sb);

const gn=sb.guidedNotesHtml({name:"Pre-Calculus"},dd.guidedNotes,{key:false,dateStr:"—"});
const PRINT_CSS=sb.GN_CSS + idx.match(/const PRINT_CSS=GN_CSS\+`([\s\S]*?)`;/)[1];
const SCALE=0.78;
const half=`<div class="half2"><div style="transform:scale(${SCALE});transform-origin:top left;width:${(100/SCALE).toFixed(1)}%">${gn}</div></div>`;
const notesHtml=`<!doctype html><html><head><meta charset="utf-8">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css">
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.js"></script>
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/contrib/auto-render.min.js"></script>
<style>${PRINT_CSS}</style></head><body>
<section class="pp twoup"><div class="duo">${half}${half}</div></section>
<script>window.addEventListener("load",function(){setTimeout(function(){if(window.renderMathInElement)window.renderMathInElement(document.body,{delimiters:[{left:"$$",right:"$$",display:true},{left:"$",right:"$",display:false}],throwOnError:false});},60);});</script>
</body></html>`;
fs.writeFileSync(path.join(__dirname,"rebuild-notes.html"),notesHtml);

const pk=sb.teacherPacketDoc({name:"Pre-Calculus"},dd,"Wed","—");
fs.writeFileSync(path.join(__dirname,"rebuild-packet.html"),pk);
console.log("built: rebuild-notes.html + rebuild-packet.html");
