import { test, expect } from "@playwright/test";

const slugs = [
  "",
  "digital-scrapbook",
  "photo-journal",
  "travel-journal",
  "guides",
  "guides/iphone-digital-scrapbook",
  "guides/photo-stickers",
  "guides/travel-journal-ideas",
  "about",
  "support",
  "privacy",
  "terms",
];

test("all 24 pages are complete, canonical and reciprocally localized", async ({
  page,
  request,
}) => {
  const titles = new Set<string>();
  for (const locale of ["en", "zh"]) {
    for (const slug of slugs) {
      const path =
        `${locale === "zh" ? "/zh" : ""}${slug ? `/${slug}` : "/"} `
          .trim()
          .replace(/\/$/, "") || "/";
      const response = await page.goto(path);
      expect(response?.status(), path).toBe(200);
      await expect(page.locator("html")).toHaveAttribute(
        "lang",
        locale === "zh" ? "zh-CN" : "en",
      );
      await expect(page.locator("h1")).toHaveCount(1);
      const title = await page.title();
      expect(titles.has(title), title).toBeFalsy();
      titles.add(title);
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
        "href",
        `https://pinypiny.lraitech.com${path === "/" ? "" : path}`,
      );
      await expect(page.locator('link[hreflang="en"]')).toHaveCount(1);
      await expect(page.locator('link[hreflang="zh-CN"]')).toHaveCount(1);
      expect(await page.locator("main").innerText()).not.toContain("undefined");
      await expect(
        page.getByRole("link", {
          name: locale === "zh" ? "English" : "简体中文",
          exact: true,
        }),
      ).toHaveAttribute(
        "href",
        `${locale === "zh" ? "" : "/zh"}${slug ? `/${slug}` : ""}` || "/",
      );
    }
  }
  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.status()).toBe(200);
  expect((await sitemap.text()).match(/<loc>/g)?.length).toBe(24);
  expect((await request.get("/robots.txt")).status()).toBe(200);
  expect((await request.get("/llms.txt")).status()).toBe(200);
});

