const fs=require("fs"),path=require("path");
const dir=path.join(__dirname,"png");
const b64=f=>fs.readFileSync(path.join(dir,f)).toString("base64");
const sections=[
 {h:"The whole app — on your one design standard",sub:"cool paper, white cards, Georgia headings, indigo accents · syllabus, slides, notes, worksheets, packets, and the UI all match now",imgs:["app_ui.png"]},
 {h:"Week 3 Monday · the launch deck",sub:"Shifting the Parent Functions — hook, the inside/outside rule, worked example with a drawn graph, the common-mistake slide · every graph plotted from its equation, machine-checked",imgs:["w3-deck_p1.png","w3-deck_p4.png","w3-deck_p5.png"]},
 {h:"The guided notes — 2-up half-sheets, fill-in, CK-12 linked",sub:"formula bank + 3 typed examples with blanks + drawn graph · two identical copies, cut line · footer links CK-12 1.2 Graphical Transformations",imgs:["w3-notes_p1.png"]},
 {h:"The worksheet — 2 pages, drawn diagram, scan-ready",sub:"3 problem types + a labeled x² vs (x−3)²+2 diagram + challenge · 12 problems, numbered answer boxes for scan-grading · fits two sheets",imgs:["w3-worksheet_p1.png","w3-worksheet_p2.png"]},
 {h:"The teacher packet — the whole day on your phone, with the key",sub:"hero + live CK-12 link → deck → worked procedure → notes → worksheet → recomputed answer key → exit ticket, in one scroll",imgs:["w3-packet_p1.png","w3-packet_p8.png"]},
 {h:"Your OWN worksheet → the day rebuilt around it",sub:"your real Overleaf rational-expressions sheet → mirror + recomputed key that caught 3 errors in your original + aligned guided notes · validateDay: 0 issues",imgs:["rebuild-notes_p1.png","rebuild-packet_p6.png"]},
];
const css=`
:root{--ink:#E7EAF7;--peri:#A9B0FF;--line:rgba(255,255,255,.12);--mono:ui-monospace,'SF Mono',Consolas,monospace;--serif:Georgia,'Times New Roman',serif;--sans:system-ui,-apple-system,'Segoe UI',Roboto,Arial,sans-serif}
body{margin:0;background:radial-gradient(120% 90% at 80% -10%,#232a63,#0b0f24 60%);color:var(--ink);font-family:var(--sans)}
.wrap{max-width:1080px;margin:0 auto;padding:34px 18px 60px}
.hd{border-bottom:1px solid var(--line);padding-bottom:16px;margin-bottom:10px}
.eye{font-family:var(--mono);font-size:12px;letter-spacing:.18em;text-transform:uppercase;color:var(--peri);font-weight:700}
.hd h1{font-family:var(--serif);font-size:30px;margin:6px 0 4px;letter-spacing:-.01em}
.hd p{margin:0;font-size:13.5px;color:#C6CCEA;max-width:72ch;line-height:1.5}
.sec{margin:34px 0 8px}
.sec h2{font-family:var(--serif);font-size:21px;margin:0 0 3px}
.sec .s{font-family:var(--mono);font-size:11.5px;color:var(--peri)}
img{display:block;width:100%;height:auto;border-radius:12px;border:1px solid var(--line);box-shadow:0 24px 60px -30px rgba(0,0,0,.8);margin:14px 0;break-inside:avoid;page-break-inside:avoid}
.sec{break-after:avoid;page-break-after:avoid}
@page{size:letter;margin:0.35in}
@media print{*{-webkit-print-color-adjust:exact;print-color-adjust:exact}body{background:#0b0f24}.wrap{max-width:none;padding:0}}
`;
let body=`<div class="wrap"><div class="hd"><span class="eye">Teacher Planner · R12 — the full sweep</span><h1>One design standard, everywhere</h1><p>Syllabus → slide decks → teacher packet → student sheets → the app itself. Slides have no commentary or dead video links; guided practice, slides, and worksheets drill the same problem types; every graph is drawn from its equation and machine-checked; the whole week for Pre-Cal and Algebra II is prebaked and math-audited.</p></div>`;
for(const s of sections){
  body+=`<div class="sec"><h2>${s.h}</h2><span class="s">${s.sub}</span></div>`;
  for(const f of s.imgs) body+=`<img alt="${f}" src="data:image/png;base64,${b64(f)}">`;
}
body+=`</div>`;
fs.writeFileSync(path.join(__dirname,"r12-tour.html"),"<style>"+css+"</style>\n"+body);
console.log("tour built:",Math.round(fs.statSync(path.join(__dirname,"r12-tour.html")).size/1024),"KB");
