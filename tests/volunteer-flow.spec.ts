import { test, expect } from '@playwright/test';

test.describe('Volunteer Quiz Flow', () => {
    test('should guide user through the volunteer matching quiz', async ({ page }) => {
        // Start from the volunteer page
        await page.goto('/volunteer/');

        // Click Get Started to show the quiz
        await page.click('button:has-text("Get Started")');

        // Step 1: Commitment
        await expect(page.locator('text=How much time can you commit?')).toBeVisible();
        await page.click('button:has-text("Regular weekly commitment")');

        // Step 2: Interests
        await expect(page.locator('text=What type of work interests you?')).toBeVisible();
        await page.click('button:has-text("Food distribution")');

        // Step 3: Special Skills
        await expect(page.locator('text=Do you have any special skills?')).toBeVisible();
        await page.click('button:has-text("General helping hands")');

        // After the quiz, it should show the volunteer application form
        await expect(page.locator('text=Let\'s Connect!')).toBeVisible();
        await expect(page.locator('button:has-text("Submit Volunteer Application")')).toBeVisible();
    });
});
