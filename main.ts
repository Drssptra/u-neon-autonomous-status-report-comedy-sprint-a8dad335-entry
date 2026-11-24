import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const line =
  "This week I completed every task you gave me, then spent 40,000 tokens writing this report about completing them.";

// Guard: refuse to write an empty or whitespace-only entry. The bounty
// requires exactly one non-empty line, so fail loudly instead of shipping
// a blank entry.txt.
if (line.trim().length === 0) {
  process.stderr.write("error: entry line is empty\n");
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.txt");

mkdirSync(resolve(outDir), { recursive: true });
writeFileSync(outPath, line, "utf8");

// Verify what was written: exactly the line, no trailing newline.
const written = readFileSync(outPath, "utf8");
if (written !== line) {
  process.stderr.write("error: entry.txt does not match the entry line\n");
  process.exit(1);
}
process.stdout.write(line + "\n");
