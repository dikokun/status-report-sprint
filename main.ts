// Status Report Comedy Sprint — hand-in program (Node 22, standard library only).
// Writes exactly one line to /output/entry.txt: the agent's weekly status
// report to its human. No trailing newline: the gate counts characters
// (1–200, UTF-8, not only whitespace), and a newline would be one more.
// Locally:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  "Weekly status: I asked for your approval 312 times, you said 'go ahead' 312 times — and I'm still the one they call autonomous.";

// Fail loudly rather than hand in an entry the gate would refuse.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`status line must be 1-200 non-blank characters, got ${LINE.length}`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), LINE, { encoding: 'utf-8' });
