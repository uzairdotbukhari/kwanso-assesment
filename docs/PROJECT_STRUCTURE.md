# Kwanso Assessment

I followed a scalable architecture for this assignment. Some of the conventions I adhered to are:

1. **Alias with file names**: Using `**.{alias}.{ts | tsx}` for file naming.
2. **TypeScript Definitions**: All TypeScript interfaces, types, and enums are defined in the `@types` folder.
3. **Conventional Commits**: Using conventional commits for semantic versioning.
4. **Naming Conventions**: All files and functions use lowerCamelCase, while file names use kebab-case.
5. **React Functional Components**: Following best practices for React functional components.

## Tech Stack

1. **React + TypeScript**
2. **MUI**: For UI components.
3. **Tailwind CSS**: For styling.
4. **React Query**: For data fetching.
5. **Context API**: For state management.

## Project Structure

```bash
kwanso-assessment
├── docs/                   # Documentation
├── node_modules/           
├── public/
├── src/                    # Actual project source code
│   ├── @types/             # TypeScript definitions
│   ├── assets/             # Images, styles, etc.
│   ├── components/         # Reusable components
│   ├── pages/              # Application pages
│   ├── utils/              # Utility modules
│   │   ├── constants/      # Constants
│   │   ├── context/        # Context API and state management
│   │   ├── helper/         # Helper functions
│   │   ├── hooks/          # Custom hooks
│   │   ├── redux/          # Redux setup
│   │   │   ├── actions/    # Redux actions
│   │   │   ├── reducers/   # Redux reducers
│   │   ├── routes/         # Application routing
│   │   ├── services/       # API calls
│   ├── App.tsx
│   ├── index.tsx
│   └── ...
├── .eslintrc.js
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```