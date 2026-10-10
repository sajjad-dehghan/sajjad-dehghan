import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
const root = resolve(import.meta.dirname, '..');
const types = {'.html':'text/html; charset=utf-8','.png':'image/png','.gif':'image/gif','.jpg':'image/jpeg','.woff2':'font/woff2','.svg':'image/svg+xml'};
createServer(async (req,res) => {
  const url = new URL(req.url, 'http://localhost');
  const pathname = url.pathname;
  if (pathname === '/') { res.writeHead(302, { Location: '/assets/2026/source/design.html' }).end(); return; }
  const file = resolve(root, `.${pathname === '/' ? '/assets/2026/source/design.html' : pathname}`);
  if (!file.startsWith(root + sep)) { res.writeHead(403).end(); return; }
  try {
    res.setHeader('Content-Type', types[extname(file)] ?? 'application/octet-stream');
    let content = await readFile(file);
    // Deterministic browser frames of the same CSS motion, without changing the portrait pixels.
    if (pathname.endsWith('/source/design.html') && url.searchParams.has('frame')) {
      const frame = Number(url.searchParams.get('frame'));
      if (!Number.isInteger(frame) || frame < 0 || frame >= 60) {res.writeHead(400).end('Frame must be 0–59');return;}
      content = content.toString().replace('</style>', `.portrait{animation-play-state:paused!important;animation-delay:-${frame / 10}s!important}</style>`);
    }
    res.end(content);
  }
  catch { res.writeHead(404).end('Not found'); }
}).listen(4331, '127.0.0.1', () => console.log('Profile artwork: http://127.0.0.1:4331/'));
