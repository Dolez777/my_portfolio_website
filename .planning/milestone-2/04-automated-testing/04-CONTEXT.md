# Phase 4: Automated Testing - Context

**Gathered:** 2026-04-28
**Status:** Ready for planning

<domain>
## Phase Boundary

Implementation of comprehensive automated testing for the portfolio website. This includes component testing for core UI elements, End-to-End (E2E) testing for critical user flows, and automated performance/accessibility audits. This phase delivers a CI/CD pipeline to ensure quality and prevent regressions.

</domain>

<decisions>
## Implementation Decisions

### E2E Testing
- **D-01:** Use **Playwright** as the E2E testing framework.
- **D-02:** Focus E2E tests on critical flows: navigation, project gallery filtering, and contact form submission.

### Component Testing
- **D-03:** Continue using **Vitest** + **Testing Library** for component unit tests.
- **D-04:** Prioritize components that are "most used and seen": `Navbar`, `Footer`, `ProjectCard`, `ProjectGrid`, and `ThemeToggle`.
- **D-05:** Use **mock data** for all tests to ensure isolation and speed.

### Performance & Quality
- **D-06:** Integrate automated performance and accessibility audits.
- **D-07:** Use **Lighthouse** (via CLI or CI action) and **Axe** (for accessibility) to verify metrics against targets defined in `ARCHITECTURE.md`.

### CI/CD Integration
- **D-08:** Set up **GitHub Actions** to run:
    - Linting (ESLint)
    - Type checking (TSC)
    - Component tests (Vitest)
    - E2E tests (Playwright)
    - Performance/A11y audits (Lighthouse/Axe)

### the agent's Discretion
- Exact test case definitions (which edge cases to cover).
- Specific Lighthouse score thresholds (defaulting to targets in `ARCHITECTURE.md`).
- Organization of test artifacts and reports.

</decisions>

<specifics>
## Specific Ideas

- "I want to know the performance" — Ensure the Lighthouse report is easily accessible (e.g., as a comment on PRs or a build artifact).
- "Functionality of things is working at minimum" — Focus on "smoke tests" for the most visible components.

</specifics>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Architecture & Design
- `docs/ARCHITECTURE.md` — Section 8 (Performance Targets) and Section 10 (Deployment & CI).
- `SPEC.md` — Design system rules and accessibility requirements.

### Existing Tests (Patterns)
- `tests/unit/security.test.tsx` — Pattern for unit testing obfuscated text.
- `tests/components/contact-form.test.tsx` — Pattern for component testing with mocks.
- `tests/setup.ts` — Global test configuration and mocks.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `vitest.config.ts`: Base configuration for Vitest.
- `tests/setup.ts`: Already includes mocks for `sonner` and `window.open`.

### Integration Points
- GitHub Actions: Need to create `.github/workflows/quality-checks.yml`.
- Playwright: Need to initialize `playwright.config.ts` and `tests/e2e` directory.

</code_context>

<deferred>
## Deferred Ideas

- Integration with external tracking tools (e.g., Sentry) — Milestone 3.
- Advanced visual regression testing (Percy/Chromatic) — Out of scope for now.

</deferred>

---

*Phase: 04-automated-testing*
*Context gathered: 2026-04-28*
