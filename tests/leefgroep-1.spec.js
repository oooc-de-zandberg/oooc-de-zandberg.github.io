// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Leefgroep 1 Page', () => {
  test('should load successfully', async ({ page }) => {
    await page.goto('/ons-aanbod/groep-1');
    await expect(page).toHaveTitle(/Leefgroep 1/);
  });

  test('should display page heading', async ({ page }) => {
    await page.goto('/ons-aanbod/groep-1');
    await expect(page.locator('h1, h2').filter({ hasText: 'Leefgroep 1' })).toBeVisible();
  });

  test('should display navigation sidebar', async ({ page }) => {
    await page.goto('/ons-aanbod/groep-1');
    await expect(page.locator('.page-nav-sidebar')).toBeVisible();
  });

  test('should have section about age range', async ({ page }) => {
    await page.goto('/ons-aanbod/groep-1');
    await expect(page.locator('text=/0 tot 12 jaar/')).toBeVisible();
  });

  test('should have navigation links in sidebar', async ({ page }) => {
    await page.goto('/ons-aanbod/groep-1');
    await expect(page.locator('a[href="#hoe-kom-je-bij-ons-terecht"]')).toBeVisible();
  });

  test('should display main content sections', async ({ page }) => {
    await page.goto('/ons-aanbod/groep-1');
    await expect(page.locator('text=Hoe kom je bij ons terecht?')).toBeVisible();
  });
});
