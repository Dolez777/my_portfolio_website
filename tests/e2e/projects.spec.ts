import { test, expect } from '@playwright/test';

test.describe('Project Filtering', () => {
  test('should filter projects by category', async ({ page }) => {
    await page.goto('/projects', { waitUntil: 'networkidle' });

    // Verify all projects are visible initially (at least the ones we know)
    await expect(page.getByText(/Modern Engineering Portfolio/i)).toBeVisible();
    await expect(page.getByText(/Oura Health Data Analysis/i)).toBeVisible();

    // Click on "Web Apps" filter
    await page.getByRole('tab', { name: 'Web Apps', exact: true }).click();
    await expect(page.getByText(/Modern Engineering Portfolio/i)).toBeVisible();
    await expect(page.getByText(/Oura Health Data Analysis/i)).toBeHidden();

    // Click on "Data Science" filter
    await page.getByRole('tab', { name: 'Data Science', exact: true }).click();
    await expect(page.getByText(/Oura Health Data Analysis/i)).toBeVisible();
    await expect(page.getByText(/Modern Engineering Portfolio/i)).toBeHidden();

    // Click on "All Projects" filter
    await page.getByRole('tab', { name: 'All Projects', exact: true }).click();
    await expect(page.getByText(/Modern Engineering Portfolio/i)).toBeVisible();
    await expect(page.getByText(/Oura Health Data Analysis/i)).toBeVisible();
  });
});
