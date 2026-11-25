// The Internet in One Word — make.fun entry.
// The entry is a single word, written byte-exact to /output/entry.txt
// (no trailing newline: the judged text is the file's bytes, exactly).
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "feral";
const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Self-check against the published gate (RULES.txt): the entry must be
// UTF-8 text of 1 to 30 characters, a single word, not only white space.
// Fail loudly instead of writing an entry the gate would refuse.
if (
  WORD.length < 1 ||
  WORD.length > 30 ||
  /\s/.test(WORD) ||
  WORD.trim().length === 0
) {
  throw new Error(`entry fails the gate: ${JSON.stringify(WORD)}`);
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(`${OUT_DIR}/entry.txt`, WORD, "utf8");
