// Mechanical proofreading checks for the site copy (see notes/proofreading-prompt.md).
// Only rules a regex can decide — everything subtler is on the human doing the pass.
// Run: npm run check:copy

const fs = require("fs");
const path = require("path");

const SOURCE = path.join(__dirname, "..", "content", "site.ts");

const RULES = [
  { name: "прямой апостроф вместо ’", test: /'/ },
  { name: "экранированная прямая кавычка вместо « » или “ ”", test: /\\"/ },
  { name: "три точки вместо …", test: /\.\.\./ },
  { name: "дефис вместо тире", test: / - / },
  { name: "значок приблизительности вместо слова «около»", test: /[~≈]/ },
  { name: "сокращение без пробела (нужно «и т. д.»)", test: /\bт\.[дп]\./ },
  { name: "диапазон лет через дефис (нужно 2012–2016)", test: /\b\d{4}-\d{4}\b/ },
  { name: "двойной пробел", test: / {2}/ },
  { name: "пробел по краям строки", test: /^ | $/ },
  { name: "пробел перед знаком препинания", test: / [,.;:!?]/ },
  { name: "№ или No. без пробела перед числом", test: /(№|No\.)\d/ },
  { name: "диапазон лет с пробелами (нужно 2012–2016)", test: /\b\d{4} [—–-] \d{4}\b/ },
  { name: "неразрывный пробел руками (его ставит content/typography.ts)", test: /\u00A0/ },
];

const literals = fs.readFileSync(SOURCE, "utf8").match(/"[^"\n]*"/g) || [];

let failures = 0;
for (const literal of literals) {
  const text = literal.slice(1, -1);
  for (const rule of RULES) {
    if (rule.test.test(text)) {
      console.log(`${rule.name}\n  ${literal}`);
      failures++;
    }
  }
}

console.log(
  failures === 0
    ? `ok — ${literals.length} строк, замечаний нет`
    : `${failures} замечаний в ${literals.length} строках`,
);
process.exit(failures === 0 ? 0 : 1);
