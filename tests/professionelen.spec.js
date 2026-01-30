// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Professionelen Page', () => {
  test('should load successfully', async ({ page }) => {
    await page.goto('/professionelen/');
    await expect(page).toHaveTitle(/Professionelen/);
  });

  test('should display page heading', async ({ page }) => {
    await page.goto('/professionelen/');
    await expect(page.locator('h1, h2').filter({ hasText: /Professionelen/i })).toBeVisible();
  });

  test('should have content for professionals', async ({ page }) => {
    await page.goto('/professionelen/');
    const content = await page.textContent('body');
    expect(content).toBeTruthy();
  });
});
