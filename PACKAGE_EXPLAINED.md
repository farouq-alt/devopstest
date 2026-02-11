# package.json Explained

## Project Metadata
- **name**: "v" - Project name
- **private**: true - Won't be published to npm
- **version**: "0.0.0" - Current version
- **type**: "module" - Use ES6 modules (import/export syntax)

## Scripts (npm run <script-name>)
- **dev**: `vite` - Start development server with hot reload
- **build**: `vite build` - Build for production (creates dist/ folder)
- **lint**: `eslint .` - Check code quality with ESLint
- **preview**: `vite preview` - Preview the production build locally

## Production Dependencies (needed to run the app)
- **react**: ^19.2.0 - React library for building UI
- **react-dom**: ^19.2.0 - React DOM for rendering to HTML

## Development Dependencies (only needed during development)
- **@eslint/js**: ^9.39.1 - ESLint core (code quality checker)
- **@types/react**: ^19.2.5 - TypeScript types for React
- **@types/react-dom**: ^19.2.3 - TypeScript types for React DOM
- **@vitejs/plugin-react**: ^5.1.1 - Vite plugin for React support
- **eslint**: ^9.39.1 - ESLint (finds code problems)
- **eslint-plugin-react-hooks**: ^7.0.1 - ESLint rules for React hooks
- **eslint-plugin-react-refresh**: ^0.4.24 - ESLint rules for React refresh
- **globals**: ^16.5.0 - Global variables for ESLint
- **vite**: ^7.2.4 - Vite build tool (fast bundler for React)
