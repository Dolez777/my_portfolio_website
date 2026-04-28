# Website Upkeep Guide

This guide provides instructions for maintaining and updating your portfolio website for the long term.

## 🚀 Deployment & Hosting

The website is designed to be hosted on **Vercel**.

- **Automatic Deployments**: Every time you push code to the `main` branch on GitHub, Vercel will automatically build and deploy the new version.
- **Preview Deployments**: Pushing to any other branch will create a preview URL where you can see changes before merging them.
- **Logs**: You can view runtime logs and build errors in the [Vercel Dashboard](https://vercel.com/dashboard).

## 🔑 Environment Variables

Some parts of the site are dynamic and controlled by environment variables. Ensure these are set in Vercel's **Project Settings > Environment Variables**:

- `NEXT_PUBLIC_NAME`: Your name (e.g., `Teemu Välimäki`).
- `NEXT_PUBLIC_EMAIL`: Your contact email.
- `NEXT_PUBLIC_SITE_URL`: The production URL (e.g., `https://your-portfolio.vercel.app`).

## 📁 Content Updates

### Adding/Editing Projects
Projects are stored in `lib/data.ts`. To add a new project:
1. Open [lib/data.ts](file:///c:/Users/Doldog/software_projects/omat_sivut/lib/data.ts).
2. Add a new object to the `projects` array following the existing structure.
3. Place project images in the `public/projects/` directory.

### Updating Skills
Skills are also managed in `lib/data.ts`. Update the `skills` array to reflect your current expertise.

## 🛠 Maintenance Tasks

### Checking Performance
It is recommended to run a Lighthouse report after major changes to ensure the site remains fast and accessible.
```bash
npm run lhci
```

### Updating Dependencies
Every few months, check for security updates and new versions of frameworks:
```bash
# Check for outdated packages
npm outdated

# Update minor/patch versions safely
npm update

# For major updates, refer to Next.js documentation
```

### Linting & Type Checking
Before pushing large changes, run:
```bash
npm run lint
npx tsc --noEmit
```

## 🛡 Quality Assurance (CI/CD)

The project includes GitHub Actions (`.github/workflows/quality-checks.yml`) that automatically run:
1. **Lints**: Ensures code style consistency.
2. **Type Checks**: Catches TypeScript errors.
3. **Lighthouse CI**: Ensures Performance, Accessibility, and Best Practices stay above 90%.
4. **Playwright Tests**: Verifies core functionality (once fully implemented).

If a push fails, check the "Actions" tab on GitHub for the specific error.
