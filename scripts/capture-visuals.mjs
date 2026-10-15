import { chromium } from '@playwright/test';
import { mkdir, writeFile } from 'node:fs/promises';
import assert from 'node:assert/strict';
const baseURL = process.env.PINYPINY_TEST_URL || 'http://127.0.0.1:3100';
const directory = 'output/playwright/visuals';
await mkdir(directory, { recursive: true });
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 1050 }, reducedMotion: 'reduce' });
const results = [];
for (const locale of ['en','zh']) {
 await page.goto(`${baseURL}${locale === 'zh' ? '/zh' : '/'}`);
 await page.evaluate(() => document.fonts.ready);
 for (const width of [320,390,768,1440]) {
  await page.setViewportSize({ width, height: width === 1440 ? 1050 : 844 });
  for (const theme of ['light','dark']) {
   await page.evaluate(theme => { document.documentElement.dataset.theme = theme; document.querySelectorAll('img').forEach(i=>i.loading='eager'); }, theme);
   await page.locator('img').evaluateAll(images => Promise.all(images.map(i => i.decode())));
   await page.evaluate(() => window.scrollTo(0,0));
   const overflow = await page.evaluate(() => document.documentElement.scrollWidth > innerWidth);
   assert.equal(overflow, false, `${locale}/${width}/${theme} overflow`);
   const targets = await page.locator('.theme-toggle, .mobile-nav > summary').evaluateAll(elements => elements.filter(e=>e.getBoundingClientRect().width).map(e=>({ width:e.getBoundingClientRect().width,height:e.getBoundingClientRect().height })));
   assert(targets.every(r=>r.width>=44 && r.height>=44), 'Header touch targets must be 44px');
   const file = `home-${locale}-${width}-${theme}.png`;
   await page.screenshot({ path:`${directory}/${file}`, fullPage:width===390||width===1440, scale:'css', animations:'disabled' });
   results.push({locale,width,theme,overflow,file});
  }
 }
}
for (const [route,width,theme,name] of [['/digital-scrapbook',1440,'dark','scenario'],['/zh/guides/photo-stickers',390,'light','guide'],['/zh/privacy',768,'light','privacy'],['/support',320,'dark','support']]) {
 await page.setViewportSize({width,height:950});
 await page.goto(`${baseURL}${route}`);
 await page.evaluate(theme=>{document.documentElement.dataset.theme=theme;document.querySelectorAll('img').forEach(i=>i.loading='eager');},theme);
 await page.locator('img').evaluateAll(images=>Promise.all(images.map(i=>i.decode())));
 assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth), false,route);
 await page.screenshot({path:`${directory}/${name}-${width}-${theme}.png`,fullPage:true,scale:'css',animations:'disabled'});
 results.push({route,width,theme,file:`${name}-${width}-${theme}.png`,overflow:false});
}
await page.goto(baseURL);
await page.keyboard.press('Tab');
assert.equal(await page.locator('.skip-link').evaluate(el=>el===document.activeElement),true,'Keyboard skip link');
await writeFile(`${directory}/checks.json`,JSON.stringify({baseURL,checks:results,keyboardSkipLink:true},null,2));
await browser.close();
console.log(`Verified ${results.length} rendered states, touch targets, overflow and keyboard skip link.`);
