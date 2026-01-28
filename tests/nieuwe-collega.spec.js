// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Nieuwe Collega Page', () => {
  test('should load successfully', async ({ page }) => {
    await page.goto('/werk-bij-ons/nieuwe-collega/');
    await expect(page).toHaveTitle(/collega/i);
  });

  test('should display page heading', async ({ page }) => {
    await page.goto('/werk-bij-ons/nieuwe-collega/');
    await expect(page.locator('h1, h2').filter({ hasText: /collega/i })).toBeVisible();
  });

  test('should contain job opportunity information', async ({ page }) => {
    await page.goto('/werk-bij-ons/nieuwe-collega/');
    await expect(page.locator('text=/collega|job/i')).toBeVisible();
  });

  test('should have reference to VDAB', async ({ page }) => {
    await page.goto('/werk-bij-ons/nieuwe-collega/');
    const vdabLink = page.locator('a[href*="vdab.be"]');
    const count = await vdabLink.count();
    expect(count).toBeGreaterThan(0);
  });
});
