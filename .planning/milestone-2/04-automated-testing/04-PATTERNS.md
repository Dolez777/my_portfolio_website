# Phase 4: Automated Testing - Pattern Map

## Testing Patterns

### 1. Component Testing (Vitest + RTL)
- **Analog**: `tests/components/contact-form.test.tsx`
- **Pattern**:
    - Mock global `fetch` if needed.
    - Mock external UI libraries (`sonner` in `tests/setup.ts`).
    - Use `render`, `screen`, and `fireEvent` from `@testing-library/react`.
    - Wrap with `ThemeProvider` if testing theme-dependent behavior.

### 2. Logic & Security Testing (Unit)
- **Analog**: `tests/unit/security.test.tsx`
- **Pattern**:
    - Pure functional testing without full DOM rendering where possible.
    - Mocking browser APIs (like `window.open`).

### 3. E2E Testing (Playwright) - NEW
- **Pattern**:
    - Follow Playwright's `test` block structure.
    - Use `page.goto('/')` for initial entry.
    - Use `expect(page).toHaveTitle(...)` for assertions.
    - Intercept network requests via `page.route()`.

## Files to be Tested & Their Analogs

| File | Role | Closest Analog | Data Flow |
|------|------|----------------|-----------|
| `components/layout/navbar.tsx` | Global Nav | `ContactForm` | Internal state (mobile open), link navigation |
| `components/shared/project-card.tsx` | UI Item | `ContactForm` (as UI) | Props (Project data) -> Display |
| `components/sections/featured-projects.tsx` | Section | `ContactForm` | List mapping, category filtering |
| `app/(marketing)/page.tsx` | Main Page | N/A (E2E) | Full hydration, scroll animations |

---
*Phase: 04-automated-testing*
*Pattern map date: 2026-04-28*
