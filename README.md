# convex-test-v1

A modern full-stack application built with Next.js, Convex, TypeScript, Tailwind CSS, shadcn/ui, and Zustand.

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Backend**: Convex (real-time database and serverless functions)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **State Management**: Zustand
- **Authentication**: Convex Auth
- **Code Quality**: ESLint, Prettier, Husky

## Getting Started

### Prerequisites

- Node.js 18.17.0 or higher
- npm or yarn
- Convex account (free tier available)

### Installation

```bash
# Install dependencies
npm install

# Set up Convex (follow prompts to log in)
npx convex dev
```

This will:

1. Prompt you to log in to Convex (if not already authenticated)
2. Create a new Convex project or link to an existing one
3. Generate TypeScript types for your Convex functions
4. Set the `NEXT_PUBLIC_CONVEX_URL` in your `.env.local`

### Development

```bash
# Run Convex backend (in one terminal)
npx convex dev

# Run Next.js frontend (in another terminal)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Project Structure

```
src/
├── app/              # Next.js App Router pages and layouts
│   ├── layout.tsx    # Root layout with providers
│   └── page.tsx      # Home page
├── components/       # React components
│   └── ui/          # shadcn/ui components
├── lib/             # Utilities and helpers
│   └── stores/      # Zustand stores
└── convex/          # Convex backend
    ├── schema.ts    # Database schema
    ├── auth.config.js # Auth configuration
    └── functions/   # Serverless functions
```

## Key Features

### Convex Backend

- **Real-time synchronization**: Changes sync instantly across all clients
- **Type-safe API**: Full TypeScript support from backend to frontend
- **Serverless functions**: Write backend logic that scales automatically
- **Built-in auth**: Secure authentication without additional services

### State Management with Zustand

- **Local UI state**: Managed with Zustand for performance
- **Server state**: Managed with Convex hooks (useQuery, useMutation)
- **Persistent storage**: Selected state persisted to localStorage
- **DevTools integration**: Debug state changes in development

### Authentication

Convex Auth is pre-configured. To enable authentication:

1. Configure providers in `convex/auth.config.js`
2. Set up environment variables for your auth provider
3. Use `useAuth()` hook in components

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler check
- `npx convex dev` - Start Convex development server
- `npx convex deploy` - Deploy Convex to production

## Adding Features

### Adding shadcn/ui Components

```bash
npx shadcn@latest add [component-name]
```

### Creating Convex Functions

1. Create a new file in `convex/` directory
2. Export query, mutation, or action functions
3. Types are automatically generated

Example:

```typescript
// convex/tasks.ts
import { query, mutation } from './_generated/server';
import { v } from 'convex/values';

export const list = query({
  handler: async (ctx) => {
    return await ctx.db.query('tasks').collect();
  },
});

export const create = mutation({
  args: { title: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db.insert('tasks', {
      title: args.title,
      completed: false,
      createdAt: Date.now(),
    });
  },
});
```

### Adding Zustand Stores

Create modular stores in `src/lib/stores/`:

```typescript
// src/lib/stores/useTaskStore.ts
import { create } from 'zustand';

interface TaskStore {
  filter: 'all' | 'active' | 'completed';
  setFilter: (filter: TaskStore['filter']) => void;
}

export const useTaskStore = create<TaskStore>((set) => ({
  filter: 'all',
  setFilter: (filter) => set({ filter }),
}));
```

## Environment Variables

Required environment variables:

- `NEXT_PUBLIC_CONVEX_URL` - Your Convex deployment URL (set automatically)

Optional (for authentication):

- Auth provider specific variables (e.g., OAuth credentials)

## Deployment

### Deploy Convex Backend

```bash
npx convex deploy
```

### Deploy Next.js Frontend

Deploy to Vercel (recommended):

```bash
npm run build
vercel
```

Or deploy to any platform that supports Next.js.

## Best Practices

1. **Data Fetching**: Use Convex queries for server state, Zustand for UI state
2. **Type Safety**: Leverage TypeScript throughout the stack
3. **Real-time Updates**: Design for real-time collaboration from the start
4. **Error Handling**: Implement proper error boundaries and loading states
5. **Performance**: Use React Suspense with Convex for optimal loading

## Troubleshooting

### Convex Connection Issues

1. Ensure `NEXT_PUBLIC_CONVEX_URL` is set in `.env.local`
2. Check that Convex dev server is running
3. Verify you're logged in: `npx convex auth login`

### Type Errors

Run `npx convex dev` to regenerate types after schema changes.

## Contributing

1. Create a feature branch from `dev`
2. Make your changes
3. Run `npm run lint` and fix any issues
4. Submit a pull request to `dev`

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Convex Documentation](https://docs.convex.dev)
- [Zustand Documentation](https://github.com/pmndrs/zustand)
- [shadcn/ui Components](https://ui.shadcn.com)

## License

MIT
