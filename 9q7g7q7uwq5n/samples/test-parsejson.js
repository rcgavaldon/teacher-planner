const fs=require("fs"),vm=require("vm"),path=require("path");
const src=fs.readFileSync(path.join(__dirname,"..","index.html"),"utf8");
const re=/<script\b(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi;let m,bad=0;
while((m=re.exec(src))){try{new vm.Script(m[1]);}catch(e){bad++;console.log("SYNTAX:",e.message);}}
console.log(bad?"SYNTAX FAILED":"index.html parses OK");

const slice=(a,b)=>{const i=src.indexOf(a),j=src.indexOf(b,i);if(i<0||j<0)throw new Error("slice "+a);return src.slice(i,j);};
const sb={console};vm.createContext(sb);
vm.runInContext(slice("function parseJSON(","\n/* light markdown")+"; this.parseJSON=parseJSON;",sb);
const P=sb.parseJSON;
const ok=(name,fn,check)=>{try{const r=fn();console.log(name+":",(check?check(r):true)?"PASS":"FAIL (wrong value)");}catch(e){console.log(name+": FAIL —",e.message);}};
ok("plain",()=>P('{"a":1}'),r=>r.a===1);
ok("fenced",()=>P("```json\n{\"a\":1}\n```"),r=>r.a===1);
ok("prose-wrapped",()=>P('Here you go:\n{"a":{"b":[1,2]}}\nHope that helps'),r=>r.a.b[1]===2);
ok("trailing-comma",()=>P('{"a":[1,2,],"b":{"c":1,},}'),r=>r.a[1]===2&&r.b.c===1);
try{P('{"a":{"b":[1,2');console.log("truncated: FAIL — should throw");}
catch(e){console.log("truncated:",/cut off/.test(e.message)?"PASS (actionable msg)":"FAIL — "+e.message);}
// callClaude continuation sanity: prefill trimming logic present
console.log("auto-continue wired:",src.includes('stop==="max_tokens"')&&src.includes('{role:"assistant",content:out}')?"PASS":"FAIL");
