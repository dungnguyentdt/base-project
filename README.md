# Project Overview Guide

> A practical reference covering project structure, state management, and the pre-commit workflow.

| Concern       | Approach                                                                  |
| ------------- | ------------------------------------------------------------------------- |
| Routing       | Next.js App Router with `[locale]` dynamic segment (next-intl)            |
| Styling       | Tailwind CSS v4 + Ant Design v5                                           |
| Data fetching | TanStack React Query (server state) + Redux (client/global state)         |
| Forms         | react-hook-form + Zod validation                                          |
| i18n          | next-intl — message files live in `messages/en.json` & `messages/vi.json` |
| Real-time     | WebSocket with gRPC/Protobuf framing                                      |

---

## Table of Contents

1. [Project Structure](#1-project-structure)
2. [Pre-commit Workflow](#2-pre-commit-workflow)

---

## 1. Project Structure

```
src/
├── app/                        # Next.js App Router
│   ├── [locale]/               # Locale-aware routes (next-intl)
│   │   ├── layout.tsx          # Root layout with providers
│   │   ├── page.tsx            # Home page
│   │   ├── (auth)/             # Auth group: login, register, forgot-password …
│   │   └── (user)/             # Authenticated user pages
│   ├── robots.ts               # Dynamic robots.txt
│   └── sitemap.ts              # Dynamic sitemap
│
├── assets/
│   └── proto/                  # Compiled Protobuf definitions (gRPC over WebSocket)
│
├── components/                 # Shared UI components
│   ├── ui/                     # Generic primitives (card, table, modal, input …)
│   ├── layout/                 # Header and layout chrome
│   └── button/                 # Action buttons (e.g. copy)
│
├── constants/                  # App-wide constants
│   ├── keys.ts                 # Storage / cookie key names
│   ├── routers.ts              # Route path constants
│   └── options/                # Select options (language, timezone)
│
├── hooks/                      # Reusable React hooks
│   ├── use-click-outside.ts
│   ├── use-dayjs.ts
│   ├── use-device-detection.ts
│   ├── use-online-status.ts
│   └── use-url-filter-sync.ts
│
├── libs/                       # Third-party wrappers & configuration
│   ├── axios/                  # Axios instance factory + types
│   ├── i18n/                   # next-intl setup
│   ├── react-query/            # TanStack Query client config
│   ├── theme/                  # Ant Design / next-themes config
│   └── websocket/              # WebSocket client helpers
│
├── services/                   # API layer
│   ├── api-client.ts           # Shared Axios instance + response interceptor
│   ├── auth/                   # Auth endpoints & React Query hooks
│   └── users/                  # User endpoints & React Query hooks
│
├── store/                      # Redux global state (see §2)
│
├── styles/                     # Global CSS & Ant Design overrides
│
├── types/                      # Shared TypeScript types
│
└── utils/                      # Pure utility functions
    ├── cookies.ts
    ├── dayjs.ts
    ├── format-time.ts
    ├── query-param.ts
    ├── toast.ts
    └── validations.ts
```

---

## 2. Pre-commit Workflow

Enforced by **Husky** + **lint-staged** + **commitlint**. Any failure aborts the commit.

### 3.1 Hooks

| Hook                | Trigger                  | Validates                           |
| ------------------- | ------------------------ | ----------------------------------- |
| `.husky/pre-commit` | Before every commit      | lint-staged → TypeScript type-check |
| `.husky/commit-msg` | After message is written | commitlint (Conventional Commits)   |

### 3.2 Validation rules

**`pre-commit`**

- **ESLint** — no lint errors in staged `*.{js,jsx,ts,tsx}` files
- **Prettier** — staged files are auto-formatted
- **TypeScript** (`tsc --noEmit`) — no type errors across the whole project

**`commit-msg`** — format: `<type>[scope]: <description>`

| Rule                   | Requirement                                                                  |
| ---------------------- | ---------------------------------------------------------------------------- |
| `type-enum`            | Must be one of: `feat` `fix` `refactor` `docs` `style` `test` `chore` `perf` |
| `subject-case`         | Lowercase only                                                               |
| `subject-full-stop`    | Must not end with `.`                                                        |
| `subject-max-length`   | Max **72** characters                                                        |
| `header-max-length`    | Max **100** characters                                                       |
| `body-leading-blank`   | Blank line required between header and body                                  |
| `footer-leading-blank` | Blank line required between body and footer                                  |

### 3.3 Interactive commit helper

```bash
npm run commit   # guided prompt — enforces all rules automatically
```

### 3.4 Setup (first time)

```bash
npm install && npm run prepare
```