test("a search visitor can read a guide, change language and download when analytics is blocked", async ({
  page,
}) => {
  await page.route(/umami/, (route) => route.abort());
  await page.addInitScript(() => {
    Object.defineProperty(window, "umami", {
      configurable: true,
      value: {
        track() {
          throw new Error("Simulated analytics outage");
        },
      },
    });
  });
  await page.goto("/digital-scrapbook");
  await page
    .locator('a[href="/guides/iphone-digital-scrapbook"]')
    .first()
    .click();
  await expect(page).toHaveURL(/\/guides\/iphone-digital-scrapbook$/);
  await page.getByRole("link", { name: "简体中文", exact: true }).click();
  await expect(page).toHaveURL(/\/zh\/guides\/iphone-digital-scrapbook$/);
  const download = page.locator("main a[data-download]").first();
  await expect(download).toHaveAttribute(
    "href",
    /https:\/\/apps\.apple\.com\/.*6804919805/,
  );
  const intendedDestination = await download.getAttribute("href");
  // WebKit hands even a plain apps.apple.com anchor to the OS before HTTP routing.
  // Keep the real URL assertion above; substitute only that native handoff boundary.
  await page.route("https://store-handoff.test/**", (route) =>
    route.fulfill({ status: 200, contentType: "text/html", body: "<h1>Store handoff received</h1>" }),
  );
  await page.evaluate(() => document.addEventListener("click", event => {
    const anchor = (event.target as Element).closest<HTMLAnchorElement>("a[data-download]");
    if (anchor && !event.defaultPrevented) anchor.href = `https://store-handoff.test/?destination=${encodeURIComponent(anchor.href)}`;
  }));
  await download.click();
  await expect(page).toHaveURL(/^https:\/\/store-handoff\.test\//);
  expect(new URL(page.url()).searchParams.get("destination")).toBe(intendedDestination);
  await expect(page.getByRole("heading", { name: "Store handoff received" })).toBeVisible();
});

test("real examples, video, QR, themes and mobile navigation remain usable", async ({
  page,
}) => {
  await page.goto("/zh");
  const image = page.locator("[data-style-image]");
  const firstSrc = await image.getAttribute("src");
  await page.getByRole("button", { name: "拼贴", exact: true }).click();
  await expect(image).not.toHaveAttribute("src", firstSrc!);
  await expect(page.locator("video")).toHaveAttribute("preload", "none");
  expect(await page.locator("video source").getAttribute("src")).toMatch(
    /\.mp4$/,
  );
  await page.locator("details.download-qr summary").last().click();
  await expect(
    page.locator("details.download-qr[open] img").first(),
  ).toBeVisible();
  await page.getByRole("button", { name: "切换为深色模式" }).click();
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await expect(
    page.getByRole("button", { name: "切换为浅色模式" }),
  ).toBeVisible();
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBeTruthy();
});

test("essential content and App Store links work without JavaScript", async ({
  browser,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto("http://127.0.0.1:3100/zh/travel-journal");
  await expect(page.locator("h1")).toBeVisible();
  await expect(page.locator("main a[data-download]").first()).toHaveAttribute(
    "href",
    /6804919805/,
  );
  await expect(
    page.locator('main a[href="/zh/guides/travel-journal-ideas"]').first(),
  ).toBeVisible();
  await context.close();
});

test("all published images, video, captions, icons and internal links resolve", async ({
  page,
  request,
}) => {
  test.setTimeout(90_000);
  const resources = new Set<string>([
    "/assets/pinypiny/showcase/demo.mp4",
    "/assets/pinypiny/showcase/demo-en.vtt",
    "/assets/pinypiny/showcase/demo-zh.vtt",
    "/assets/pinypiny/og-en.jpg",
    "/assets/pinypiny/og-zh.jpg",
    "/favicon.ico",
    "/icon.png",
    "/apple-icon.png",
  ]);
  const links = new Set<string>();
  for (const locale of ["en", "zh"])
    for (const slug of slugs) {
      await page.goto(
        `${locale === "zh" ? "/zh" : ""}${slug ? `/${slug}` : ""}` || "/",
      );
      for (const src of await page
        .locator("img")
        .evaluateAll((images) =>
          images.map((i) => i.getAttribute("src")).filter(Boolean),
        ))
        if (src?.startsWith("/")) resources.add(src);
      for (const href of await page
        .locator("a[href]")
        .evaluateAll((anchors) => anchors.map((a) => a.getAttribute("href"))))
        if (href?.startsWith("/")) links.add(href.split("#")[0] || "/");
      const schema = await page
        .locator('script[type="application/ld+json"]')
        .textContent();
      expect(
        JSON.parse(schema!)["@graph"].some(
          (node: { "@type": string }) =>
            node["@type"] === "SoftwareApplication",
        ),
      ).toBeTruthy();
    }
  for (const url of [...resources, ...links]) {
    const response = await request.get(url);
    expect(response.status(), url).toBe(200);
    if (resources.has(url))
      expect(response.headers()["content-type"], url).not.toContain(
        "text/html",
      );
  }
  for (const path of ["/privacy", "/terms", "/zh/privacy", "/zh/terms"]) {
    await page.goto(path);
    for (const id of [
      "overview",
      "data",
      "third-parties",
      "retention",
      "changes",
      "contact",
    ])
      await expect(page.locator(`#${id}`)).toHaveCount(1);
  }
});

test("both languages fit representative sizes and support has a mobile download", async ({
  page,
}) => {
  for (const width of [320, 390, 768, 1440])
    for (const locale of ["en", "zh"]) {
      await page.setViewportSize({ width, height: 844 });
      await page.goto(locale === "zh" ? "/zh" : "/");
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
        `${locale}:${width}`,
      ).toBeTruthy();
      if (width === 390) {
        const cta = await page.locator("[data-primary-download]").boundingBox();
        const work = await page.locator(".hero-stage").boundingBox();
        expect(cta!.y + cta!.height).toBeLessThan(844);
        expect(work!.y + work!.height).toBeLessThan(844);
      }
      await page.emulateMedia({ reducedMotion: "reduce" });
      expect(
        await page.evaluate(
          () => getComputedStyle(document.documentElement).scrollBehavior,
        ),
      ).toBe("auto");
    }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/zh/support");
  await expect(page.locator("main a[data-download]").first()).toBeVisible();
  await page.getByLabel("展开导航", { exact: true }).click();
  await expect(
    page.locator('.mobile-nav a[data-download="menu"]'),
  ).toBeVisible();
  await page.goto("/zh");
  await page.locator(".faq-section").scrollIntoViewIfNeeded();
  await expect(page.locator(".sticky-download")).toHaveClass(/is-visible/);
  await page.screenshot({ path: test.info().outputPath("mobile-sticky.png") });
});

test("video decodes and analytics sends only predefined context", async ({
  page,
}) => {
  const events: {
    name: string;
    locale: string;
    page: string;
    position?: string;
    example?: string;
  }[] = [];
  page.on("console", (message) => {
    if (message.text().startsWith("TEST_EVENT "))
      events.push(JSON.parse(message.text().slice(11)));
  });
  await page.addInitScript(() => {
    Object.defineProperty(window, "umami", {
      configurable: true,
      value: {
        track(name: string, context: Record<string, string>) {
          console.log(`TEST_EVENT ${JSON.stringify({ name, ...context })}`);
        },
      },
    });
  });
  await page.goto("/zh?private=must-not-be-sent");
  await page.getByRole("button", { name: "拼贴", exact: true }).click();
  await page.locator("details.download-qr summary").last().click();
  const video = page.locator("video");
  await video.evaluate(async (element) => {
    const player = element as HTMLVideoElement;
    player.muted = true;
    await player.play();
  });
  await expect
    .poll(() =>
      video.evaluate((element) => (element as HTMLVideoElement).currentTime),
    )
    .toBeGreaterThan(0);
  const duration = await video.evaluate(
    (element) => (element as HTMLVideoElement).duration,
  );
  expect(duration).toBeGreaterThan(18);
  expect(duration).toBeLessThan(30);
  await video.evaluate((element) => (element as HTMLVideoElement).pause());
  await expect.poll(() => events.length).toBeGreaterThanOrEqual(3);
  expect(events.map((event) => event.name)).toEqual(
    expect.arrayContaining(["example_change", "qr_open", "demo_play"]),
  );
  for (const event of events)
    expect(
      Object.keys(event).every((key) =>
        ["name", "locale", "page", "position", "example"].includes(key),
      ),
    ).toBeTruthy();
  expect(JSON.stringify(events)).not.toContain("must-not-be-sent");
});
