const fs=require("fs"),path=require("path");
const F=path.join(__dirname,"..","index.html");
let s=fs.readFileSync(F,"utf8");
let n=0;const rep=(from,to,label)=>{const c=s.split(from).length-1;
  if(c===0&&s.includes(to)){console.log("skip:",label);return;}
  if(c!==1){console.log("ASSERT FAIL ("+c+"x): "+label);process.exit(1);}
  s=s.split(from).join(to);n++;console.log("ok:",label);};

rep("Mostly multiple-choice (4 choices) plus a couple griddable/short free-response. Rigor a touch below the course ceiling.",
"EVERY item is MULTIPLE CHOICE with exactly 4 choices (A–D) — NO free-response, NO griddables — so the bubble answer sheet can be scan-graded. Make distractors reflect the classic mistakes (sign slips, swapped h, dropped negative). Rigor a touch below the course ceiling.",
"tests all-MC");

fs.writeFileSync(F,s);
console.log("ALL-MC: "+n+" edits");
