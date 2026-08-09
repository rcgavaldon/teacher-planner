const fs=require("fs"),path=require("path");
const F=path.join(__dirname,"..","index.html");
let s=fs.readFileSync(F,"utf8");
let n=0;const rep=(from,to,label)=>{const c=s.split(from).length-1;
  if(c===0&&s.includes(to)){console.log("skip:",label);return;}
  if(c!==1){console.log("ASSERT FAIL ("+c+"x): "+label);process.exit(1);}
  s=s.split(from).join(to);n++;console.log("ok:",label);};

/* auto-verify videos right after a day's materials generate (so the teacher never gets a dead link unknowingly) */
rep("    plan.days[day]=Object.assign(plan.days[day]||{},data);  // keep objective/bellRinger/agenda, refresh materials\n    save();render();",
"    plan.days[day]=Object.assign(plan.days[day]||{},data);  // keep objective/bellRinger/agenda, refresh materials\n    save();render();\n    try{ const _v=plan.days[day].video; if(_v&&(_v.short||_v.long)) setTimeout(()=>verifyDayVideos(co,plan.days[day]),300); }catch(e){}",
"auto-verify after genMaterials");

/* prompt: prefer a specific known video, else the trusted-channel search */
rep("Give a real watchable link; if unsure of an exact video, use a YouTube SEARCH url like https://www.youtube.com/results?search_query=TOPIC and name a trusted channel",
"Prefer a SPECIFIC, well-known video (a real https://www.youtube.com/watch?v=... link) from a trusted channel when you are confident it exists; ONLY if unsure, fall back to a YouTube SEARCH url like https://www.youtube.com/results?search_query=TOPIC and name the trusted channel",
"video prompt prefers real link");

fs.writeFileSync(F,s);
console.log("AUTOVERIFY: "+n+" edits");
