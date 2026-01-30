// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Navigation', () => {
  const pages = [
    { name: 'missie', path: '/missie/' },
    { name: 'ons-aanbod', path: '/ons-aanbod/' },
    { name: 'professionelen', path: '/professionelen/' },
    { name: 'werk-bij-ons', path: '/werk-bij-ons/' },
    { name: 'partners', path: '/partners/' },
    { name: 'steun-ons', path: '/steun-ons/' },
    { name: 'contact', path: '/contact/' },
    { name: 'cookies', path: '/cookies/' },
    { name: 'crisis-aanbod', path: '/ons-aanbod/crisis/' },
    { name: 'dagverloop', path: '/ons-aanbod/groep-1/dagverloop' },
    { name: 'diagnostisch-aanbod', path: '/ons-aanbod/diagnostisch/' },
    { name: 'kom-op-stage', path: '/werk-bij-ons/kom-op-stage/' },
    { name: 'leefgroep-1', path: '/ons-aanbod/groep-1' },
    { name: 'leefgroep-2', path: '/ons-aanbod/groep-2' },
    { name: 'leefgroepen', path: '/ons-aanbod/leefgroepen/' },
    { name: 'nieuwe-collega', path: '/werk-bij-ons/nieuwe-collega/' },
    { name: 'privacy', path: '/privacy/' },
    { name: 'word-vrijwilliger', path: '/werk-bij-ons/word-vrijwilliger/' },
  ];

  for (const pageInfo of pages) {
    test(`should load ${pageInfo.name} page`, async ({ page }) => {
      // Check that the page loads successfully (status 200)
      const response = await page.goto(pageInfo.path);
      expect(response?.status()).toBe(200);
    });
  }

  test('should navigate between pages', async ({ page }) => {
    await page.goto('/');
    
    // Find and click on a navigation link
    const missionLink = page.locator('a[href*="missie"]').first();
    await expect(missionLink).toBeVisible();
    await missionLink.click();
    await expect(page).toHaveURL(/missie/);
  });
});
