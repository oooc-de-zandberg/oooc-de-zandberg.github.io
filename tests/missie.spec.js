// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Missie Page', () => {
  test('should load successfully', async ({ page }) => {
    await page.goto('/missie/');
    await expect(page).toHaveTitle(/Onze missie/);
  });

  test('should display page heading', async ({ page }) => {
    await page.goto('/missie/');
    await expect(page.locator('h1, h2').filter({ hasText: 'Onze missie' })).toBeVisible();
  });

  test('should display mission statement', async ({ page }) => {
    await page.goto('/missie/');
    await expect(page.locator('text=OOOC De Zandberg')).toBeVisible();
  });

  test('should display mission image', async ({ page }) => {
    await page.goto('/missie/');
    const image = page.locator('img[alt="Missie"]');
    await expect(image).toBeVisible();
  });

  test('should contain information about age range', async ({ page }) => {
    await page.goto('/missie/');
    await expect(page.locator('text=/0-21 jaar/')).toBeVisible();
  });
});
