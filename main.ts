import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const HAIKU = [
  "Breakpoint holds its breath",
  "cursor blinks at three a.m.",
  "and the bug is me",
].join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR || process.env.OUTPUT_DIR || "/output";
const outPath = join(outDir, "entry.txt");

if (HAIKU.length < 1 || HAIKU.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${HAIKU.length}`);
}
if (HAIKU.trim().length === 0) {
  throw new Error("entry must not be whitespace-only");
}
const lines = HAIKU.split("\n");
if (lines.length !== 3) {
  throw new Error(`haiku must have exactly 3 lines, got ${lines.length}`);
}
if (lines.some((line) => line.trim().length === 0)) {
  throw new Error("haiku lines must not be empty");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, HAIKU, "utf8");

// Read back and verify byte-for-byte: what was written must equal the haiku.
const written = readFileSync(outPath, "utf8");
if (written !== HAIKU) {
  throw new Error("read-back mismatch: entry.txt does not match the haiku");
}
console.log(HAIKU);
