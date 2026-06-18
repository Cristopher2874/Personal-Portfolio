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