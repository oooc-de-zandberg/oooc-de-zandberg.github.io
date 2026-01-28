// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Kom Op Stage Page', () => {
  test('should load successfully', async ({ page }) => {
    await page.goto('/werk-bij-ons/kom-op-stage/');
    await expect(page).toHaveTitle(/stage/i);
  });

  test('should display page heading', async ({ page }) => {
    await page.goto('/werk-bij-ons/kom-op-stage/');
    await expect(page.locator('h1, h2').filter({ hasText: /stage/i })).toBeVisible();
  });

  test('should contain internship information', async ({ page }) => {
    await page.goto('/werk-bij-ons/kom-op-stage/');
    await expect(page.locator('text=/stage|student/i')).toBeVisible();
  });

  test('should mention target audience', async ({ page }) => {
    await page.goto('/werk-bij-ons/kom-op-stage/');
    const content = await page.textContent('body');
    expect(content?.toLowerCase()).toMatch(/student|stage/);
  });
});
