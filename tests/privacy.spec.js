// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Privacy Page', () => {
  test('should load successfully', async ({ page }) => {
    await page.goto('/privacy/');
    await expect(page).toHaveTitle(/Privacy/);
  });

  test('should display page heading', async ({ page }) => {
    await page.goto('/privacy/');
    await expect(page.locator('h1, h2').filter({ hasText: /Privacy/i })).toBeVisible();
  });

  test('should contain privacy policy information', async ({ page }) => {
    await page.goto('/privacy/');
    await expect(page.locator('text=/privacy|persoonsgegevens/i')).toBeVisible();
  });

  test('should mention De Zandberg', async ({ page }) => {
    await page.goto('/privacy/');
    await expect(page.locator('text=De Zandberg')).toBeVisible();
  });
});
