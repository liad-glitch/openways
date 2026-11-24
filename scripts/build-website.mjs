import { cp, mkdir, readFile, readdir, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';

const source=path.resolve('website');
const destination=path.resolve('.output/public');
const pages=['index','growth','change','about','contact'];
for(const page of pages){
 const html=await readFile(path.join(source,page+'.html'),'utf8');
 if(/<\/?(?:x-dc|sc-if|sc-for|helmet)\b|support\.js|\/_blob\/|\.dc\.html/.test(html))throw new Error(`${page}: unconverted Claude Design dependency`);
 if(!html.includes('name="viewport"')||!html.includes('<h1'))throw new Error(`${page}: missing document metadata or heading`);
 for(const match of html.matchAll(/(?:href|src)="([^"{}]+)"/g)){
  const url=match[1];
  if(/^(?:https?:|mailto:|data:|#)/.test(url))continue;
  const file=path.resolve(source,url.split('#')[0]);
  if(!file.startsWith(source+path.sep))throw new Error(`${page}: invalid local URL ${url}`);
  if(!(await stat(file)).isFile())throw new Error(`${page}: missing file ${url}`);
 }
 console.log(`Validated ${page}.html`);
}
const pngs=(await readdir(path.join(source,'assets'))).filter(f=>f.endsWith('.png'));
if(pngs.length!==5)throw new Error('Expected five supplied PNG assets');
for(const png of pngs){const bytes=await readFile(path.join(source,'assets',png));if(bytes.subarray(0,8).toString('hex')!=='89504e470d0a1a0a')throw new Error(`Invalid PNG ${png}`);}
await mkdir(destination,{recursive:true});
await cp(source,destination,{recursive:true});
await writeFile(path.join(destination,'.nojekyll'),'');
await writeFile(path.join(destination,'CNAME'),'openwayssg.com\n');
await writeFile(path.join(destination,'robots.txt'),'User-agent: *\nAllow: /\nSitemap: https://openwayssg.com/sitemap.xml\n');
await writeFile(path.join(destination,'sitemap.xml'),'<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+pages.map(p=>'<url><loc>https://openwayssg.com/'+(p==='index'?'':p+'.html')+'</loc></url>').join('')+'</urlset>');
await writeFile(path.join(destination,'404.html'),'<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Page not found | OpenWays</title></head><body style="font-family:Arial,sans-serif;padding:10vh 8vw;background:#E9F0F8;color:#0E3564"><h1>Page not found</h1><p>The page you are looking for may have moved.</p><a href="/">Return to OpenWays</a></body></html>');
console.log('Built five pages and five original images for GitHub Pages.');
