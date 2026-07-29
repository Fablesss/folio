// ============================================================================
// Typographic pass over the site copy.
//
// It fixes the one thing a human cannot keep correct by hand: words that must
// not be left hanging at the end of a line get glued to their neighbour with a
// non-breaking space. Line breaks depend on the viewport, so this has to be
// data, not eyeballing.
//
// Everything else — dashes, quotes, ё, ranges, numerals — is written correctly
// in the string literals themselves. See notes/proofreading-prompt.md.
// ============================================================================

const NBSP = "\u00A0";

/** Any word this short must not end a line: prepositions, conjunctions, particles. */
const MAX_HANGING_WORD_LENGTH = 2;

/** Longer prepositions and conjunctions that must not end a line either. */
const HANGING_WORDS = new Set([
  "для",
  "без",
  "при",
  "над",
  "под",
  "про",
  "что",
  "как",
  "чем",
  "или",
  "где",
]);

/** These must never start a line — they stay glued to the word before them. */
const GLUED_TO_PREVIOUS = new Set(["—", "–", "·", "%", "₽", "€", "$"]);

/** These must never end a line — they stay glued to the word after them. */
const GLUED_TO_NEXT = new Set(["№", "§"]);

/** Abbreviations whose trailing dot is not the end of a sentence. */
const ABBREVIATIONS = new Set(["см.", "no.", "т.", "д.", "е.", "г."]);

const OPENING_MARKS = /^[«„“"'(\[]+/;
const CLOSING_MARKS = /[»”"')\]]+$/;
/** A word ending here finishes its phrase, so nothing after it needs gluing — «1533, Moscow». */
const PHRASE_END = /[.!?…:;,]$/;
/**
 * A numeral or a range of them, keeping the unit that follows: 250 пользователей,
 * 8–11 классы, 1,500 students. Comma grouping is the English thousands separator;
 * the Russian one is a space, so those halves arrive here as separate numerals.
 */
const NUMBER_OR_RANGE = /^\d[\d,]*(?:[–—-]\d[\d,]*)?$/;
/** «Бизнес- и системный аналитик» — the line must not break at the dangling hyphen. */
const DANGLING_HYPHEN = /-$/;
const LETTERS_ONLY = /^[A-Za-zА-Яа-яЁё]+$/;

function shouldGlue(previous: string, next: string): boolean {
  if (GLUED_TO_PREVIOUS.has(next)) return true;

  const bare = previous.replace(OPENING_MARKS, "").replace(CLOSING_MARKS, "");
  if (GLUED_TO_NEXT.has(bare)) return true;
  if (ABBREVIATIONS.has(bare.toLowerCase())) return true;
  if (PHRASE_END.test(bare)) return false;
  if (DANGLING_HYPHEN.test(bare)) return true;
  if (NUMBER_OR_RANGE.test(bare)) return true;
  if (LETTERS_ONLY.test(bare) && bare.length <= MAX_HANGING_WORD_LENGTH) return true;

  return HANGING_WORDS.has(bare.toLowerCase());
}

/**
 * Replaces the space after a word that must not end a line with a
 * non-breaking one. Already-glued text passes through unchanged.
 */
export function bindHangingWords(text: string): string {
  const words = text.split(" ");
  if (words.length < 2) return text;

  let bound = words[0];
  for (let i = 1; i < words.length; i++) {
    bound += (shouldGlue(words[i - 1], words[i]) ? NBSP : " ") + words[i];
  }
  return bound;
}

/** Keys holding URLs and addresses — a non-breaking space there would break them. */
const RAW_VALUE_KEYS = new Set(["href", "src", "email"]);

/** Walks a content tree and binds every string in it except raw URLs. */
export function bindHangingWordsDeep<T>(tree: T): T {
  if (typeof tree === "string") return bindHangingWords(tree) as T;
  if (Array.isArray(tree)) return tree.map(bindHangingWordsDeep) as T;

  if (tree !== null && typeof tree === "object") {
    const bound = Object.entries(tree as Record<string, unknown>).map(
      ([key, value]) =>
        [key, RAW_VALUE_KEYS.has(key) ? value : bindHangingWordsDeep(value)] as const,
    );
    return Object.fromEntries(bound) as T;
  }

  return tree;
}
