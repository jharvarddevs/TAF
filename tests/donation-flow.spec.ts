import { test, expect } from '@playwright/test';

test.describe('Donation Flow', () => {
    test('should allow user to interact with donation simulator and navigate to donate page', async ({ page }) => {
        // Start from the home page
        await page.goto('/');

        // Scroll to the impact simulator
        const simulatorSection = page.locator('#impact-simulator');
        await simulatorSection.scrollIntoViewIfNeeded();

        // Verify the simulator is visible
        await expect(page.locator('text=See Your Impact')).toBeVisible();

        // The default amount should be 50
        await expect(page.locator('text=$50')).toBeVisible();
        await expect(page.locator('text=Feed 2 families')).toBeVisible();

        // Change donation amount by clicking a tier button
        await page.click('button:has-text("$100")');

        // Verify the update
        await expect(page.locator('text=$100')).toBeVisible();
        await expect(page.locator('text=Emergency support package')).toBeVisible();

        // Click the "Donate $100 Now" button
        const donateButton = page.locator('a:has-text("Donate $100 Now")');
        await donateButton.click();

        // Should navigate to the donate page
        await expect(page).toHaveURL(/\/donate\//);
        await expect(page.locator('h1')).toBeVisible();
    });
});
