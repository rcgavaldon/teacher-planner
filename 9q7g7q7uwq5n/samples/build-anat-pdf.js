const fs=require("fs"),path=require("path");
const dir=path.join(__dirname,"png");
const img=f=>"data:image/png;base64,"+fs.readFileSync(path.join(dir,f)).toString("base64");
const sections=[
 {eye:"01 · The backbone",h:"Guided notes — front",sub:"“Word bank” instead of a formula bank, a labeled levels-of-organization diagram, fill-in vocabulary, and two CONCEPT walk-throughs (levels; homeostasis) — the second with its own negative-feedback loop diagram. Concept/vocab/diagram-driven, not worked math.",imgs:["anat-notes_p1.png"]},
 {eye:"02 · The backbone",h:"Guided notes — back (practice)",sub:"Check-Your-Understanding recall questions with writing room, plus the cloze summary and the CK-12 lesson link. Prints as ONE double-sided sheet — the right format for science, not the math half-sheet.",imgs:["anat-notes_p2.png"]},
 {eye:"03 · Built from the notes",h:"The quiz — drawn straight from Monday's notes",sub:"Eight multiple-choice, all bubble-scannable. Every item is a definition, a structure→function link, or the feedback loop from the notes; distractors are the classic misconceptions (‘negative feedback = bad,’ positive-feedback traps).",imgs:["anat-quiz_p1.png"]},
 {eye:"04 · In-class recap",h:"The recap worksheet",sub:"Label the pyramid, match term→function, explain & apply — an understanding sheet, not computation. CK-12 §1.7 is the graded online recap for the other ~half of your days.",imgs:["anat-worksheet_p1.png"]},
 {eye:"05 · Review copy",h:"The teacher packet",sub:"Hero + live CK-12 link → deck → notes → worksheet → answer key, one scroll on your phone.",imgs:["anat-packet_p1.png"]},
];
const css=`:root{--ink:#0E1330;--muted:#5A6382;--line:#E4E9F5;--indigo:#383CC1;--peri:#A9B0FF;--gold:#E7B449;--serif:Georgia,'Times New Roman',serif;--sans:system-ui,-apple-system,'Segoe UI',Roboto,Arial,sans-serif;--mono:ui-monospace,'SF Mono',Consolas,monospace}
*{box-sizing:border-box}@page{size:letter;margin:0}body{margin:0;font-family:var(--sans);color:var(--ink);-webkit-print-color-adjust:exact;print-color-adjust:exact}
.page{width:8.5in;height:11in;padding:.5in .55in .45in;display:flex;flex-direction:column;background:#fff;break-after:page;position:relative;overflow:hidden}.page:last-child{break-after:auto}
.eyebrow{font-family:var(--mono);font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:var(--indigo);font-weight:700}
.phead h2{font-family:var(--serif);font-size:21px;font-weight:700;margin:5px 0 4px;letter-spacing:-.01em;line-height:1.12}
.cap{font-size:11.5px;color:var(--muted);margin:0 0 12px;line-height:1.45;max-width:64ch}
.pimg{flex:1;min-height:0;display:flex;align-items:flex-start;justify-content:center}
.pimg img{max-width:100%;max-height:100%;object-fit:contain;border:1px solid var(--line);border-radius:10px;box-shadow:0 14px 34px -22px rgba(14,19,48,.45)}
.pfoot{margin-top:10px;display:flex;justify-content:space-between;font-family:var(--mono);font-size:9px;color:#8A90B0;letter-spacing:.04em}.pfoot .tag{color:var(--indigo);font-weight:700}
.cover{background:radial-gradient(130% 120% at 88% -12%,#1e5b45 0%,#0E1330 62%);color:#EDEFFA;justify-content:center;padding:1in}.cover .eyebrow{color:#8fe0bf}
.cover h1{font-family:var(--serif);font-size:44px;line-height:1.03;letter-spacing:-.02em;margin:14px 0 14px;max-width:15ch}.cover p{font-size:14px;line-height:1.6;color:#C6CCEA;max-width:60ch;margin:0}
.cover .id{margin-top:24px;font-family:var(--mono);font-size:11px;color:#AEB6E0;line-height:1.8}.cover .id b{color:#fff}`;
let pages=`<div class="page cover"><span class="eyebrow">Teacher Planner · Science mode</span>
<h1>Anatomy &amp; Physiology — a science week.</h1>
<p>The same app, switched to science: notes become the concept + vocabulary + diagram backbone, and the quiz is built straight from them. Topic: Body Organization &amp; Homeostasis. Every diagram is drawn in the notes; validateDay clean; 48-min day. (No standalone A&amp;P TEKS exists — this rides on the Biology TEKS + CK-12 Biology, which cover it.)</p>
<div class="id"><b>Anatomy &amp; Physiology (Biology TEKS)</b> · Mr. Robert Gavaldon<br>Da Vinci School for Science &amp; Arts</div></div>`;
let no=1;
for(const s of sections){s.imgs.forEach((f,i)=>{no++;pages+=`<div class="page"><div class="phead"><span class="eyebrow">${s.eye}</span><h2>${s.h}</h2><p class="cap">${s.sub}</p></div><div class="pimg"><img src="${img(f)}"></div><div class="pfoot"><span class="tag">TEACHER PLANNER</span><span>Science mode · Anatomy &amp; Physiology</span><span>${no}</span></div></div>`;});}
fs.writeFileSync(path.join(__dirname,"anat-tour.html"),"<style>"+css+"</style>\n"+pages);
console.log("anat tour built:",no,"pages");
