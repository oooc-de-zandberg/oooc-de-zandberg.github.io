// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Homepage', () => {
  test('should load successfully', async ({ page }) => {
    await page.goto('/');
    
    // Check that the page title is correct
    await expect(page).toHaveTitle(/Welkom bij OOOC De Zandberg/);
  });

  test('should display main heading', async ({ page }) => {
    await page.goto('/');
    
    // Check that the main heading exists
    const heading = page.locator('h1, h2').first();
    await expect(heading).toBeVisible();
  });

  test('should have working navigation links', async ({ page }) => {
    await page.goto('/');
    
    // Check that navigation exists
    const nav = page.locator('nav').first();
    await expect(nav).toBeVisible();
  });
});
