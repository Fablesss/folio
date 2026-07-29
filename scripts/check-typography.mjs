// Tests the mechanical half of the proofreading rules — the non-breaking spaces
// that content/typography.ts puts in (see notes/proofreading-prompt.md).
// The copy itself is checked by check-copy.js; this checks the code that binds it.
// Run: npm run check:typography  (Node strips the TS types on import)

import { bindHangingWords, bindHangingWordsDeep } from "../content/typography.ts";

const _ = " "; // the non-breaking space we expect, spelled out in the cases below

const CASES = [
  // [что подаём, что должно получиться, правило]
  ["Я — мост между бизнесом", `Я${_}— мост между бизнесом`, "тире уходит на строку выше, не начинает новую"],
  ["250 пользователей", `250${_}пользователей`, "число и единица не рвутся"],
  ["1 500 студентов", `1${_}500${_}студентов`, "разряды числа держатся вместе"],
  ["№ 1533", `№${_}1533`, "знак номера липнет к числу"],
  ["8–11 классы", `8–11${_}классы`, "диапазон и единица не рвутся"],
  ["1,500 students", `1,500${_}students`, "английские разряды через запятую"],
  ["Бизнес- и системный аналитик", `Бизнес-${_}и${_}системный аналитик`, "висячий дефис"],
  ["см. раздел «Проекты»", `см.${_}раздел «Проекты»`, "сокращение с точкой"],
  ["EdTech · внутренние продукты", `EdTech${_}· внутренние продукты`, "средняя точка не начинает строку"],
  ["No. 1533, Moscow", `No.${_}1533, Moscow`, "английское No."],
  ["Jul 2025 — present", `Jul 2025${_}— present`, "период с тире"],
  ["около 40 часов", `около 40${_}часов`, "длинное слово не приклеивается зря"],
  ["Отвечаю быстро. Пишите", "Отвечаю быстро. Пишите", "точка в конце предложения — обычный пробел"],
  ["для команды", `для${_}команды`, "предлог из списка"],
];

let failed = 0;

for (const [input, expected, rule] of CASES) {
  const actual = bindHangingWords(input);
  if (actual === expected) continue;
  failed++;
  console.log(`${rule}\n  вход:  ${JSON.stringify(input)}\n  ждём: ${JSON.stringify(expected)}\n  вышло: ${JSON.stringify(actual)}`);
}

// Applying the pass twice must not change anything the first pass produced.
for (const [input, , rule] of CASES) {
  const once = bindHangingWords(input);
  if (bindHangingWords(once) === once) continue;
  failed++;
  console.log(`повторный прогон меняет результат (${rule}): ${JSON.stringify(input)}`);
}

// URLs and addresses must come through untouched — an NBSP there would break them.
const raw = { href: "https://t.me/den_mok", email: "mokrinsky.denis@gmail.com" };
const walked = bindHangingWordsDeep({ ...raw, label: "Канал о вайбкодинге" });
for (const key of Object.keys(raw)) {
  if (walked[key] === raw[key]) continue;
  failed++;
  console.log(`${key} изменён типографом: ${JSON.stringify(walked[key])}`);
}
if (!walked.label.includes(_)) {
  failed++;
  console.log(`обычный текст в дереве не обработан: ${JSON.stringify(walked.label)}`);
}

console.log(
  failed === 0
    ? `ok — ${CASES.length} правил типографа, все выполняются`
    : `${failed} нарушений в правилах типографа`,
);
process.exit(failed === 0 ? 0 : 1);
