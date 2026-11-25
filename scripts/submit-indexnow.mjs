#!/usr/bin/env node
/**
 * Submits all URLs from the live sitemap.xml to IndexNow (Bing, ChatGPT Search,
 * Copilot, Yandex, Naver, Seznam).
 *
 * Usage:
 *   node scripts/submit-indexnow.mjs
 */
import { readFileSync } from "node:fs";

const HOST = "pinypiny.lraitech.com";
const SITE = `https://${HOST}`;
const KEY = readFileSync("seo/indexnow-key.txt", "utf8").trim();
const KEY_LOCATION = `${SITE}/${KEY}.txt`;

const keyRes = await fetch(KEY_LOCATION);
const keyBody = (await keyRes.text()).trim();
if (!keyRes.ok || keyBody !== KEY) {
  console.error(
    `Key verification file not live yet at ${KEY_LOCATION} (HTTP ${keyRes.status})`,
  );
  process.exit(1);
}

const sitemapRes = await fetch(`${SITE}/sitemap.xml`);
if (!sitemapRes.ok) {
  console.error(`Failed to fetch sitemap.xml (HTTP ${sitemapRes.status})`);
  process.exit(1);
}
const xml = await sitemapRes.text();
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (urlList.length === 0) {
  console.error("No <loc> entries found in sitemap.xml");
  process.exit(1);
}

const payload = {
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList,
};

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(payload),
});
const body = await res.text();
console.log(
  `IndexNow POST -> HTTP ${res.status} (${urlList.length} URLs submitted)`,
);
if (body) console.log(body);
if (res.status !== 200 && res.status !== 202) {
  process.exit(1);
}
