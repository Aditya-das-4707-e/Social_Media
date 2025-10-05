# AdiBook — Simple Social Feed (React + Vite)

A small, client-side social feed built with React and Vite. AdiBook demonstrates a minimal social-media style UI where you can fetch sample posts, create new posts locally, and delete posts. It uses Bootstrap for layout and styling, React Context + useReducer for local state management, and fetches initial sample posts from dummyjson.com.

## Table of contents

- About
- Features
- Tech stack
- Project structure
- Getting started
  - Requirements
  - Install
  - Run
- How it works (data flow)
- Components overview
- Scripts
- Notes & next steps
- License

## About

This repo is a small demo social feed app intended as a learning / demo project. It shows how to wire up a simple global store using React Context and useReducer, fetch initial data from a public API, and let users add/delete posts locally.

## Features

- Fetches initial posts from https://dummyjson.com/posts
- Create new posts locally (no backend) including title, body, reactions and tags
- Delete posts from the local list
- Sidebar navigation switches between Home (feed) and Create Post view
- Responsive layout using Bootstrap

## Tech stack

- React 19
- Vite
- Bootstrap 5
- Tailwind (included in devDependencies if you want to expand styling)
- react-icons (used for delete icon)

## Project structure (important files)

- `index.html` — app entry HTML
- `src/main.jsx` — React entry point
- `src/App.jsx` — application layout and tab selection
- `src/store/post-list-store.jsx` — React Context + useReducer global store for posts
- `src/components/` — UI components
  - `Header.jsx`, `Footer.jsx`, `SideBar.jsx` — layout
  - `PostList.jsx` — fetches initial posts and lists them
  - `Post.jsx` — single post card with delete action
  - `CreatePost.jsx` — form to add a new post to store
  - `WelcomeMessage.jsx`, `LodingSpinner.jsx` — small UI helpers

## Getting started

Requirements

- Node.js (16+ recommended) and npm

Install

Open a terminal in the project root and run:

```bash
npm install
```

Run (development)

Start the dev server:

```bash
npm run dev
```

Open http://localhost:5173 (Vite default) in your browser.

Build

```bash
npm run build
```

Preview production build locally

```bash
npm run preview
```

Lint

```bash
npm run lint
```

## How it works (data flow)

- `PostListProvider` in `src/store/post-list-store.jsx` provides a context value containing `postList`, `addPost`, `addInitialPosts`, and `deletePost`.
- `PostList` calls `fetch('https://dummyjson.com/posts')` once on mount and calls `addInitialPosts(data.posts)` to populate the store.
- `CreatePost` uses `addPost(...)` to add a locally-created post (no backend). New posts are prepended to the current list.
- `Post` renders each post and calls `deletePost(post.id)` when the delete icon is clicked.

Note: All changes are local (in-memory). No backend persistence is provided.

## Components overview

- App.jsx — wraps the app with `PostListProvider` and switches views between `PostList` and `CreatePost` using `selectedTab` state.
- Header/Footer — static top and bottom bars (Bootstrap)
- SideBar — navigation for switching between Home and Create Post
- PostList — handles fetching initial posts and renders a spinner / welcome message when appropriate
- Post — card UI for a single post, shows title, body, tags and reaction count; includes delete button (uses `react-icons` MdDelete)
- CreatePost — form with inputs for user ID, title, body, reaction count and space-separated tags

## Scripts (from package.json)

- `npm run dev` — start Vite dev server
- `npm run build` — build for production
- `npm run preview` — preview production build
- `npm run lint` — run ESLint

## Notes & next steps

- Persistence: Right now posts are stored only in memory. Add a backend (Express, Firebase, Supabase, etc.) or localStorage to persist posts.
- Validation: Add client-side validation and better feedback to `CreatePost` (currently any text is accepted).
- Pagination / infinite scroll: `dummyjson` returns many posts — add paging or lazy-loading for large lists.
- Tests: Add unit tests for reducer logic and component rendering.

## License

This project is provided as-is. Include a license of your choice if you want to make it open-source (MIT is a common choice).

---

If you'd like, I can also:

- add a short CONTRIBUTING section
- create a small GIF or screenshots and include them in the README
- wire localStorage persistence or add basic form validation

Tell me which of those you'd like next and I can implement it.
