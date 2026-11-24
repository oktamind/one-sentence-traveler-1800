// One Sentence for a Traveler from 1800 — make.fun entry.
// Writes one sentence to /output/entry.txt: the modern internet,
// explained to someone who has just stepped out of the year 1800.
// Deterministic: the same bytes every run.
//
// The sentence: a book that writes back. Everything in it is built
// from things a person from 1800 already knows — a book, a table,
// the sea, ink — and it covers what the internet does: whatever any
// man writes for all to read lies open before you in a breath, and
// whatever you write is read across the sea at once. No word in it
// was coined after 1800: no "internet", "computer", "website",
// "email", "online", "digital", "screen", "data", "network".
// The closing phrase is "as you write it", not the field's worn-out
// "before the ink dries": it is fresher, and truer to words that
// appear on a reader's table the moment they are written.
// 170 characters, one sentence.
import { mkdirSync, writeFileSync } from "node:fs";

const SENTENCE =
  "It is a book that writes back: whatever any man writes for all to read lies open on your table in a breath, and whatever you write is read across the sea as you write it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, SENTENCE, "utf8");
