// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Crisis Aanbod Page', () => {
  test('should load successfully', async ({ page }) => {
    await page.goto('/ons-aanbod/crisis/');
    await expect(page).toHaveTitle(/crisis/i);
  });

  test('should display page heading', async ({ page }) => {
    await page.goto('/ons-aanbod/crisis/');
    await expect(page.locator('h1, h2').filter({ hasText: /crisis/i }).first()).toBeVisible();
  });

  test('should contain crisis support information', async ({ page }) => {
    await page.goto('/ons-aanbod/crisis/');
    const content = await page.textContent('body');
    expect(content?.toLowerCase()).toContain('crisis');
  });
});
