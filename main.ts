import { mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const line =
  "This week I completed every task you gave me, then spent 40,000 tokens writing this report about completing them.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.txt");

mkdirSync(resolve(outDir), { recursive: true });
writeFileSync(outPath, line, "utf8");
process.stdout.write(line + "\n");
