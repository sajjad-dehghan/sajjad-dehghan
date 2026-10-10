import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import { resolve } from 'node:path';
const root = resolve(import.meta.dirname, '..');
const readme = await readFile(resolve(root,'README.md'),'utf8');
const names = ['hero','approach','showroom','linkup','baxi','chatter','sandwich','dariwall','osgolia','dino','four','tic-tac','wrist','contact'];
const expected = name => name === 'hero' ? [1200,700] : name === 'approach' ? [1200,310] : name === 'showroom' ? [1200,165] : name === 'contact' ? [1200,340] : [600,440];
for (const name of names) {
  const bytes = await readFile(resolve(root,`assets/2026/${name}.png`));
  assert.equal(bytes.subarray(1,4).toString(),'PNG');
  assert.deepEqual([bytes.readUInt32BE(16),bytes.readUInt32BE(20)],expected(name),name);
  assert.ok(readme.includes(`./assets/2026/${name}.png`),`README references ${name}`);
}
for (const ref of readme.matchAll(/(?:src="|\]\()(\.\/[^"\)]+)/g)) await stat(resolve(root,ref[1]));
assert.equal((readme.match(/<td /g)||[]).length,10);
const order = names.slice(3,-1).map(name=>readme.indexOf(`./assets/2026/${name}.png`));
assert.deepEqual(order,[...order].sort((a,b)=>a-b),'Selected project order');
assert.ok(!/sso-case-portal|13-agent|hero-dark\.png|9ED0BC/i.test(readme),'No obsolete profile content');
assert.ok(!/<(?:script|style)|style=/i.test(readme),'GitHub-safe Markdown/HTML');
for (const tag of readme.matchAll(/<img\b[^>]+>/g)) assert.ok(/alt="[^"\n]+"/.test(tag[0]),'Accessible images');
const design = await readFile(resolve(root,'assets/2026/source/design.html'),'utf8');
assert.ok(design.includes('object-fit:contain'));
assert.equal((design.match(/data-export=/g)||[]).length,14);
const snake = await readFile(resolve(root,'.github/workflows/snake.yml'),'utf8');
assert.ok(snake.includes('#AE8AF8'));
assert.ok(snake.includes('target_branch: output'));
assert.ok(/branches:\s*(?:\[\s*main\s*\]|-\s+main)/.test(snake));
for (const license of ['Kanit','Inter']) assert.ok((await readFile(resolve(root,`assets/2026/fonts/${license}-OFL.txt`),'utf8')).includes('SIL OPEN FONT LICENSE'));
console.log('PASS: 14 native image dimensions, 10 ordered work cards, local assets, accessible GitHub markup, font licenses and activity workflow.');
