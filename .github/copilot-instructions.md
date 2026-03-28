# Soc Ops - Workspace Guidelines

## Overview

**Soc Ops** is a Social Bingo game for in-person mixers—find people matching questions and get 5 in a row. Built with React, TypeScript, Vite, and Tailwind CSS v4.

**[View Lab Guide](../workshop/GUIDE.md)** | **[Overview](../workshop/00-overview.md)**

## Code Style

- **Language:** TypeScript (strict mode)
- **Framework:** React 19 with functional components and hooks
- **Styling:** Tailwind CSS v4 with CSS-first configuration via @theme directive
- **Linting:** ESLint with flat config—run 
pm run lint to check
- **Formatting:** Enforce via lint before commits

### Key Files
- Components: [src/components/](../src/components/)
- Game logic: [src/utils/bingoLogic.ts](../src/utils/bingoLogic.ts)
- Types: [src/types/index.ts](../src/types/index.ts)
- Styles: [src/index.css](../src/index.css)

## Build & Test

` ash
npm install          # Install dependencies
npm run dev          # Start dev server (Vite, HMR enabled)
npm run build        # Build for production (TypeScript + Vite)
npm run lint         # Check code style
npm run test         # Run tests (Vitest)
` 

**Dev server:** http://localhost:5173

## Architecture

- **Entry point:** [src/main.tsx](../src/main.tsx)
- **Root component:** [src/App.tsx](../src/App.tsx) manages game state
- **Screens:** StartScreen and GameScreen in [src/components/](../src/components/)
- **Game state:** Custom hook useBingoGame() in [src/hooks/useBingoGame.ts](../src/hooks/useBingoGame.ts)
- **Quiz data:** Questions loaded from [src/data/questions.ts](../src/data/questions.ts)

## Frontend Design & Tailwind CSS v4

See specialized instructions:
- **Frontend Design:** Creative, polished UI avoiding generic AI aesthetics
- **Tailwind CSS v4:** CSS-first configuration, @theme, native CSS features

Apply these when building or refactoring UI. They are automatically loaded for frontend work.

## Testing

Tests use **Vitest** with React Testing Library. Test files are colocated with source:
- [src/utils/bingoLogic.test.ts](../src/utils/bingoLogic.test.ts)

Run 
pm run test before submitting changes.

## Conventions

- **Component props:** Use TypeScript interfaces defined in component files or src/types/
- **State management:** Props and hooks (no external state library)
- **CSS:** Tailwind classes—avoid inline styles
- **Imports:** Absolute imports work; organize by concern (components, utils, hooks, types)

## Contributing

See [CONTRIBUTING.md](../CONTRIBUTING.md) and [SUPPORT.md](../SUPPORT.md) for team guidelines and support.
