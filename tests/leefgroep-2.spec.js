// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Leefgroep 2 Page', () => {
  test('should load successfully', async ({ page }) => {
    await page.goto('/ons-aanbod/groep-2');
    await expect(page).toHaveTitle(/Leefgroep 2/);
  });

  test('should display page heading', async ({ page }) => {
    await page.goto('/ons-aanbod/groep-2');
    await expect(page.locator('h1, h2').filter({ hasText: 'Leefgroep 2' })).toBeVisible();
  });

  test('should display navigation sidebar', async ({ page }) => {
    await page.goto('/ons-aanbod/groep-2');
    await expect(page.locator('.page-nav-sidebar')).toBeVisible();
  });

  test('should have FAQ section', async ({ page }) => {
    await page.goto('/ons-aanbod/groep-2');
    await expect(page.locator('text=/vragen/')).toBeVisible();
  });
});
