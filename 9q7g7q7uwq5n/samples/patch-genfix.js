const fs=require("fs"),path=require("path");
const F=path.join(__dirname,"..","index.html");
let src=fs.readFileSync(F,"utf8");
let n=0;const rep=(from,to,label,count)=>{const c=src.split(from).length-1;
  if(c===0&&src.includes(to)){console.log("skip:",label);return;}
  if(c!==(count||1)){console.log("ASSERT FAIL ("+c+"x): "+label);process.exit(1);}
  src=src.split(from).join(to);n++;console.log("ok:",label);};

/* 1. callClaude: detect max_tokens truncation and AUTO-CONTINUE via assistant prefill (up to 3 passes) */
rep(`  const res=await fetch("https://api.anthropic.com/v1/messages",{
    method:"POST",
    headers:{"content-type":"application/json","x-api-key":key,
      "anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},
    body:JSON.stringify({model:S.settings.model||"claude-sonnet-4-6",max_tokens,system,messages:msgs})
  });
  if(!res.ok){let t=await res.text();throw new Error("API "+res.status+": "+t.slice(0,300));}
  const data=await res.json();
  return (data.content||[]).filter(c=>c.type==="text").map(c=>c.text).join("\\n");`,
`  let out="", stop="", passes=0;
  while(passes<3){
    const sendMsgs = out ? msgs.concat([{role:"assistant",content:out}]) : msgs;
    const res=await fetch("https://api.anthropic.com/v1/messages",{
      method:"POST",
      headers:{"content-type":"application/json","x-api-key":key,
        "anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},
      body:JSON.stringify({model:S.settings.model||"claude-sonnet-4-6",max_tokens,system,messages:sendMsgs})
    });
    if(!res.ok){let t=await res.text();throw new Error("API "+res.status+": "+t.slice(0,300));}
    const data=await res.json();
    const chunk=(data.content||[]).filter(c=>c.type==="text").map(c=>c.text).join("\\n");
    out=(out+chunk).replace(/\\s+$/,"");   // trim tail so assistant-prefill continuation is accepted
    stop=data.stop_reason; passes++;
    if(stop!=="max_tokens") break;         // done — otherwise pick up exactly where it stopped
  }
  if(stop==="max_tokens") throw new Error("The reply is too long even after continuing 3× — regenerate, or generate day-by-day instead.");
  return out;`,"callClaude auto-continue on truncation");

/* 2. parseJSON: repair pass (trailing commas) + actionable error */
rep(`function parseJSON(txt){
  let t=txt.trim();
  const fence=t.match(/\`\`\`(?:json)?\\s*([\\s\\S]*?)\`\`\`/);if(fence)t=fence[1].trim();
  try{return JSON.parse(t);}catch(e){}
  const a=t.indexOf("{"),b=t.lastIndexOf("}");
  if(a>=0&&b>a){try{return JSON.parse(t.slice(a,b+1));}catch(e){}}
  throw new Error("Could not parse AI response as JSON.");
}`,
`function parseJSON(txt){
  let t=String(txt||"").trim();
  const fence=t.match(/\`\`\`(?:json)?\\s*([\\s\\S]*?)\`\`\`/);if(fence)t=fence[1].trim();
  const tries=[];
  tries.push(t);
  const a=t.indexOf("{"),b=t.lastIndexOf("}");
  if(a>=0&&b>a) tries.push(t.slice(a,b+1));
  for(const cand of tries.slice()) tries.push(cand.replace(/,\\s*([}\\]])/g,"$1"));   // trailing-comma repair
  for(const cand of tries){ try{return JSON.parse(cand);}catch(e){} }
  const truncated=a>=0&&(t.lastIndexOf("}")<t.length-40||((t.match(/\\{/g)||[]).length!==(t.match(/\\}/g)||[]).length));
  throw new Error("Could not parse AI response as JSON"+(truncated?" — it looks cut off. Just hit the same button again (long replies now auto-continue).":"."));
}`,"parseJSON repair + clear error");

/* 3. bigger output budgets for the richer v2 content */
rep("const txt=await callClaude({max_tokens:8192,","const txt=await callClaude({max_tokens:16000,","genWeek budget 16k");
rep("    const txt=await callClaude({max_tokens:5000,\n      system:`You are a Texas HS math teacher creating ONE day's student-facing materials.",
    "    const txt=await callClaude({max_tokens:9000,\n      system:`You are a Texas HS math teacher creating ONE day's student-facing materials.","genMaterials budget 9k");
rep("const txt=await callClaude({max_tokens:6000,\n      system:`You are ${S.settings.teacher}, a Texas HS math teacher writing a ${label}",
    "const txt=await callClaude({max_tokens:9000,\n      system:`You are ${S.settings.teacher}, a Texas HS math teacher writing a ${label}","genTest budget 9k");
rep("const txt=await callClaude({max_tokens:7500,","const txt=await callClaude({max_tokens:9000,","rebuild budget 9k");

fs.writeFileSync(F,src);
console.log("\\nGEN FIX: "+n+" edits applied");
