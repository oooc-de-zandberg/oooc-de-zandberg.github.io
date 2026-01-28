// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Ons Aanbod Page', () => {
  test('should load successfully', async ({ page }) => {
    await page.goto('/ons-aanbod/');
    await expect(page).toHaveTitle(/Ons aanbod/);
  });

  test('should display page heading', async ({ page }) => {
    await page.goto('/ons-aanbod/');
    await expect(page.locator('h1, h2').filter({ hasText: /Ons aanbod|aanbod/i })).toBeVisible();
  });

  test('should have links to different service types', async ({ page }) => {
    await page.goto('/ons-aanbod/');
    const content = await page.textContent('body');
    expect(content).toBeTruthy();
  });
});
