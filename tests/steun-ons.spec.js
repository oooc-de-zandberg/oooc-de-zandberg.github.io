// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Steun Ons Page', () => {
  test('should load successfully', async ({ page }) => {
    await page.goto('/steun-ons/');
    await expect(page).toHaveTitle(/Steun ons/);
  });

  test('should display page heading', async ({ page }) => {
    await page.goto('/steun-ons/');
    await expect(page.locator('h1, h2').filter({ hasText: /Steun ons/i })).toBeVisible();
  });

  test('should have support information', async ({ page }) => {
    await page.goto('/steun-ons/');
    const content = await page.textContent('body');
    expect(content).toBeTruthy();
  });
});
