// Script to convert dashboard/data.js and dashboard/app.js to TypeScript
// Run: node scripts/convert_data.mjs
// Output: dashboard-react/src/data/data.ts

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(__dirname, '..');

// ─── Read source files ──────────────────────────────────────────────────────

const dataJsContent = readFileSync(join(repoRoot, 'dashboard', 'data.js'), 'utf-8');
const appJsContent = readFileSync(join(repoRoot, 'dashboard', 'app.js'), 'utf-8');

// ─── Extract DSA_DATA array ─────────────────────────────────────────────────

// The file starts with: const DSA_DATA = [...]
// We strip the "const DSA_DATA = " prefix and the trailing semicolon/newline

const dataMatch = dataJsContent.match(/const DSA_DATA\s*=\s*(\[[\s\S]*?\]);\s*$/);
if (!dataMatch) {
  console.error('Could not find DSA_DATA in data.js');
  process.exit(1);
}

let DSA_DATA;
try {
  DSA_DATA = JSON.parse(dataMatch[1]);
  console.log(`✓ Parsed ${DSA_DATA.length} programs from data.js`);
} catch (e) {
  console.error('JSON parse error on DSA_DATA:', e.message);
  process.exit(1);
}

// ─── Extract TOPIC_DETAILS from app.js ──────────────────────────────────────

const topicMatch = appJsContent.match(/const TOPIC_DETAILS\s*=\s*(\{[\s\S]*?\});\s*\n/);
if (!topicMatch) {
  console.error('Could not find TOPIC_DETAILS in app.js');
  process.exit(1);
}

// TOPIC_DETAILS is a JS object literal (not valid JSON: keys without quotes, etc.)
// We use a simple approach: eval it in a sandboxed context by wrapping
let TOPIC_DETAILS;
try {
  const fn = new Function(`return ${topicMatch[1]}`);
  TOPIC_DETAILS = fn();
  console.log(`✓ Extracted ${Object.keys(TOPIC_DETAILS).length} topic details from app.js`);
} catch (e) {
  console.error('Eval error on TOPIC_DETAILS:', e.message);
  process.exit(1);
}

// ─── Extract JAVA_ROADMAP from app.js ───────────────────────────────────────

const javaRoadmapMatch = appJsContent.match(/const JAVA_ROADMAP\s*=\s*(\[[\s\S]*?\]);\s*\n/);
let JAVA_ROADMAP;
try {
  const fn = new Function(`return ${javaRoadmapMatch[1]}`);
  JAVA_ROADMAP = fn();
  console.log(`✓ Extracted ${JAVA_ROADMAP.length} Java roadmap nodes`);
} catch (e) {
  console.error('Eval error on JAVA_ROADMAP:', e.message);
  process.exit(1);
}

// ─── Extract DSA_ROADMAP from app.js ────────────────────────────────────────

const dsaRoadmapMatch = appJsContent.match(/const DSA_ROADMAP\s*=\s*(\[[\s\S]*?\]);\s*\n/);
let DSA_ROADMAP;
try {
  const fn = new Function(`return ${dsaRoadmapMatch[1]}`);
  DSA_ROADMAP = fn();
  console.log(`✓ Extracted ${DSA_ROADMAP.length} DSA roadmap nodes`);
} catch (e) {
  console.error('Eval error on DSA_ROADMAP:', e.message);
  process.exit(1);
}

// ─── Generate TypeScript file ────────────────────────────────────────────────

const tsLines = [];

tsLines.push(`// Auto-generated from dashboard/data.js and dashboard/app.js`);
tsLines.push(`// DO NOT EDIT MANUALLY`);
tsLines.push(``);
tsLines.push(`import type { Program, TopicDetail, RoadmapNode } from '../types';`);
tsLines.push(``);

// Programs
tsLines.push(`export const DSA_DATA: Program[] = ${JSON.stringify(DSA_DATA, null, 2)};`);
tsLines.push(``);

// Topic Details
tsLines.push(`export const TOPIC_DETAILS: Record<string, TopicDetail> = ${JSON.stringify(TOPIC_DETAILS, null, 2)};`);
tsLines.push(``);

// Java Roadmap
tsLines.push(`export const JAVA_ROADMAP: RoadmapNode[] = ${JSON.stringify(JAVA_ROADMAP, null, 2)};`);
tsLines.push(``);

// DSA Roadmap
tsLines.push(`export const DSA_ROADMAP: RoadmapNode[] = ${JSON.stringify(DSA_ROADMAP, null, 2)};`);
tsLines.push(``);

// Helper
tsLines.push(`/** Convert camelCase Java filenames to readable display titles */`);
tsLines.push(`export function cleanTitle(filename: string): string {`);
tsLines.push(`  let name = filename.replace(/\\.java$/, '');`);
tsLines.push(`  name = name.replace(/(?<!^)(?=[A-Z])/g, ' ');`);
tsLines.push(`  name = name.replace(/[_-]+/g, ' ');`);
tsLines.push(`  return name.replace(/\\s+/g, ' ').trim();`);
tsLines.push(`}`);
tsLines.push(``);

// Write file
const outDir = join(repoRoot, 'dashboard-react', 'src', 'data');
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

const outPath = join(outDir, 'data.ts');
writeFileSync(outPath, tsLines.join('\n'), 'utf-8');
console.log(`\n✅ Written: ${outPath}`);
console.log(`   Programs: ${DSA_DATA.length}`);
console.log(`   Topics:   ${Object.keys(TOPIC_DETAILS).length}`);
console.log(`   Java RM:  ${JAVA_ROADMAP.length}`);
console.log(`   DSA RM:   ${DSA_ROADMAP.length}`);
