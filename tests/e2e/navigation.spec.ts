import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('should navigate between main pages', async ({ page }) => {
    // Start from home
    await page.goto('/', { waitUntil: 'networkidle' });
    await expect(page).toHaveTitle(/Portfolio/);

    // Go to Projects
    await page.getByRole('link', { name: 'Projects', exact: true }).first().click();
    await expect(page).toHaveURL(/\/projects/);
    await expect(page.getByRole('heading', { name: /Project Archive/i, level: 1 })).toBeVisible();

    // Go to About
    await page.getByRole('link', { name: 'About', exact: true }).first().click();
    await expect(page).toHaveURL(/\/about/);
    await expect(page.getByRole('heading', { name: /Automating the Future/i, level: 1 })).toBeVisible();

    // Go to Contact
    await page.getByRole('link', { name: 'Contact', exact: true }).first().click();
    await expect(page).toHaveURL(/\/contact/);
    await expect(page.getByRole('heading', { name: /Next Big Thing/i, level: 1 })).toBeVisible();
  });

  test('should show 404 page for non-existent routes', async ({ page }) => {
    await page.goto('/non-existent-page', { waitUntil: 'networkidle' });
    await expect(page.getByText(/404/)).toBeVisible();
  });
});
