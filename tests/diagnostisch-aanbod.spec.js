// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Diagnostisch Aanbod Page', () => {
  test('should load successfully', async ({ page }) => {
    await page.goto('/ons-aanbod/diagnostisch/');
    await expect(page).toHaveTitle(/diagnostisch/i);
  });

  test('should display page heading', async ({ page }) => {
    await page.goto('/ons-aanbod/diagnostisch/');
    await expect(page.locator('h1, h2').filter({ hasText: /diagnostisch/i })).toBeVisible();
  });

  test('should contain diagnostic service information', async ({ page }) => {
    await page.goto('/ons-aanbod/diagnostisch/');
    await expect(page.locator('text=/diagnostisch|onderzoek/i')).toBeVisible();
  });
});
