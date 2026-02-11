# Playwright JavaScript Automation Framework (API + UI)

A reusable, scalable automation framework using **Playwright + JavaScript** for both API and UI validation.

## Framework highlights

- Single framework for API and UI test suites.
- Layered architecture with shared fixtures.
- Reusable API client with built-in assertions.
- Page Object Model for maintainable UI tests.
- Environment-driven config using `.env`.
- Rich reporting (list + HTML + JSON).
- CI-friendly defaults (`retries`, `forbidOnly`, and worker tuning).

## Project structure

```text
.
├── src
│   ├── api
│   │   ├── endpoints
│   │   │   └── healthApi.js
│   │   └── httpClient.js
│   ├── config
│   │   └── env.js
│   ├── fixtures
│   │   └── testFixtures.js
│   ├── ui
│   │   └── pages
│   │       ├── BasePage.js
│   │       └── HomePage.js
│   └── utils
│       └── logger.js
├── tests
│   ├── api
│   │   └── health.api.spec.js
│   └── ui
│       └── home.ui.spec.js
├── playwright.config.js
└── .env.example
```

## Setup

1. Install dependencies:

```bash
npm install
```

2. Install Playwright browsers:

```bash
npx playwright install
```

3. Configure environment:

```bash
cp .env.example .env
```

## Run tests

- Run all tests:

```bash
npm test
```

- Run UI tests only:

```bash
npm run test:ui
```

- Run API tests only:

```bash
npm run test:api
```

- Run headed UI tests:

```bash
npm run test:headed
```

- Open latest HTML report:

```bash
npm run report
```

## Reusability guidelines

- Add each service API into `src/api/endpoints/` as a separate class.
- Keep transport logic centralized in `src/api/httpClient.js`.
- Add one page object per UI screen inside `src/ui/pages/`.
- Use `src/fixtures/testFixtures.js` for shared dependencies and setup.
- Keep assertion messages explicit for easier debugging.

## CI integration tips

- Persist `playwright-report` and `test-results` as pipeline artifacts.
- Use `npm run test:all` in pipelines.
- Parameterize `BASE_URL` and `API_BASE_URL` by environment (dev/stage/prod).

## Next extensions (recommended)

- Test data factories for dynamic payload generation.
- Auth token management fixture.
- Contract validation (JSON schema checks).
- Visual regression for critical UI flows.
- Parallel project matrix for multiple browsers and environments.
