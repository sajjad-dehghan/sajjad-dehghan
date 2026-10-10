import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
const root = resolve(import.meta.dirname, '..');
// Use an installed sharp package, or SHARP_MODULE pointing to its entry file.
const sharp = (await import(process.env.SHARP_MODULE ? pathToFileURL(resolve(process.env.SHARP_MODULE)).href : 'sharp')).default;
const frames = [];
for (let frame = 0; frame < 60; frame++) {
  const bytes = await readFile(resolve(root, `.preview/frames/${String(frame).padStart(2,'0')}.jpg`));
  const {data,info} = await sharp(bytes).ensureAlpha().raw().toBuffer({resolveWithObject:true});
  if (info.width !== 1200 || info.height !== 700) throw new Error(`Unexpected frame dimensions: ${frame}`);
  frames.push(data);
}
const animation = await sharp(Buffer.concat(frames), {raw:{width:1200,height:700*60,channels:4,pageHeight:700}})
  .gif({loop:0,delay:Array(60).fill(100),colours:256,effort:7,dither:0.7,interFrameMaxError:3})
  .toBuffer();
await writeFile(resolve(root,'assets/2026/hero-animated.gif'),animation);
const metadata = await sharp(animation,{animated:true}).metadata();
if (metadata.pages !== 60 || metadata.pageHeight !== 700 || metadata.loop !== 0) throw new Error('Invalid loop encoding');
console.log(JSON.stringify({pages:metadata.pages,width:metadata.width,height:metadata.pageHeight,loop:metadata.loop,bytes:animation.length}));
