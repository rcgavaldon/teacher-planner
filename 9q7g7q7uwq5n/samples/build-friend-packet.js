const fs=require("fs"),path=require("path"),vm=require("vm");
const ROOT=path.join(__dirname,"..");
const W={};vm.runInNewContext(fs.readFileSync(path.join(ROOT,"pacing-data.js"),"utf8"),{window:W});
const units=W.PACING_LOCAL["Anatomy & Physiology"].pacing;
const esc=s=>String(s==null?"":s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
const months={1:"Aug – Sep",2:"Oct – Nov",3:"Nov – Dec",4:"Jan – Feb",5:"Mar – Apr",6:"Apr – May"};
const tint=["#EAEBFB","#FBF1DF","#E6F4EE","#FBE8ED","#EAF0FF","#F3EEFB"];
const edge=["#383CC1","#8A5300","#0B6E4F","#AF1235","#3A5FA5","#7A4FB0"];
const byP={};units.forEach(u=>{(byP[u.sixWeeks]=byP[u.sixWeeks]||[]).push(u.unit);});

const css=`:root{--ink:#0E1330;--muted:#5A6382;--line:#E4E9F5;--indigo:#383CC1;--gold:#E7B449;--peri:#A9B0FF;--serif:Georgia,'Times New Roman',serif;--sans:system-ui,-apple-system,'Segoe UI',Roboto,Arial,sans-serif;--mono:ui-monospace,'SF Mono',Consolas,monospace}
*{box-sizing:border-box}@page{size:letter;margin:0}body{margin:0;font-family:var(--sans);color:var(--ink);-webkit-print-color-adjust:exact;print-color-adjust:exact}
.page{width:8.5in;height:11in;padding:.6in .7in;background:#fff;break-after:page;display:flex;flex-direction:column}.page:last-child{break-after:auto}
.hero{background:radial-gradient(130% 130% at 85% -10%,#232a63,#0E1330 60%);color:#EDEFFA;border-radius:16px;padding:26px 30px}
.hero .eye{font-family:var(--mono);font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:var(--peri);font-weight:700}
.hero h1{font-family:var(--serif);font-size:38px;line-height:1.04;margin:8px 0 8px}
.hero p{font-size:17px;line-height:1.5;color:#C6CCEA;margin:0;max-width:44ch}
.h2{font-family:var(--serif);font-size:24px;margin:26px 0 4px}
.lead{font-size:15px;color:var(--muted);margin:0 0 14px}
.cards{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.card{border:1.5px solid var(--line);border-left:6px solid var(--indigo);border-radius:13px;padding:15px 17px}
.card .ic{font-size:30px;line-height:1}
.card h3{font-size:19px;margin:6px 0 4px}
.card p{font-size:15px;line-height:1.45;color:#333;margin:0}
.band{margin-top:16px;background:#F4F5FC;border:1px solid var(--line);border-radius:12px;padding:14px 18px;font-size:16px;line-height:1.5}
.band b{color:var(--indigo)}
.steps{display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin-top:8px}
.step{border:1.5px solid var(--line);border-radius:12px;padding:14px;text-align:center}
.step .n{display:inline-grid;place-items:center;width:34px;height:34px;border-radius:50%;background:var(--indigo);color:#fff;font-weight:800;font-size:16px;margin-bottom:6px}
.step h4{font-size:16px;margin:2px 0 3px}.step p{font-size:13.5px;color:var(--muted);margin:0;line-height:1.4}
.cost{margin-top:auto;background:var(--ink);color:#E7EAF7;border-radius:12px;padding:14px 20px;font-size:16px;text-align:center}.cost b{color:var(--gold);font-size:20px}
.yr{display:flex;flex-direction:column;gap:9px;margin-top:6px}
.six{display:flex;gap:12px;align-items:stretch}
.six .lab{flex:none;width:118px;font-family:var(--mono);font-size:12px;font-weight:700;color:var(--indigo);display:flex;flex-direction:column;justify-content:center}
.six .lab .m{color:var(--muted);font-weight:400;margin-top:2px}
.six .box{flex:1;border-radius:11px;padding:11px 14px}
.six .box ul{margin:0;padding-left:18px}
.six .box li{font-size:15px;line-height:1.5;margin:1px 0}
.foot{margin-top:14px;font-family:var(--mono);font-size:11px;color:#8A90B0;text-align:center}`;

const cards=[
 ["📝","Fill-in NOTES","The backbone. Fill-in-the-blank notes with real body diagrams. Kids write on them — and the quiz comes straight from these."],
 ["🖥️","SLIDES to project","A ready slideshow for the board: the hook, the words, the pictures, one you-try."],
 ["✅","QUIZ + worksheet","Bubble-sheet quizzes a scanner can grade, plus a recap worksheet. Pulled from the notes."],
 ["📚","ONLINE lesson","A CK-12 link for each day — use it as the graded recap or homework."]];

let p1=`<div class="page"><div class="hero"><div class="eye">Anatomy &amp; Physiology · done for you</div>
<h1>You teach.<br>It makes the papers.</h1>
<p>Type the day's topic and it builds everything you hand out. You just look it over and print.</p></div>
<div class="h2">What it makes for you — every day</div>
<div class="cards">${cards.map(c=>`<div class="card"><div class="ic">${c[0]}</div><h3>${c[1]}</h3><p>${c[2]}</p></div>`).join("")}</div>
<div class="band">It also <b>times your tests on the screen</b>, and <b>keeps track of what you've taught all year</b> — so you never miss a topic.</div>
<div class="h2">How you use it — 3 clicks</div>
<div class="steps">
<div class="step"><span class="n">1</span><h4>Pick the day</h4><p>Open a day on the calendar.</p></div>
<div class="step"><span class="n">2</span><h4>Click "Generate"</h4><p>Wait about a minute.</p></div>
<div class="step"><span class="n">3</span><h4>Print</h4><p>Notes, slides, quiz — ready.</p></div></div>
<div class="cost">The whole school year of materials costs about <b>$40</b> — roughly <b>12¢ a day</b>.</div></div>`;

let p2=`<div class="page"><div class="h2" style="margin-top:0">Your whole year — already planned</div>
<p class="lead">Every body system, laid out across the six grading periods. Move things around anytime; it keeps up.</p>
<div class="yr">${[1,2,3,4,5,6].map((p,i)=>`<div class="six"><div class="lab">6 Weeks ${p}<span class="m">${months[p]}</span></div>
<div class="box" style="background:${tint[i]};border:1px solid ${edge[i]}44"><ul>${(byP[p]||[]).map(u=>`<li>${esc(u)}</li>`).join("")}</ul></div></div>`).join("")}</div>
<div class="foot">Teacher Planner · a full-year Anatomy &amp; Physiology map · built on Biology TEKS + CK-12</div></div>`;

/* page 3-4: one real day, start to finish */
const walkCss=`.wstep{display:flex;gap:16px;align-items:flex-start;margin:0 0 16px}
.wstep .num{flex:none;display:grid;place-items:center;width:40px;height:40px;border-radius:50%;background:var(--indigo);color:#fff;font-weight:800;font-size:18px}
.wstep .big{flex:none;width:44px;height:44px;border-radius:50%;display:grid;place-items:center;font-size:20px;background:#F4F5FC;border:1.5px solid var(--line)}
.wstep .txt{flex:1}.wstep h3{font-size:19px;margin:2px 0 3px}.wstep .say{font-size:15px;color:#333;margin:0;line-height:1.45}.wstep .tag{font-family:var(--mono);font-size:11px;color:var(--indigo);font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.shot{width:100%;border:1px solid var(--line);border-radius:11px;margin:4px 0 2px;box-shadow:0 12px 30px -20px rgba(14,19,48,.45)}
.shotwrap{border:1px solid var(--line);border-radius:11px;overflow:hidden;height:2.5in;display:flex;align-items:flex-start;justify-content:center;background:#0b0f24;margin:4px 0 0}
.shotwrap.light{background:#fff}
.shotwrap img{width:100%;height:auto}
.callout{margin-top:auto;background:var(--gold);color:#4a3400;border-radius:13px;padding:16px 20px}
.callout b{color:#3a2800}.callout .k{font-family:var(--mono);font-size:11px;letter-spacing:.1em;text-transform:uppercase;font-weight:700}
.callout h3{font-family:var(--serif);font-size:21px;margin:4px 0 6px;color:#3a2800}.callout p{margin:0;font-size:16px;line-height:1.5}`;
const step=(tag,ic,h,say,imgFile,light)=>`<div class="wstep"><div class="big">${ic}</div><div class="txt"><span class="tag">${tag}</span><h3>${h}</h3><p class="say">${say}</p><div class="shotwrap ${light?"light":""}"><img src="${imgFn(imgFile)}"></div></div></div>`;
function imgFn(f){return "data:image/png;base64,"+fs.readFileSync(path.join(__dirname,"png",f)).toString("base64");}

let p3=`<div class="page"><div class="h2" style="margin-top:0">A real day — start to finish</div>
<p class="lead">Here's one day it made: <b>Body Organization &amp; Homeostasis</b>. Same 3 pieces, every day.</p>
${step("Step 1 · Present this","🖥️","Put the slides on the board","Start here. It hooks the class and shows today's goal — you just click through it.","anat-deck_p1.png",false)}
${step("Step 2 · Hand out this","📝","Give everyone the notes","Fill-in-the-blank notes with a real body diagram. You fill them in together — and these are what the quiz will ask.","anat-notes_p1.png",true)}
</div>`;
let p4=`<div class="page">
${step("Step 3 · Then this","✏️","They practice","A short worksheet to label and explain — OR send them to the CK-12 online lesson instead. Your choice each day.","anat-worksheet_p1.png",true)}
${step("If you want · later","✅","A ready quiz","When you're ready to check them, the quiz is already made — and a scanner grades the bubbles.","anat-quiz_p1.png",true)}
<div class="callout"><span class="k">The best part</span><h3>Ran out of time? Just say so.</h3>
<p>Mark tomorrow as <b>“more time — same lesson,”</b> and the whole rest of the year slides down one day by itself. Nothing gets lost, and it still remembers everything you've taught.</p></div>
</div>`;

/* page 5: quizzes & tests rhythm */
let p5=`<div class="page"><div class="h2" style="margin-top:0">Quizzes &amp; tests — already on the schedule</div>
<p class="lead">You don't build these from scratch. The app knows the rhythm and hands them to you scan-ready.</p>
<div class="cards" style="grid-template-columns:1fr">
<div class="card" style="border-left-color:var(--gold)"><div class="ic">📝</div><h3>Quiz — about once a week</h3><p>A short bubble quiz pulled straight from <b>that week's notes</b>. You make it in about 30 seconds and a scanner grades it. Most weeks also have a quick <b>2-minute check</b> built into the middle of the week so you catch trouble early.</p></div>
<div class="card" style="border-left-color:var(--indigo)"><div class="ic">✅</div><h3>Test — once every six weeks</h3><p>The app <b>puts the test on your calendar itself</b>, in the last week before each grading period ends. It's bubble-scannable, comes with an <b>A and B version</b> for make-ups, and it even builds a <b>review day</b> the day before — spiral practice over everything from that six weeks.</p></div>
</div>
<div class="band" style="margin-top:16px">Both a quiz and a test can run a <b>big countdown timer</b> on the board that beeps when time's up. And the app <b>tracks every standard</b> across the year, so it knows what the six-weeks test should cover.</div>
<div class="callout" style="background:var(--indigo);color:#EDEFFA"><span class="k" style="color:var(--peri)">You're in charge</span><h3 style="color:#fff">Nothing is locked in.</h3><p>Move a quiz, skip a day, swap in your own worksheet, or push a test — the whole year re-flows around it and the standard-tracker keeps up. This same setup works for <b style="color:var(--gold)">any class</b> — anatomy, biology, chemistry, math, even history.</p></div>
</div>`;

fs.writeFileSync(path.join(__dirname,"friend-packet.html"),"<style>"+css+"\n"+walkCss+"</style>\n"+p1+p2+p3+p4+p5);
console.log("friend packet built · year units:",units.length,"· 5 pages (incl. example-day + quiz/test rhythm)");
