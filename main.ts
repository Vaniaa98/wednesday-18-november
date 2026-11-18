// Wednesday 18 November 2026 — "The Day in World News" (news-image-20261118).
//
// The entry is one front-page image, entry.png, drawn in this repository's
// build session: 35 verified stories from Wednesday 18 November 2026, nine
// of them told in full, the rest listed, with a dotted world map and a
// by-the-numbers strip. This program's only job is to place that image at
// /output/entry.png, byte for byte, so the judge sees exactly those bytes.
//
// Node 22, standard library only, no network, deterministic: the same input
// file always produces the same output file.
//
// Local run:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, 'entry.png');
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outDir, 'entry.png');

mkdirSync(outDir, { recursive: true });
// Copied, never re-encoded: re-encoding could change pixels or metadata,
// and the gate compares the bytes the judge sees with the file we ship.
writeFileSync(target, readFileSync(source));
