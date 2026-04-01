// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('SEO - Meta Tags', () => {
  const pages = [
    { path: '/', titlePattern: /OOOC De Zandberg/ },
    { path: '/missie/', titlePattern: /Onze Missie/ },
    { path: '/ons-aanbod/', titlePattern: /Ons Aanbod/ },
    { path: '/ons-aanbod/diagnostisch/', titlePattern: /diagnostisch/i },
    { path: '/ons-aanbod/crisis/', titlePattern: /crisis/i },
    { path: '/ons-aanbod/leefgroepen/', titlePattern: /groepen/i },
    { path: '/professionelen/', titlePattern: /Professionelen/ },
    { path: '/werk-bij-ons/', titlePattern: /Werk bij Ons/ },
    { path: '/partners/', titlePattern: /Partners/ },
    { path: '/steun-ons/', titlePattern: /Steun Ons/ },
    { path: '/contact/', titlePattern: /Contact/ },
  ];

  for (const pageInfo of pages) {
    test(`${pageInfo.path} should have a title containing site name`, async ({ page }) => {
      await page.goto(pageInfo.path);
      await expect(page).toHaveTitle(pageInfo.titlePattern);
      // Every page title should also include the site name for brand recognition
      await expect(page).toHaveTitle(/De Zandberg/);
    });

    test(`${pageInfo.path} should have a meta description`, async ({ page }) => {
      await page.goto(pageInfo.path);
      const description = page.locator('meta[name="description"]');
      await expect(description).toHaveAttribute('content', /.{50,}/);
    });

    test(`${pageInfo.path} should have Open Graph tags`, async ({ page }) => {
      await page.goto(pageInfo.path);
      const ogTitle = page.locator('meta[property="og:title"]');
      const ogDescription = page.locator('meta[property="og:description"]');
      const ogType = page.locator('meta[property="og:type"]');
      await expect(ogTitle).toHaveAttribute('content', /.+/);
      await expect(ogDescription).toHaveAttribute('content', /.+/);
      await expect(ogType).toHaveAttribute('content', /.+/);
    });

    test(`${pageInfo.path} should have a canonical URL`, async ({ page }) => {
      await page.goto(pageInfo.path);
      const canonical = page.locator('link[rel="canonical"]');
      await expect(canonical).toHaveAttribute('href', /.+/);
    });
  }
});

test.describe('SEO - Structured Data', () => {
  test('should have LocalBusiness JSON-LD on every page', async ({ page }) => {
    await page.goto('/');
    const scripts = page.locator('script[type="application/ld+json"]');
    const count = await scripts.count();
    expect(count).toBeGreaterThanOrEqual(1);

    // Find the LocalBusiness schema
    let foundLocalBusiness = false;
    for (let i = 0; i < count; i++) {
      const content = await scripts.nth(i).textContent();
      if (content && content.includes('LocalBusiness')) {
        foundLocalBusiness = true;
        const jsonLd = JSON.parse(content);
        expect(jsonLd['@type']).toBe('LocalBusiness');
        expect(jsonLd.name).toBe('OOOC De Zandberg');
        expect(jsonLd.telephone).toBeTruthy();
        expect(jsonLd.address).toBeTruthy();
        expect(jsonLd.address.addressLocality).toBe('Varsenare');
        expect(jsonLd.address.addressCountry).toBe('BE');
        expect(jsonLd.geo).toBeTruthy();
      }
    }
    expect(foundLocalBusiness).toBe(true);
  });

  test('LocalBusiness schema should be present on subpages too', async ({ page }) => {
    await page.goto('/contact/');
    const scripts = page.locator('script[type="application/ld+json"]');
    const allContent = await scripts.allTextContents();
    const hasLocalBusiness = allContent.some(content => content.includes('LocalBusiness'));
    expect(hasLocalBusiness).toBe(true);
  });
});

test.describe('SEO - Sitemap and Robots', () => {
  test('should have a sitemap.xml', async ({ page }) => {
    const response = await page.goto('/sitemap.xml');
    expect(response?.status()).toBe(200);
    const content = await page.content();
    expect(content).toContain('<urlset');
    expect(content).toContain('<loc>');
  });

  test('sitemap should contain key pages', async ({ page }) => {
    await page.goto('/sitemap.xml');
    const content = await page.content();
    expect(content).toContain('/missie/');
    expect(content).toContain('/ons-aanbod/');
    expect(content).toContain('/contact/');
  });

  test('should have a robots.txt', async ({ page }) => {
    const response = await page.goto('/robots.txt');
    expect(response?.status()).toBe(200);
    const content = await page.textContent('body');
    expect(content).toContain('User-agent');
    expect(content).toContain('Sitemap');
  });
});

test.describe('SEO - Content Quality', () => {
  test('home page should contain key SEO terms', async ({ page }) => {
    await page.goto('/');
    const content = await page.textContent('body');
    expect(content).toContain('OOOC');
    expect(content).toContain('De Zandberg');
    expect(content).toContain('Agentschap Opgroeien');
  });

  test('every page should have exactly one h1 tag', async ({ page }) => {
    const pagePaths = ['/', '/missie/', '/ons-aanbod/', '/contact/'];
    for (const path of pagePaths) {
      await page.goto(path);
      const h1Count = await page.locator('h1').count();
      expect(h1Count).toBe(1);
    }
  });

  test('all images should have alt attributes', async ({ page }) => {
    const pagePaths = ['/', '/missie/', '/ons-aanbod/', '/contact/'];
    for (const path of pagePaths) {
      await page.goto(path);
      const images = page.locator('img');
      const imageCount = await images.count();
      for (let i = 0; i < imageCount; i++) {
        const alt = await images.nth(i).getAttribute('alt');
        expect(alt).toBeTruthy();
      }
    }
  });

  test('footer should contain organization contact details', async ({ page }) => {
    await page.goto('/');
    const footer = await page.textContent('footer');
    expect(footer).toContain('OOOC De Zandberg');
    expect(footer).toContain('info@zandberg.be');
    expect(footer).toContain('Varsenare');
    expect(footer).toContain('050/40.66.80');
  });
});
