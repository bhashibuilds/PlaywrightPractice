import { test, expect } from '@playwright/test';

test('Google page should open successfully', async ({ page }) => {
  await page.goto('https://www.google.com');
  await expect(page).toHaveTitle(/Google/);
});