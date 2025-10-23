import { test, expect } from '@playwright/test';

test('Practice different Playwright locators on Google', async ({ page }) => {
  await page.goto('https://www.google.com');

  const searchBox1 = page.locator('textarea[name="q"]');
  await expect(searchBox1).toBeVisible();

  const searchBox2 = page.getByPlaceholder('Search');

  const searchButton = page.getByRole('button', { name: 'Google Search' });
  await expect(searchButton).toBeVisible();

  const aboutLink = page.getByText('About');
  await expect(aboutLink).toBeVisible();

  const searchBox3 = page.locator('//textarea[@name="q"]');
  await expect(searchBox3).toBeVisible();
});


