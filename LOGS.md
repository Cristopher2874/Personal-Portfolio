## Logs from 18/06/2026

Fixed the error:
```bash
A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:
```
with adding `suppressHydrationWarning` to the HTML and body tags

Aded some skeleton files for api, the components of the main page and sections

Worked on a types file that is about exporting the structs used to type the arrays and data use when dedicated to the same type of data

Added the main components to the page as about, nav, carousel to start with basic skeleton structure

Learned the difference on Server and Client components, also to export the functions and use on page

## Logs from 18/06/2026

First start the frontend folder

Using NextJS and use the following command to get started from the repo root:

```bash
npx create-next-app@latest frontend
```

Answer the questions:

```bash
√ Would you like to use the recommended Next.js defaults? » No, customize settings
√ Would you like to use TypeScript? ... Yes
√ Which linter would you like to use? » ESLint
√ Would you like to use React Compiler? Yes
√ Would you like to use Tailwind CSS? Yes
√ Would you like your code inside a `src/` directory? Yes
√ Would you like to use App Router? Yes
√ Would you like to customize the import alias (`@/*` by default)? ... No
√ Would you like to include AGENTS.md to guide coding agents to write up-to-date Next.js code? ... Yes
```

Use `shadcn-ui` for prototypes:

```bash
cd frontend
npx shadcn@latest init
```
Answer the questions:

```bash
√ Select a component library » Radix
? Which preset would you like to use? » - Use arrow-keys. Return to submit.
√ Which preset would you like to use? » Nova
```

Test the install:

```bash
npx shadcn@latest add button
```

Selected colors added on `frontend\src\app\globals.css`

Added to the global variables for the `@theme inline` block

Modified the file `frontend\src\app\layout.tsx` to add the fonts and bg color configs.

Tested with `npm run dev`
