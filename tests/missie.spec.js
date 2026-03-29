// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Missie Page', () => {
  test('should load successfully', async ({ page }) => {
    await page.goto('/missie/');
    await expect(page).toHaveTitle(/Onze Missie/);
  });

  test('should display page heading', async ({ page }) => {
    await page.goto('/missie/');
    await expect(page.locator('h1, h2').filter({ hasText: 'Onze Missie' }).first()).toBeVisible();
  });

  test('should display mission statement', async ({ page }) => {
    await page.goto('/missie/');
    const content = await page.textContent('body');
    expect(content).toContain('OOOC De Zandberg');
  });

  test('should display mission image', async ({ page }) => {
    await page.goto('/missie/');
    const image = page.locator('img[alt="Missie"]');
    await expect(image).toBeVisible();
  });

  test('should contain information about age range', async ({ page }) => {
    await page.goto('/missie/');
    const content = await page.textContent('body');
    expect(content).toContain('0-21 jaar');
  });
});
