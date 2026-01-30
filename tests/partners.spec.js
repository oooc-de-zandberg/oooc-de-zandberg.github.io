// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Partners Page', () => {
  test('should load successfully', async ({ page }) => {
    await page.goto('/partners/');
    await expect(page).toHaveTitle(/Partners/);
  });

  test('should display page heading', async ({ page }) => {
    await page.goto('/partners/');
    await expect(page.locator('h1, h2').filter({ hasText: 'Partners' }).first()).toBeVisible();
  });

  test('should display collaboration statement', async ({ page }) => {
    await page.goto('/partners/');
    const content = await page.textContent('body');
    expect(content).toContain('We werken graag en veel samen!');
  });

  test('should display Brugse voorzieningen section', async ({ page }) => {
    await page.goto('/partners/');
    const content = await page.textContent('body');
    expect(content).toContain('Samenwerkingsverband zeven Brugse voorzieningen');
  });

  test('should have links to partner organizations', async ({ page }) => {
    await page.goto('/partners/');
    const binnenstad = page.locator('a[href*="binnenstad.be"]');
    await expect(binnenstad).toBeVisible();
  });

  test('should display Eén gezin één plan section', async ({ page }) => {
    await page.goto('/partners/');
    const content = await page.textContent('body');
    expect(content).toContain('Eén gezin één plan');
  });
});
