import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
const root = resolve(import.meta.dirname, '..');
const types = {'.html':'text/html; charset=utf-8','.png':'image/png','.jpg':'image/jpeg','.woff2':'font/woff2','.svg':'image/svg+xml'};
createServer(async (req,res) => {
  const pathname = new URL(req.url, 'http://localhost').pathname;
  if (pathname === '/') { res.writeHead(302, { Location: '/assets/2026/source/design.html' }).end(); return; }
  const file = resolve(root, `.${pathname === '/' ? '/assets/2026/source/design.html' : pathname}`);
  if (!file.startsWith(root + sep)) { res.writeHead(403).end(); return; }
  try { res.setHeader('Content-Type', types[extname(file)] ?? 'application/octet-stream');res.end(await readFile(file)); }
  catch { res.writeHead(404).end('Not found'); }
}).listen(4331, '127.0.0.1', () => console.log('Profile artwork: http://127.0.0.1:4331/'));
