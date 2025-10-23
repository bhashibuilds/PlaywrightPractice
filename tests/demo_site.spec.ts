import { test, expect } from '@playwright/test';

test('Locator practice on automation testing demo site', async ({ page }) => {

  await page.goto('https://demo.automationtesting.in/Register.html');

  await expect(page.getByText('Hobbies')).toBeVisible();
  await page.locator('[placeholder="First Name"]').fill('BalajiCSS');

  await page.locator('//input[@type="text" and @placeholder="Last Name"]').fill('DasariXpath');

  await page.getByText('Submit').click();

});
