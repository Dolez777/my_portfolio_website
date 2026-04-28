import { test, expect } from '@playwright/test';

test.describe('Contact Flow', () => {
  test('should submit the contact form successfully', async ({ page }) => {
    // Intercept Formspree request
    await page.route('https://formspree.io/f/*', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ ok: true }),
      });
    });

    await page.goto('/contact', { waitUntil: 'networkidle' });

    // Fill form
    await page.getByRole('textbox', { name: /name/i }).fill('Test User');
    await page.getByRole('textbox', { name: /email/i }).fill('test@example.com');
    await page.getByRole('textbox', { name: /subject/i }).fill('Hello');
    await page.getByRole('textbox', { name: /message/i }).fill('This is a test message from Playwright.');

    // Submit
    await page.getByRole('button', { name: /send message/i }).click();

    // Verify success state
    await expect(page.getByText(/Message Sent!/i)).toBeVisible();
    await expect(page.getByText(/Thanks for reaching out/i)).toBeVisible();
  });

  test('should show error message on submission failure', async ({ page }) => {
    // Intercept Formspree request with error
    await page.route('https://formspree.io/f/*', async (route) => {
      await route.fulfill({
        status: 400,
        contentType: 'application/json',
        body: JSON.stringify({ ok: false, error: 'Bad Request' }),
      });
    });

    await page.goto('/contact', { waitUntil: 'networkidle' });

    await page.getByRole('textbox', { name: /name/i }).fill('Test User');
    await page.getByRole('textbox', { name: /email/i }).fill('test@example.com');
    await page.getByRole('textbox', { name: /subject/i }).fill('Hello');
    await page.getByRole('textbox', { name: /message/i }).fill('This is a test message.');

    await page.getByRole('button', { name: /send message/i }).click();

    // Verify error toast (sonner)
    await expect(page.getByText(/Failed to send message/i)).toBeVisible();
  });
});
