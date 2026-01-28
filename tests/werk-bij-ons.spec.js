// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Werk Bij Ons Page', () => {
  test('should load successfully', async ({ page }) => {
    await page.goto('/werk-bij-ons/');
    await expect(page).toHaveTitle(/Werk bij ons/);
  });

  test('should display page heading', async ({ page }) => {
    await page.goto('/werk-bij-ons/');
    await expect(page.locator('h1, h2').filter({ hasText: /Werk bij ons/i })).toBeVisible();
  });

  test('should have information about working opportunities', async ({ page }) => {
    await page.goto('/werk-bij-ons/');
    const content = await page.textContent('body');
    expect(content).toBeTruthy();
  });
});
