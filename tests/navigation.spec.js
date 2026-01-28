// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Navigation', () => {
  const pages = [
    { name: 'missie', path: '/missie' },
    { name: 'ons-aanbod', path: '/ons-aanbod' },
    { name: 'professionelen', path: '/professionelen' },
    { name: 'werk-bij-ons', path: '/werk-bij-ons' },
    { name: 'partners', path: '/partners' },
    { name: 'steun-ons', path: '/steun-ons' },
    { name: 'contact', path: '/contact' },
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
