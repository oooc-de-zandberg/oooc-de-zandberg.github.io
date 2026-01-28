// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Partners Page', () => {
  test('should load successfully', async ({ page }) => {
    await page.goto('/partners/');
    await expect(page).toHaveTitle(/Partners/);
  });

  test('should display page heading', async ({ page }) => {
    await page.goto('/partners/');
    await expect(page.locator('h1, h2').filter({ hasText: 'Partners' })).toBeVisible();
  });

  test('should display collaboration statement', async ({ page }) => {
    await page.goto('/partners/');
    await expect(page.locator('text=We werken graag en veel samen!')).toBeVisible();
  });

  test('should display Brugse voorzieningen section', async ({ page }) => {
    await page.goto('/partners/');
    await expect(page.locator('text=Samenwerkingsverband zeven Brugse voorzieningen')).toBeVisible();
  });

  test('should have links to partner organizations', async ({ page }) => {
    await page.goto('/partners/');
    const binnenstad = page.locator('a[href*="binnenstad.be"]');
    await expect(binnenstad).toBeVisible();
  });

  test('should display Eén gezin één plan section', async ({ page }) => {
    await page.goto('/partners/');
    await expect(page.locator('text=Eén gezin één plan')).toBeVisible();
  });
});
