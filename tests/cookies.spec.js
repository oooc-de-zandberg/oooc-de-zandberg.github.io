// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Cookies Page', () => {
  test('should load successfully', async ({ page }) => {
    await page.goto('/cookies/');
    await expect(page).toHaveTitle(/Cookie/);
  });

  test('should display page heading', async ({ page }) => {
    await page.goto('/cookies/');
    await expect(page.locator('h1, h2, h3').filter({ hasText: /Cookie/i }).first()).toBeVisible();
  });

  test('should contain cookie policy information', async ({ page }) => {
    await page.goto('/cookies/');
    const content = await page.textContent('body');
    expect(content?.toLowerCase()).toContain('cookies');
  });

  test('should mention De Zandberg', async ({ page }) => {
    await page.goto('/cookies/');
    const content = await page.textContent('body');
    expect(content).toContain('DE ZANDBERG');
  });
});
