const fs=require("fs"),path=require("path");
const F=path.join(__dirname,"..","index.html");
let src=fs.readFileSync(F,"utf8");
let n=0;const rep=(from,to,label)=>{const c=src.split(from).length-1;
  if(c===0&&src.includes(to)){console.log("skip:",label);return;}
  if(c!==1){console.log("ASSERT FAIL ("+c+"x): "+label);process.exit(1);}
  src=src.split(from).join(to);n++;console.log("ok:",label);};

/* GN_CSS also lives in the app page so we can measure (and later preview) guided notes on screen */
rep('/* ---- fullscreen class timer (tests, quizzes, exit tickets) ---- */',
`(function(){try{var s=document.createElement("style");s.id="gncssApp";s.textContent=GN_CSS;document.head.appendChild(s);}catch(e){}})();
/* ---- fullscreen class timer (tests, quizzes, exit tickets) ---- */`,
"GN_CSS in app head");

/* printPacket: measure the notes sheet and scale-to-fit the half sheet (1-up fallback below 0.8) */
rep(`  let skippedCustom=false;
  printNodes(parts.map(p=>{
    if(p.comp.key==='worksheet'&&dd.customWorksheet){skippedCustom=true;return null;}
    let node=p.node;
    if(p.comp.key==='notes'&&dd.guidedNotes) node=el(guidedNotesHtml(co,dd.guidedNotes,{key:false,dateStr}));
    return {node,twoUp:twoUp&&p.comp.key==='notes',label:co.name+' · '+day+' · '+p.comp.label};
  }).filter(Boolean), co.name+' — '+day+' packet');`,
`  let skippedCustom=false;
  printNodes(parts.map(p=>{
    if(p.comp.key==='worksheet'&&dd.customWorksheet){skippedCustom=true;return null;}
    let node=p.node, twoUpThis=twoUp&&p.comp.key==='notes';
    if(p.comp.key==='notes'&&dd.guidedNotes){
      node=el(guidedNotesHtml(co,dd.guidedNotes,{key:false,dateStr}));
      // measure at half-sheet width; auto-shrink to fit; 1-up if it would need <0.8
      try{
        const meas=document.createElement("div");
        meas.style.cssText="position:fixed;left:-9999px;top:0;width:4.55in;background:#fff";
        meas.appendChild(node.cloneNode(true)); document.body.appendChild(meas);
        const hIn=meas.getBoundingClientRect().height/96; meas.remove();
        const budget=7.2; // in — margin for KaTeX growing text a bit
        if(hIn>budget){
          const f=budget/hIn;
          if(f>=0.8){ const wrap=el('<div style="transform:scale('+f.toFixed(3)+');transform-origin:top left;width:'+(100/f).toFixed(1)+'%"></div>'); wrap.appendChild(node); node=wrap; }
          else twoUpThis=false; // too dense even shrunk — print full page
        }
      }catch(e){}
    }
    return {node,twoUp:twoUpThis,label:co.name+' · '+day+' · '+p.comp.label};
  }).filter(Boolean), co.name+' — '+day+' packet');`,
"notes scale-to-fit");

fs.writeFileSync(F,src);
console.log("\\nfit patch: "+n+" edits");
