const fs=require("fs");
const style=fs.readFileSync(__dirname+"/syl.css","utf8").trim()
  .replace(".screen{padding:20px 12px 36px}",".screen{padding:16px 12px 36px;overflow-x:auto}");
const plabel=".plabel{max-width:1056px;margin:20px auto 8px;font-family:var(--mono);font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--indigo);font-weight:700;display:flex;align-items:center;gap:10px}.plabel::after{content:'';flex:1;height:1px;background:var(--line)}";
const lands=nm=>{const doc=fs.readFileSync(__dirname+"/"+nm,"utf8");const s=doc.indexOf('<div class="land">');const e=doc.indexOf('</div></body>');return doc.slice(s,e);};
const out="<style>"+style+"\n"+plabel+"</style>\n"
  +'<div class="screen">'
  +'<div class="hint"><b>Same generator, two classes.</b> The name and roadmap are pulled from each course — page 1 (procedures) is identical, page 2 (roadmap + materials) is course-specific. Print each class landscape, double-sided, then cut on the dashed line.</div>'
  +'<div class="plabel">Pre-Calculus</div>'+lands("syllabus-app.html")
  +'<div class="plabel">Algebra II</div>'+lands("syllabus-alg2.html")
  +'</div>';
fs.writeFileSync(__dirname+"/syllabus-preview-both.html",out);
console.log("combined preview built:",out.length,"bytes");
