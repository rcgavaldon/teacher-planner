const fs=require("fs"),path=require("path");
const dir=path.join(__dirname,"png");
const imgs=[]; for(let i=1;i<=7;i++){ const p=path.join(dir,"deck_"+i+".png"); if(fs.existsSync(p)) imgs.push(fs.readFileSync(p).toString("base64")); }
const labels=["Hook","New concept","Worked example","Watch out","You try","Vocabulary","Roadmap + video"];
const css=`
:root{--paper:#0E1330;--ink:#E7EAF7;--peri:#A9B0FF;--gold:#E7B449;--indigo:#5157e0;--line:rgba(255,255,255,.12);--mono:ui-monospace,'SF Mono',Consolas,monospace;--serif:Georgia,'Times New Roman',serif;--sans:system-ui,-apple-system,'Segoe UI',Roboto,Arial,sans-serif}
body{margin:0;background:radial-gradient(120% 90% at 80% -10%,#232a63,#0b0f24 60%);color:var(--ink);font-family:var(--sans)}
.wrap{max-width:1180px;margin:0 auto;padding:34px 18px 60px}
.hd{display:flex;align-items:flex-end;justify-content:space-between;gap:14px;border-bottom:1px solid var(--line);padding-bottom:16px;margin-bottom:8px;flex-wrap:wrap}
.eye{font-family:var(--mono);font-size:12px;letter-spacing:.18em;text-transform:uppercase;color:var(--peri);font-weight:700}
.hd h1{font-family:var(--serif);font-size:30px;margin:6px 0 0;letter-spacing:-.01em}
.hd .meta{font-family:var(--mono);font-size:12px;color:var(--peri);text-align:right;line-height:1.6}
.note{font-size:13.5px;color:#C6CCEA;margin:14px 2px 22px;line-height:1.5;max-width:70ch}
.slide{margin:22px 0}
.slide .n{font-family:var(--mono);font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--peri);margin:0 0 8px;display:flex;gap:10px;align-items:center}
.slide .n b{color:#fff}
.slide .n::after{content:'';flex:1;height:1px;background:var(--line)}
.slide img{display:block;width:100%;height:auto;border-radius:14px;box-shadow:0 24px 60px -30px rgba(0,0,0,.8);border:1px solid var(--line)}
`;
const body=`<div class="wrap">
<div class="hd"><div><span class="eye">Launch Deck · Redesigned</span><h1>Quadratic Functions</h1></div>
<div class="meta">Pre-Calculus<br>7 slides · projector view</div></div>
<p class="note">This is the projected slideshow, rebuilt on your syllabus design standard — Georgia headlines, mono eyebrows, colored tinted panels (indigo worked-example, rose watch-out, pine you-try), vocabulary chips, and <b>drawn graphs generated from the equation</b>. Each slide type carries its own accent stripe. Same generator will drive the on-screen cards and the Slides PDF.</p>
${imgs.map((b,i)=>`<div class="slide"><div class="n"><b>${String(i+1).padStart(2,"0")}</b> ${labels[i]||""}</div><img alt="slide ${i+1}" src="data:image/png;base64,${b}"></div>`).join("\n")}
</div>`;
fs.writeFileSync(path.join(__dirname,"deck-gallery.html"),"<style>"+css+"</style>\n"+body);
console.log("gallery built with",imgs.length,"slides,",Math.round(body.length/1024),"KB");
