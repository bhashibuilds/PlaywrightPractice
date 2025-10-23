import { test, expect } from '@playwright/test'; // importing test, and expectings from playwright test module

test('Complete form fill on Automation Testing Demo site', async ({ page }) => { // filling forms on demo site is our test
  // Go to the page that we are testing 
  await page.goto('https://demo.automationtesting.in/Register.html');

  // Verify we are on the correct page using Hobbies section
  await expect(page.getByText('Hobbies')).toBeVisible(); // verfication that we are on the correct page 

  // 🔹 Fill text fields
  await page.getByPlaceholder('First Name').fill('John');
  await page.getByPlaceholder('Last Name').fill('Doe');
  await page.getByPlaceholder('Email address').fill('john.doe@test.com');
  await page.getByPlaceholder('Phone').fill('9876543210');

  // 🔹 Select Gender (radio button)
  await page.getByLabel('Male').check();

  // 🔹 Select Hobbies (checkboxes)
  await page.getByLabel('Cricket').check();
  await page.getByLabel('Movies').check();
  await page.getByLabel('Hockey').uncheck(); // optional

  // 🔹 Select dropdowns
  await page.selectOption('#Skills', 'Java');                // Skills
  await page.selectOption('#countries', 'India');           // Country
  await page.selectOption('#yearbox', '1996');              // Year
  await page.selectOption('[placeholder="Month"]', 'June'); // Month
  await page.selectOption('#daybox', '10');                 // Day

  // 🔹 Fill passwords
  await page.getByLabel('Password').fill('P@ssword1');
  await page.getByLabel('Confirm Password').fill('P@ssword1');


  // 🔹 Click Submit
  await page.getByRole('button', { name: 'Submit' }).click();

  // ✅ Optional: Wait for navigation or success message
  await page.waitForLoadState('networkidle');
});
