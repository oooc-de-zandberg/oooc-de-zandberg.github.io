// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Word Vrijwilliger Page', () => {
  test('should load successfully', async ({ page }) => {
    await page.goto('/werk-bij-ons/word-vrijwilliger/');
    await expect(page).toHaveTitle(/vrijwilliger/i);
  });

  test('should display page heading', async ({ page }) => {
    await page.goto('/werk-bij-ons/word-vrijwilliger/');
    await expect(page.locator('h1, h2').filter({ hasText: /vrijwilliger/i })).toBeVisible();
  });

  test('should contain volunteer information', async ({ page }) => {
    await page.goto('/werk-bij-ons/word-vrijwilliger/');
    await expect(page.locator('text=/vrijwilliger/i')).toBeVisible();
  });

  test('should mention volunteer opportunities', async ({ page }) => {
    await page.goto('/werk-bij-ons/word-vrijwilliger/');
    const content = await page.textContent('body');
    expect(content?.toLowerCase()).toContain('vrijwilliger');
  });
});
