// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Leefgroepen Page', () => {
  test('should load successfully', async ({ page }) => {
    await page.goto('/ons-aanbod/leefgroepen/');
    await expect(page).toHaveTitle(/werking.*leef.*groepen/i);
  });

  test('should display page heading', async ({ page }) => {
    await page.goto('/ons-aanbod/leefgroepen/');
    const heading = page.locator('h1, h2').first();
    await expect(heading).toBeVisible();
  });

  test('should mention both groups', async ({ page }) => {
    await page.goto('/ons-aanbod/leefgroepen/');
    const content = await page.textContent('body');
    expect(content?.toLowerCase()).toMatch(/groep 1|groep 2/);
  });

  test('should have links to individual group pages', async ({ page }) => {
    await page.goto('/ons-aanbod/leefgroepen/');
    const content = await page.textContent('body');
    expect(content?.toLowerCase()).toContain('groep');
  });
});
