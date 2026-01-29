// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Privacy Page', () => {
  test('should load successfully', async ({ page }) => {
    await page.goto('/privacy/');
    await expect(page).toHaveTitle(/Privacy/);
  });

  test('should display page heading', async ({ page }) => {
    await page.goto('/privacy/');
    await expect(page.locator('h1, h2').filter({ hasText: /Privacy/i }).first()).toBeVisible();
  });

  test('should contain privacy policy information', async ({ page }) => {
    await page.goto('/privacy/');
    const content = await page.textContent('body');
    expect(content?.toLowerCase()).toMatch(/privacy|persoonsgegevens/);
  });

  test('should mention De Zandberg', async ({ page }) => {
    await page.goto('/privacy/');
    const content = await page.textContent('body');
    expect(content).toContain('De Zandberg');
  });
});
