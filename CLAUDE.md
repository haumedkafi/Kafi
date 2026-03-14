# CLAUDE.md

This file provides guidance for AI assistants (Claude and others) working in this repository.

## Repository Overview

**Repository**: haumedkafi/Kafi
**Status**: New / Initializing

> This repository is currently empty. Update this file as the project grows to reflect the actual codebase structure, conventions, and workflows.

---

## Project Structure

```
Kafi/
├── CLAUDE.md          # This file — AI assistant guidance
└── (project files)    # To be added
```

Update this section as directories and files are added.

---

## Tech Stack

> Document the tech stack here once established. Examples:
> - **Language**: TypeScript / Python / Go / Rust
> - **Framework**: React / FastAPI / Gin / Actix
> - **Database**: PostgreSQL / SQLite / MongoDB
> - **Build Tool**: webpack / vite / cargo / go build
> - **Test Runner**: Jest / pytest / go test

---

## Development Workflows

### Getting Started

```bash
# Clone the repository
git clone <repo-url>
cd Kafi

# Install dependencies (update once a package manager is chosen)
# npm install | pip install -r requirements.txt | go mod download

# Run the project
# npm run dev | python main.py | go run .
```

### Branch Strategy

- `main` — stable, production-ready code
- `claude/<description>-<session-id>` — branches created by Claude for automated changes
- Feature branches should be named descriptively: `feature/<description>`, `fix/<description>`

### Commit Conventions

Use clear, imperative commit messages:
```
Add user authentication module
Fix null pointer dereference in parser
Refactor database connection pooling
Update dependencies to latest versions
```

Prefix with type when applicable:
- `feat:` — new feature
- `fix:` — bug fix
- `chore:` — maintenance, dependency updates
- `docs:` — documentation changes
- `test:` — test additions or fixes
- `refactor:` — code restructuring without behavior change

### Running Tests

```bash
# Update with actual test commands once a test framework is set up
# npm test | pytest | go test ./...
```

### Linting and Formatting

```bash
# Update with actual lint/format commands once configured
# npm run lint | ruff check . | golangci-lint run
```

---

## Key Conventions

> Document project-specific conventions here as they are established.

### Naming

- Files: `snake_case.py` / `camelCase.ts` / `kebab-case.tsx` — choose one and be consistent
- Functions/Methods: follow language idioms (camelCase for JS/TS, snake_case for Python/Go)
- Constants: `SCREAMING_SNAKE_CASE`
- Types/Classes: `PascalCase`

### Code Style

- Prefer readability over cleverness
- Keep functions small and focused (single responsibility)
- Avoid deep nesting — return early
- Write self-documenting code; add comments only for non-obvious logic

### Error Handling

- Never silently swallow errors
- Propagate errors with context when relevant
- Use structured logging for errors in production paths

---

## Environment Variables

> List required environment variables here once defined. Example:

```bash
# .env.example
DATABASE_URL=postgres://localhost:5432/kafi
API_KEY=your_api_key_here
PORT=8080
```

Never commit `.env` files or secrets to the repository.

---

## CI/CD

> Document the CI/CD pipeline here once set up. Example:
> - Tests run on every pull request via GitHub Actions
> - Deployments trigger on merge to `main`

---

## Notes for AI Assistants

- This repository is under active development — update this CLAUDE.md as the project evolves
- When in doubt about conventions, look at existing code patterns first
- Prefer editing existing files over creating new ones unless clearly necessary
- Run tests after making changes to verify correctness
- Keep changes minimal and focused on the task at hand
- Never commit secrets, API keys, or credentials
