# Axier Ceberio Portfolio

## Overview

A modern, responsive bilingual portfolio website for Axier Ceberio Guereño - an Energy Engineer and Business Analytics student. The site showcases professional experience, projects, skills, and education with smooth animations and a clean tech aesthetic. Built as a single-page application with EN/ES language switching capabilities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: TailwindCSS with custom CSS variables for theming (light/dark mode support)
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state, React Context for language preferences
- **Animations**: Framer Motion for scroll reveals and complex animations
- **Navigation**: react-scroll for smooth single-page scrolling

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **API Pattern**: RESTful endpoints defined in shared route contracts
- **Validation**: Zod schemas shared between client and server for type-safe API contracts

### Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` for shared type definitions
- **Migrations**: Drizzle Kit for database schema management
- **Database**: PostgreSQL (connection via DATABASE_URL environment variable)

### Project Structure
```
├── client/src/          # React frontend application
│   ├── components/      # Reusable UI components
│   ├── pages/           # Page components (Home, 404)
│   ├── hooks/           # Custom React hooks (language, contact, toast)
│   └── lib/             # Utilities and query client setup
├── server/              # Express backend
│   ├── index.ts         # Server entry point
│   ├── routes.ts        # API route handlers
│   ├── storage.ts       # Database operations
│   └── db.ts            # Database connection
├── shared/              # Shared code between client/server
│   ├── schema.ts        # Drizzle database schemas
│   └── routes.ts        # API route contracts with Zod
└── migrations/          # Database migration files
```

### Key Design Patterns
- **Type-Safe API Contracts**: Route definitions in `shared/routes.ts` include method, path, input validation, and response schemas
- **Internationalization**: Custom hook-based i18n using a translations object with localStorage persistence
- **Component Architecture**: Compound components with Section/SectionHeader pattern for consistent layouts

## External Dependencies

### Database
- **PostgreSQL**: Primary database accessed via `DATABASE_URL` environment variable
- **connect-pg-simple**: PostgreSQL session store for Express sessions

### UI Libraries
- **Radix UI**: Headless component primitives for accessibility
- **shadcn/ui**: Pre-styled component library (new-york style variant)
- **Lucide React**: Icon library

### Animation & Interaction
- **Framer Motion**: Animation library for scroll reveals and transitions
- **react-scroll**: Smooth scrolling for navigation
- **Embla Carousel**: Carousel component

### Form Handling
- **React Hook Form**: Form state management
- **@hookform/resolvers**: Zod resolver for form validation

### Fonts
- **Manrope**: Primary sans-serif font
- **JetBrains Mono**: Monospace font for code/technical elements
- Loaded via Google Fonts CDN