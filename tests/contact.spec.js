// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Contact Page', () => {
  test('should load successfully', async ({ page }) => {
    await page.goto('/contact/');
    await expect(page).toHaveTitle(/Contact/);
  });

  test('should display organization name', async ({ page }) => {
    await page.goto('/contact/');
    const content = await page.textContent('body');
    expect(content).toContain('De Zandberg');
  });

  test('should display address information', async ({ page }) => {
    await page.goto('/contact/');
    const content = await page.textContent('body');
    expect(content).toContain('Varsenare');
  });

  test('should display phone number', async ({ page }) => {
    await page.goto('/contact/');
    const content = await page.textContent('body');
    expect(content).toContain('050');
  });

  test('should display email address', async ({ page }) => {
    await page.goto('/contact/');
    const content = await page.textContent('body');
    expect(content).toContain('info@zandberg.be');
  });

  test('should display contact image', async ({ page }) => {
    await page.goto('/contact/');
    const image = page.locator('img').first();
    await expect(image).toBeVisible();
  });
});


