# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production (includes TypeScript compilation)
npm run build

# Lint TypeScript/React files
npm run lint

# Preview production build
npm run preview
```

## Project Architecture

This is a React + TypeScript portfolio website built with Vite. Key architectural patterns:

### Tech Stack
- **Framework**: React 18 with TypeScript
- **Bundler**: Vite with `@vitejs/plugin-react`
- **Styling**: Tailwind CSS + SASS modules
- **UI Components**: Shadcn/ui components with Radix UI primitives
- **Routing**: React Router DOM (single page app with routing setup)
- **Animations**: GSAP, Lottie React, React Parallax
- **Forms**: Web3Forms integration for contact
- **State**: React built-in state (no external state management)

### File Structure
- `src/components/` - Reusable UI components organized by feature
- `src/pages/` - Page-level components (currently just `home.tsx`)
- `src/data/` - Static data exports (projects, skills)
- `src/hooks/` - Custom React hooks
- `src/lib/` - Utility functions
- `src/styles/` - SASS and CSS files
- `src/assets/` - Images, PDFs, and other static assets

### Component Architecture
- Single-page application with sections: Hero, About, Skills, Projects, Qualification, Contact
- Components use TypeScript interfaces for props
- Styling uses Tailwind utility classes with custom SASS for complex animations
- Path alias `@/` configured for cleaner imports (`vite.config.ts`)

### Data Management
- Project data centralized in `src/data/projects.ts` with TypeScript types
- Static assets organized by project in `src/assets/projects/`
- Skills data in `src/data/skills.ts`

### Styling System
- Tailwind CSS with custom configuration
- Shadcn/ui components follow design system patterns
- SASS modules for component-specific styles
- CSS custom properties for theming

## TypeScript Configuration
- Strict mode enabled with comprehensive linting rules
- Path mapping configured for `@/*` imports
- ESLint with React and TypeScript rules, zero warnings policy