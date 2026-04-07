import { test, expect } from '@playwright/test';

test.beforeEach(async ({page}) => {
    await page.goto('https://www.howdens.com/');
    await page.getByRole('button', { name: /ACCEPT ALL COOKIES/i }).click();
});
test('Homepage Title', async ({ page }) => {
    await expect(page).toHaveTitle(/Howdens/);
});

test('Primary Navigation Items', async ({ page }) => {
    await page.getByRole('button', { name: /View/i }).first().click();
    await page.locator('a.js-mega-menu-trigger').first().click();
    await expect(page.getByLabel('Primary Navigation').getByRole('list')).toContainText('Kitchens');
    await expect(page.getByLabel('Primary Navigation').getByRole('list')).toContainText('Bedrooms');
    await expect(page.getByLabel('Primary Navigation').getByRole('list')).toContainText('Joinery');
    await expect(page.getByLabel('Primary Navigation').getByRole('list')).toContainText('Hardware');
    await expect(page.getByLabel('Primary Navigation').getByRole('list')).toContainText('Appliances');
    await page.getByRole('navigation', { name: 'Primary Navigation' }).getByLabel('Close').click();
    await expect(page.getByRole('link', { name: 'Howdens Rooster logo' })).toBeVisible();
});

test('Search URL', async ({ page }) => {
    await page.getByRole('button', { name: /Search/i }).click();
    await expect(page).toHaveURL(/search=/);
});