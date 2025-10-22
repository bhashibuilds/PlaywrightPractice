import { test, expect } from '@playwright/test';

test('YouTube page should open successfully', async ({ page }) => {
  await page.goto('https://www.youtube.com');
  await expect(page).toHaveTitle(/YouTube/);
  const logo = page.getByLabel('YouTube Home');
  await expect(logo).toBeVisible();
  await page.waitForTimeout(2000);
});
