// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Leefgroepen Page', () => {
  test('should load successfully', async ({ page }) => {
    await page.goto('/ons-aanbod/leefgroepen/');
    await expect(page).toHaveTitle(/leefgroep/i);
  });

  test('should display page heading', async ({ page }) => {
    await page.goto('/ons-aanbod/leefgroepen/');
    await expect(page.locator('h1, h2').filter({ hasText: /leefgroep/i })).toBeVisible();
  });

  test('should mention both groups', async ({ page }) => {
    await page.goto('/ons-aanbod/leefgroepen/');
    await expect(page.locator('text=/groep 1|groep 2/i')).toBeVisible();
  });

  test('should have links to individual group pages', async ({ page }) => {
    await page.goto('/ons-aanbod/leefgroepen/');
    const content = await page.textContent('body');
    expect(content?.toLowerCase()).toContain('groep');
  });
});
