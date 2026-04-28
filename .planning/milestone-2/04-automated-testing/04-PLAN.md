# Phase 4: Automated Testing - Plan

Establish a comprehensive testing and quality assurance pipeline using Playwright, Vitest, and Lighthouse CI, integrated with GitHub Actions.

## User Review Required

> [!IMPORTANT]
> This phase will install several new dev-dependencies (`@playwright/test`, `@lhci/cli`, etc.) and create a `.github` directory for CI.

> [!NOTE]
> I will be using mock data for the tests as discussed to ensure deterministic results.

## Proposed Changes

### Infrastructure & Dependencies

#### [MODIFY] [package.json](file:///c:/Users/Doldog/software_projects/omat_sivut/package.json)
- Add `@playwright/test`, `@lhci/cli`, and `axe-playwright` to `devDependencies`.
- Add `test:e2e`, `test:all`, and `lhci` scripts.

#### [NEW] [playwright.config.ts](file:///c:/Users/Doldog/software_projects/omat_sivut/playwright.config.ts)
- Configure Playwright with `webServer` (Next.js build & start).
- Set up base URL, browsers (Chromium), and reporting.

#### [NEW] [lighthouserc.json](file:///c:/Users/Doldog/software_projects/omat_sivut/lighthouserc.json)
- Configure Lighthouse CI to audit Home and Projects pages.
- Set performance and accessibility assertions.

### CI/CD Pipeline

#### [NEW] [quality-checks.yml](file:///c:/Users/Doldog/software_projects/omat_sivut/.github/workflows/quality-checks.yml)
- Define a GitHub Actions workflow that runs on push and pull requests.
- Jobs: Lint, Type Check, Component Tests (Vitest), E2E Tests (Playwright), Performance Audits (LHCI).

### Component Tests (Vitest)

#### [NEW] [navbar.test.tsx](file:///c:/Users/Doldog/software_projects/omat_sivut/tests/components/navbar.test.tsx)
- Test mobile menu toggle, navigation links, and theme toggle visibility.

#### [NEW] [project-card.test.tsx](file:///c:/Users/Doldog/software_projects/omat_sivut/tests/components/project-card.test.tsx)
- Test rendering with mock project data, tech badges, and external links.

### E2E Tests (Playwright)

#### [NEW] [navigation.spec.ts](file:///c:/Users/Doldog/software_projects/omat_sivut/tests/e2e/navigation.spec.ts)
- Verify basic page transitions and 404 handling.

#### [NEW] [contact-flow.spec.ts](file:///c:/Users/Doldog/software_projects/omat_sivut/tests/e2e/contact-flow.spec.ts)
- Verify full contact form submission flow with mocked network response.

## Verification Plan

### Automated Tests
- Run `npm run test:all` (covers Vitest and Playwright).
- Run `npm run lhci` (covers performance audits).
- Verify GitHub Actions workflow locally using `act` (if available) or by pushing to a branch.

### Manual Verification
- Inspect generated Playwright HTML reports in `playwright-report/`.
- Inspect Lighthouse HTML reports in `.lighthouseci/`.
