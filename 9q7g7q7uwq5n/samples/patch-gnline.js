const fs=require("fs"),path=require("path");
const F=path.join(__dirname,"..","index.html");
let src=fs.readFileSync(F,"utf8");

const oldFn=`function gnLine(str,key){
  let out="",last=0;const re=/\\{\\{([^|{}]*)(?:\\|([^{}]*))?\\}\\}/g;let m;str=String(str==null?"":str);
  while((m=re.exec(str))){out+=md(str.slice(last,m.index));
    out+= key? '<span class="czk">'+md(m[1])+'</span>'
             : '<span class="czb" style="min-width:'+esc((m[2]||"2cm").trim())+'"></span>';
    last=m.index+m[0].length;}
  out+=md(str.slice(last));return out;
}`;
const newFn=`function gnLine(str,key){
  str=String(str==null?"":str);const blanks=[],math=[];
  str=str.replace(/\\{\\{([^|{}]*)(?:\\|([^{}]*))?\\}\\}/g,function(m,ans,w){var i=blanks.length;
    blanks.push(key?'<span class="czk">'+esc(ans||"")+'</span>':'<span class="czb" style="min-width:'+esc((w||"2cm").trim())+'"></span>');
    return String.fromCharCode(1)+i+String.fromCharCode(1);});
  str=str.replace(/\\$[^$]*\\$/g,function(x){math.push(x);return String.fromCharCode(2)+(math.length-1)+String.fromCharCode(2);});
  str=esc(str).replace(/\\*\\*([^*]+)\\*\\*/g,"<strong>$1</strong>");
  str=str.replace(new RegExp(String.fromCharCode(2)+"(\\\\d+)"+String.fromCharCode(2),"g"),function(_,i){return math[+i];});
  str=str.replace(new RegExp(String.fromCharCode(1)+"(\\\\d+)"+String.fromCharCode(1),"g"),function(_,i){return blanks[+i];});
  return str;
}`;
const c=src.split(oldFn).length-1;
if(c!==1){console.log("gnLine match count:",c);process.exit(1);}
src=src.replace(oldFn,newFn);

// tighten work box a touch so a copy fits one half-sheet comfortably
src=src.replace(".gn-work{height:2.4cm;",".gn-work{height:1.9cm;");

fs.writeFileSync(F,src);
console.log("gnLine -> inline renderer; gn-work 2.4->1.9cm");
