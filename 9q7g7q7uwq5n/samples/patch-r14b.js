const fs=require("fs"),path=require("path");
const F=path.join(__dirname,"..","index.html");
let src=fs.readFileSync(F,"utf8");
let n=0;const rep=(from,to,label)=>{const c=src.split(from).length-1;
  if(c===0&&src.includes(to)){console.log("skip:",label);return;}
  if(c!==1){console.log("ASSERT FAIL ("+c+"x): "+label);process.exit(1);}
  src=src.split(from).join(to);n++;console.log("ok:",label);};

/* wire the review-day button: regenerates the day as spiral-station review */
rep(`  const lostBtn=$("#lost",matCard); if(lostBtn)lostBtn.onclick=()=>{const h=$("#distHost",matCard);if(h.firstChild){h.innerHTML="";return;}h.appendChild(disruptionPanel(co,wk,plan));};`,
`  const lostBtn=$("#lost",matCard); if(lostBtn)lostBtn.onclick=()=>{const h=$("#distHost",matCard);if(h.firstChild){h.innerHTML="";return;}h.appendChild(disruptionPanel(co,wk,plan));};
  {const rb=$("#revday",matCard); if(rb)rb.onclick=()=>{ if(!confirm("Turn "+cur.day+" into a REVIEW day? Its materials regenerate as spiral stations over this period's TEKS."))return;
    genMaterials(co,wk,plan,cur.day,dd,$("#mst",matCard)||$("#st",matCard)||document.createElement("span"),
      "Convert this day into a REVIEW DAY: NO new content. The worksheet becomes spiral STATIONS over this grading period's TEKS so far — one section per major skill, station-style directions ('Station 1: …'), 2-3 problems each, 8-12 total. Notes become a one-page cheat-sheet style recap (formula bank + one quick example per skill). Exit ticket = 2 quiz-style items. Set type to 'review'."); };}`,
"wire review-day");

/* Share to Classroom (zero-setup share dialog) on the assignment banner */
rep("out.appendChild(doc);\n    // per-day tracking:",
`out.appendChild(doc);
    {const gc=el('<button class="btn ghost sm no-print" style="margin:4px 0 2px">📤 Share to Classroom</button>');
     gc.onclick=()=>window.open("https://classroom.google.com/share?url="+encodeURIComponent(a.url||""),"gcshare","width=680,height=620");
     if(a.url) out.appendChild(gc);}
    // per-day tracking:`,"Share to Classroom button");

fs.writeFileSync(F,src);
console.log("PATCH R14 part2: "+n+" edits");
