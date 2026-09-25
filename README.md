# Jane Nadtoka — Frontend / React Developer

Personal portfolio presenting project-based frontend development since 2023, verified project technologies, and contact links.

[Published portfolio](https://thegognaclady.github.io/my-portfolio/)

## Portfolio stack

React 19, TypeScript, styled-components, Vite 7, and ESLint. Responsive grids, native anchor navigation, a keyboard-accessible mobile menu, and support for reduced-motion preferences.

## Featured projects

- **[Todo List](https://github.com/TheGognacLady/todo-list)** — task management with authentication, RTK Query, Material UI, React Hook Form, Zod, and Vitest tests. [Open the live demo](https://todo-list-swart-phi-73.vercel.app/#/login). The public test account is available in the portfolio's demo-account disclosure and on the login screen.
- **[Music Fun](https://github.com/TheGognacLady/music-fun)** — music and playlist management with OAuth, token refresh, optimistic updates and rollback, Zod API validation, Socket.IO updates, and Vitest tests. Playwright infrastructure is also present. Local demo only: the external educational API restricts public deployment domains.

## Local development

Use Node.js 22.12+ (or a newer compatible LTS release) and pnpm 11.23.0.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open the URL printed by Vite, normally `http://127.0.0.1:5173/my-portfolio/`. The intentional `server.host: '127.0.0.1'` setting avoids local IPv4/IPv6 resolution issues. Vite selects another port if necessary.

```sh
pnpm lint
pnpm build
pnpm preview --host 127.0.0.1
```

`build` runs TypeScript checking and produces `dist/`. Preview normally serves `http://127.0.0.1:4173/my-portfolio/`. The portfolio has no unit-test suite or test command.

The existing build-script approvals are retained in `pnpm-workspace.yaml`. Some approvals belong to removed template dependencies and are currently inactive. Use pnpm and commit its lockfile; the obsolete npm lockfile has been removed.

## Editing content

- `src/data/portfolio.ts`: project descriptions, separate project stacks, skills, navigation, and existing social links.
- `src/layout/sections/`: hero, projects, skills, and project-based experience.
- `src/layout/footer/Footer.tsx`: contact section.
- `src/styles/Global.styled.ts`: shared typography, colors, controls, and accessibility styles.

Skill levels are deliberately `null`: no numerical self-assessments have been confirmed. The optional gradient progress-bar presentation remains available when Jane supplies values from 0 to 100. Unrated skills show their names without implying a score.

Contact uses the social links already present in the original portfolio. The former EmailJS form was removed because delivery could not be verified; there are no email-delivery promises or configuration requirements. No environment variables are needed for this portfolio. Do not add private credentials or authentication state.

## GitHub Pages

The repository has an existing `gh-pages` branch containing the published site. There is no deployment workflow in the source branch. `vite.config.ts` explicitly sets `base: '/my-portfolio/'`, matching the existing published asset paths. Images are bundled by Vite, and the favicon uses the base path. Navigation uses section anchors and requires no server-side routing fallback.

For a future publication, build and publish the **contents** of `dist/` through the existing GitHub Pages process, retaining `/my-portfolio/` as the base. Building locally does not publish anything. This update does not change repository Pages settings or deploy the site.
