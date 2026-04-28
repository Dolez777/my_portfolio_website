# Phase 4: Automated Testing - Research

## Objective
Establish a robust, production-ready testing and quality assurance pipeline for the portfolio website.

## Technical Findings

### 1. E2E Testing with Playwright
- **Integration**: Next.js 15 works seamlessly with Playwright. The `webServer` option in `playwright.config.ts` should be configured to run `npm run build && npm run start` to test against production builds, ensuring consistency with actual user experience.
- **Locators**: Use user-centric locators (`getByRole`, `getByLabel`) to maintain test stability and improve accessibility.
- **Mocking**: Playwright's `page.route()` can be used to mock external network requests (like Formspree or analytics) to keep tests deterministic and isolated.

### 2. Component Testing with Vitest
- **Current State**: JSDOM environment is already set up.
- **Patterns**: We can leverage existing patterns in `tests/components/contact-form.test.tsx` for mocking context and providers.
- **Coverage**: Focus on complex interactions like the `ProjectGrid` category filtering and `ThemeToggle` persistence.

### 3. Performance & Accessibility (Lighthouse CI)
- **Tooling**: Use `@lhci/cli` (Lighthouse CI) for automated audits.
- **Strategy**: Audit against the production build (`npm run start`). Run multiple times (e.g., 3 runs) and use the median to avoid flakiness in CI.
- **Targets**:
    - Performance: > 90
    - Accessibility: > 90
    - Best Practices: > 90
    - SEO: > 90
- **Axe Integration**: For deeper accessibility checks, use `axe-playwright` within E2E tests to catch issues Lighthouse might miss (like color contrast in dynamic states).

### 4. CI/CD Pipeline (GitHub Actions)
- **Workflow**: Create a single `quality-checks.yml` that handles the full pipeline.
- **Optimization**:
    - Use `actions/cache` for `node_modules` and Next.js build cache.
    - Install only necessary Playwright browsers (`npx playwright install chromium --with-deps`).
    - Upload test reports and Lighthouse HTML results as artifacts for debugging.

## Implementation Patterns

### Pattern: Playwright WebServer Configuration
```typescript
webServer: {
  command: 'npm run build && npm run start',
  url: 'http://localhost:3000',
  reuseExistingServer: !process.env.CI,
  timeout: 120 * 1000,
}
```

### Pattern: Lighthouse CI Configuration
```json
{
  "ci": {
    "collect": {
      "startServerCommand": "npm run start",
      "url": ["http://localhost:3000/"],
      "numberOfRuns": 3
    },
    "assert": {
      "preset": "lighthouse:recommended",
      "assertions": {
        "categories:performance": ["error", { "minScore": 0.9 }],
        "categories:accessibility": ["error", { "minScore": 0.9 }]
      }
    }
  }
}
```

## Risks & Mitigations
- **CI Flakiness**: Lighthouse scores can vary in virtualized environments. **Mitigation**: Use `numberOfRuns: 3` and relax thresholds slightly for CI if necessary, while keeping local audits strict.
- **Build Time**: Full E2E and Lighthouse runs can be slow. **Mitigation**: Parallelize jobs in GitHub Actions and use caching.

---
*Phase: 04-automated-testing*
*Research date: 2026-04-28*
