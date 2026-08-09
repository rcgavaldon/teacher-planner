const fs=require("fs"),path=require("path");
const F=path.join(__dirname,"..","index.html");
let src=fs.readFileSync(F,"utf8");
let n=0;const rep=(from,to,label)=>{const c=src.split(from).length-1;
  if(c===0&&src.includes(to)){console.log("skip:",label);return;}
  if(c!==1){console.log("ASSERT FAIL ("+c+"x): "+label);process.exit(1);}
  src=src.split(from).join(to);n++;console.log("ok:",label);};

rep(`  let out="", stop="", passes=0;
  while(passes<3){
    const sendMsgs = out ? msgs.concat([{role:"assistant",content:out}]) : msgs;`,
`  let out="", stop="", passes=0;
  const CONT='Your previous message was cut off mid-output by the length limit. Continue EXACTLY where it stopped: output ONLY the remaining text, starting with the very next character. No preamble, no apology, no repetition of earlier text, no code fences.';
  while(passes<3){
    const sendMsgs = out ? msgs.concat([{role:"assistant",content:out.replace(/\\s+$/,"")},{role:"user",content:CONT}]) : msgs;`,
"continuation ends with user turn");

rep(`    out=(out+chunk).replace(/\\s+$/,"");   // trim tail so assistant-prefill continuation is accepted
    stop=data.stop_reason; passes++;
    if(stop!=="max_tokens") break;         // done — otherwise pick up exactly where it stopped
  }`,
`    let piece=chunk;
    if(out){ // continuation pass: strip fences/preamble whitespace, then trim any overlap with what we already have
      piece=piece.replace(/^\\s*\`\`\`(?:json)?\\s*/,"").replace(/\\s*\`\`\`\\s*$/,"");
      for(let k=Math.min(240,piece.length);k>=8;k--){ if(out.endsWith(piece.slice(0,k))){piece=piece.slice(k);break;} }
    }
    out+=piece;
    stop=data.stop_reason; passes++;
    if(stop!=="max_tokens") break;         // done — otherwise ask it to pick up where it stopped
  }`,
"overlap-safe stitching");

fs.writeFileSync(F,src);
console.log("\\nCONTINUE FIX: "+n+" edits applied");
