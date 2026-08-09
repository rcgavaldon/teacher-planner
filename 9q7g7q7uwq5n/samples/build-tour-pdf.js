const fs=require("fs"),path=require("path");
const dir=path.join(__dirname,"png");
const b64=f=>fs.readFileSync(path.join(dir,f)).toString("base64");
const img=f=>`data:image/png;base64,${b64(f)}`;

const sections=[
 {eye:"01 · The tool",h:"The whole app — on your design standard",sub:"Cool paper, white cards, Georgia headings, indigo accents. Syllabus, slides, notes, worksheets, packets, and the UI all match now — one product, not nice docs inside an old tool.",imgs:["app_ui.png"]},
 {eye:"02 · Project",h:"Week 3 Monday · the launch deck",sub:"“Shifting the Parent Functions.” Hook → the inside/outside rule → a worked example with a graph drawn from its equation → the common-mistake slide. Every coordinate machine-checked before it prints.",imgs:["w3-deck_p1.png","w3-deck_p4.png","w3-deck_p5.png"]},
 {eye:"03 · Handout",h:"The guided notes — 2-up, fill-in, CK-12 linked",sub:"Formula bank + three typed examples with fill-in blanks + a drawn graph. Two identical half-sheet copies with a cut line. The footer links CK-12 §1.2, Graphical Transformations.",imgs:["w3-notes_p1.png"]},
 {eye:"04 · Practice",h:"The worksheet — two pages, drawn diagram, scan-ready",sub:"Three problem types + a labeled x² vs (x−3)²+2 diagram + a challenge. Twelve problems, numbered answer boxes for scan-grading, fits two sheets.",imgs:["w3-worksheet_p1.png","w3-worksheet_p2.png"]},
 {eye:"05 · Review copy",h:"The teacher packet — the whole day on your phone",sub:"Hero + live CK-12 link → deck → worked procedure → notes → worksheet → recomputed answer key → exit ticket, in one scroll.",imgs:["w3-packet_p1.png","w3-packet_p8.png"]},
 {eye:"06 · Your material",h:"Your OWN worksheet → the day rebuilt around it",sub:"Your real Overleaf rational-expressions sheet became the source of truth. The app mirrored it, rebuilt the guided notes to match, and recomputed the answer key — catching three errors in your original. validateDay: zero issues.",imgs:["rebuild-notes_p1.png","rebuild-packet_p6.png"]},
];

const css=`
:root{--paper:#EBEEF6;--ink:#0E1330;--ink2:#1B2350;--muted:#5A6382;--line:#E4E9F5;--indigo:#383CC1;--peri:#A9B0FF;--gold:#E7B449;--serif:Georgia,'Times New Roman',serif;--sans:system-ui,-apple-system,'Segoe UI',Roboto,Arial,sans-serif;--mono:ui-monospace,'SF Mono',Consolas,monospace}
*{box-sizing:border-box}
@page{size:letter;margin:0}
body{margin:0;font-family:var(--sans);color:var(--ink);-webkit-print-color-adjust:exact;print-color-adjust:exact}
.page{width:8.5in;height:11in;padding:.5in .55in .45in;display:flex;flex-direction:column;background:#fff;break-after:page;position:relative;overflow:hidden}
.page:last-child{break-after:auto}
.eyebrow{font-family:var(--mono);font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:var(--indigo);font-weight:700}
.phead h2{font-family:var(--serif);font-size:21px;font-weight:700;color:var(--ink);margin:5px 0 4px;letter-spacing:-.01em;line-height:1.12}
.cap{font-size:11.5px;color:var(--muted);margin:0 0 12px;line-height:1.45;max-width:62ch}
.pimg{flex:1;min-height:0;display:flex;align-items:flex-start;justify-content:center;gap:14px}
.pimg.col{flex-direction:column}
.pimg img{max-width:100%;max-height:100%;object-fit:contain;border:1px solid var(--line);border-radius:10px;box-shadow:0 14px 34px -22px rgba(14,19,48,.45)}
.pfoot{margin-top:10px;display:flex;justify-content:space-between;align-items:center;font-family:var(--mono);font-size:9px;color:#8A90B0;letter-spacing:.04em}
.pfoot .tag{color:var(--indigo);font-weight:700}
/* cover */
.cover{background:radial-gradient(130% 120% at 88% -12%,#262d66 0%,var(--ink) 60%);color:#EDEFFA;justify-content:center;align-items:flex-start;padding:1in}
.cover .eyebrow{color:var(--peri)}
.cover h1{font-family:var(--serif);font-size:46px;line-height:1.02;letter-spacing:-.02em;margin:14px 0 14px;max-width:16ch}
.cover p{font-size:14px;line-height:1.6;color:#C6CCEA;max-width:60ch;margin:0}
.cover .pl{position:absolute;right:.7in;bottom:.8in;width:2.6in;opacity:.9}
.cover .id{margin-top:26px;font-family:var(--mono);font-size:11px;color:#AEB6E0;line-height:1.8}.cover .id b{color:#fff}.cover .id .g{color:var(--gold)}
`;

const plot='<svg class="pl" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg"><line x1="0" y1="86" x2="200" y2="86" stroke="rgba(255,255,255,.18)"/><line x1="100" y1="6" x2="100" y2="150" stroke="rgba(255,255,255,.18)"/><path d="M40,40 Q100,150 160,40" fill="none" stroke="#A9B0FF" stroke-width="3" stroke-linecap="round"/><path d="M70,34 Q120,140 176,50" fill="none" stroke="#E7B449" stroke-width="2.6" stroke-linecap="round"/></svg>';

let pages=`<div class="page cover">${plot}<span class="eyebrow">Teacher Planner · R12 — the full sweep</span>
<h1>One design standard, everywhere.</h1>
<p>Syllabus, slide decks, guided notes, worksheets, the teacher packet, and the app itself — all on one look. Every graph is drawn from its equation and machine-checked; the guided practice, slides, and worksheet drill the same problem types; the whole week is prebaked and math-audited. This is Week 3 Monday, start to finish, plus your own worksheet rebuilt around.</p>
<div class="id"><b>Pre-Calculus &amp; Algebra II</b> · Mr. Robert Gavaldon<br><span class="g">Da Vinci School for Science &amp; Arts</span></div></div>`;

let pageNo=1;
for(const s of sections){
  s.imgs.forEach((f,i)=>{
    pageNo++;
    const wide=(s.imgs.length>1);
    pages+=`<div class="page">
      <div class="phead"><span class="eyebrow">${s.eye}${s.imgs.length>1?` · ${i+1} of ${s.imgs.length}`:""}</span>
      <h2>${s.h}</h2>${i===0?`<p class="cap">${s.sub}</p>`:`<p class="cap" style="color:#8A90B0">…continued</p>`}</div>
      <div class="pimg"><img alt="${f}" src="${img(f)}"></div>
      <div class="pfoot"><span class="tag">TEACHER PLANNER</span><span>R12 · one design standard</span><span>${pageNo}</span></div>
    </div>`;
  });
}
fs.writeFileSync(path.join(__dirname,"r12-tour-print.html"),"<style>"+css+"</style>\n"+pages);
console.log("print tour built:",pageNo,"pages,",Math.round(fs.statSync(path.join(__dirname,"r12-tour-print.html")).size/1024),"KB");
