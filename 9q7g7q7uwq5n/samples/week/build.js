/* Extract the REAL exporter functions from index.html and run the authored week through them,
   so the .tex we compile is exactly what the app's generator produces. */
const fs = require("fs");
const path = require("path");
const ROOT = path.resolve(__dirname, "../..");
const src = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");

// brace-matching extractor that skips ' " ` strings, //, /* */, and /regex/ literals
function extractFn(s, name){
  const i = s.indexOf("function " + name + "(");
  if (i < 0) throw new Error("function not found: " + name);
  let depth = 0, started = false, st = 0; // 0 code,1 ',2 ",3 `,4 //,5 /* */,6 regex
  for (let k = i; k < s.length; k++){
    const c = s[k], n = s[k+1];
    if (st === 0){
      if (c === "'") { st = 1; continue; }
      if (c === '"') { st = 2; continue; }
      if (c === "`") { st = 3; continue; }
      if (c === "/" && n === "/") { st = 4; continue; }
      if (c === "/" && n === "*") { st = 5; continue; }
      if (c === "/") { st = 6; continue; }          // these fns have no division — every bare / starts a regex
      if (c === "{") { depth++; started = true; }
      else if (c === "}") { depth--; if (started && depth === 0) return s.slice(i, k+1); }
    } else if (st === 1) { if (c === "\\") k++; else if (c === "'") st = 0; }
    else if (st === 2) { if (c === "\\") k++; else if (c === '"') st = 0; }
    else if (st === 3) { if (c === "\\") k++; else if (c === "`") st = 0; }
    else if (st === 4) { if (c === "\n") st = 0; }
    else if (st === 5) { if (c === "*" && n === "/") { st = 0; k++; } }
    else if (st === 6) { if (c === "\\") k++; else if (c === "/" || c === "\n") st = 0; }
  }
  throw new Error("unterminated function: " + name);
}

const NAMES = ["latexEscapeText","mdToLatex","stripExampleLabel","problemLatex","tikzFor",
               "clozeToLatex","toLatexWorksheet","mdNotesToLatex","guidedNotesLatex","toLatexNotes"];
const body = NAMES.map(n => extractFn(src, n)).join("\n\n");
const api = new Function(body + "\n; return {toLatexWorksheet,toLatexNotes};")();

const wk = require("./precal-week.js");
const co = wk.course;
const outDir = path.join(__dirname, "tex");
fs.mkdirSync(outDir, { recursive: true });

const manifest = [];
for (const day of Object.keys(wk.days)){
  const dd = wk.days[day];
  const write = (suffix, tex) => { const f = day + "-" + suffix; fs.writeFileSync(path.join(outDir, f + ".tex"), tex); manifest.push(f); };
  write("worksheet",      api.toLatexWorksheet(co, dd));
  write("notes-student",  api.toLatexNotes(co, dd, {}));
  write("notes-teacher",  api.toLatexNotes(co, dd, { key: true }));
  write("notes-2up",      api.toLatexNotes(co, dd, { twoup: true }));
}
fs.writeFileSync(path.join(outDir, "manifest.json"), JSON.stringify(manifest, null, 0));
console.log("Extracted " + NAMES.length + " real exporter fns; wrote " + manifest.length + " .tex files:");
console.log(manifest.join("  "));
