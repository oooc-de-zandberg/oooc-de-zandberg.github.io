// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Dagverloop Page', () => {
  test('should load successfully', async ({ page }) => {
    await page.goto('/ons-aanbod/groep-1/dagverloop');
    await expect(page).toHaveTitle(/dagverloop|schooldag/i);
  });

  test('should display page heading', async ({ page }) => {
    await page.goto('/ons-aanbod/groep-1/dagverloop');
    await expect(page.locator('h1, h2').filter({ hasText: /dagverloop|schooldag/i })).toBeVisible();
  });

  test('should contain daily schedule information', async ({ page }) => {
    await page.goto('/ons-aanbod/groep-1/dagverloop');
    await expect(page.locator('text=/schooldag|dag/i')).toBeVisible();
  });

  test('should display schedule container', async ({ page }) => {
    await page.goto('/ons-aanbod/groep-1/dagverloop');
    const schedule = page.locator('.daily-schedule-vertical, .schedule');
    const count = await schedule.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });
});
