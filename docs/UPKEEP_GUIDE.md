# Website Upkeep & Maintenance Guide

This guide explains how to maintain, update, and manage your portfolio website on Vercel to keep it professional and high-performing.

## 1. Updating Portfolio Content

The website is data-driven. Most content changes happen in a few key files without needing to touch the UI components.

### Adding or Editing Projects
Modify [lib/projects.ts](file:///c:/Users/Doldog/software_projects/omat_sivut/lib/projects.ts):
1.  **Add to the `projects` array**: Follow the existing structure (id, title, description, image path, etc.).
2.  **Images**: Place project screenshots in `public/projects/`.
3.  **Categories**: Ensure categories match the `ProjectCategory` type (`web`, `mobile`, `data`, `automation`, `ai`).
4.  **Order**: The array order determines the order on the "Projects" page. Set `featured: true` to show them on the Home page.

### Updating Personal Info
Modify [.env.local](file:///c:/Users/Doldog/software_projects/omat_sivut/.env.local) and your **Vercel Environment Variables**:
- `NEXT_PUBLIC_NAME`: Your full name.
- `NEXT_PUBLIC_EMAIL_USER`: First part of your email.
- `NEXT_PUBLIC_EMAIL_DOMAIN`: Domain part of your email.
- `NEXT_PUBLIC_GITHUB_URL`: Your GitHub profile link.
- `NEXT_PUBLIC_LINKEDIN_URL`: Your LinkedIn profile link.

---

## 2. Managing the Pipeline (CI/CD)

Every time you push code to your GitHub repository:
1.  **GitHub Actions**: Automatically runs Lints, Type Checks, Vitest (component tests), and Playwright (E2E tests).
2.  **Vercel Preview**: Creates a temporary "Preview Deployment" for every Pull Request so you can test changes before merging.
3.  **Vercel Production**: Merging into the `main` branch automatically triggers a production deployment.

### Monitoring Health
- **Vercel Logs**: Check the "Logs" tab in the Vercel Dashboard if the site fails to build or shows a 500 error.
- **Speed Insights**: Use the "Speed Insights" tab in Vercel to monitor real-world performance (Core Web Vitals).

---

## 3. Dependency Maintenance

To keep the site secure and fast, you should update dependencies occasionally.

### Monthly Routine
1.  Run `npm outdated` to see what is old.
2.  Update minor versions: `npm update`.
3.  **Critical**: After updating, run `npm run test` and `npm run build` locally to ensure nothing broke.

### Major Updates (Next.js / Tailwind)
- Next.js 15 and Tailwind v4 are brand new. Major updates (v16/v5) will likely require code changes.
- Use `npx @next/codemod latest` when upgrading Next.js versions.

---

## 4. Troubleshooting Common Issues

### "Hydration Mismatch" Error
- **Cause**: Usually caused by browser extensions (like password managers) or using `window` / `localStorage` directly in a component without `useEffect`.
- **Fix**: Use the `useHasHydrated` pattern if you need to render client-specific data.

### Lighthouse Scores Dropping
- **Cause**: Large images or too many heavy 3rd-party scripts.
- **Fix**: Always use the Next.js `<Image />` component. Check the "Vercel Analytics" tab for performance regressions.

### Contact Form Not Working
- **Cause**: Formspree key expired or not set in Environment Variables.
- **Fix**: Check `NEXT_PUBLIC_FORMSPREE_KEY` in the Vercel dashboard.
