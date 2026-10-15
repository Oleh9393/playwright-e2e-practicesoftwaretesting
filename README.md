# Playwright E2E tests for Practice Software Testing

End-to-end test suite for the demo web shop [practicesoftwaretesting.com](https://practicesoftwaretesting.com), built with Playwright and TypeScript.

[![Playwright Tests](https://github.com/Oleh9393/playwright-e2e-practicesoftwaretesting/actions/workflows/playwright.yml/badge.svg)](https://github.com/Oleh9393/playwright-e2e-practicesoftwaretesting/actions/workflows/playwright.yml)

## What is covered

| Area | Spec |
|---|---|
| Login | `LoginVerification.spec.ts` |
| Product details | `ProductDetailsVerification.spec.ts` |
| Sorting by name, price, category | `SortingBy*Verification.spec.ts` |
| Product list (20 items per page) | `TwentyProductsDisplayedVerification.spec.ts` |
| Add to cart | `AddingProductsToCardVerification.spec.ts` |
| Checkout and card payment | `SuccessfulProductPaymentVerification.spec.ts` |

## Project structure

```
pages/        Page Objects (login, home, account, product details, checkout)
pages/app.ts  App class that groups all pages, used by fixtures
pages/components/  Reusable UI components (alert)
tests/        Test specs, fixtures and test data
data/         Test user credentials (public demo account)
utils/        Login via API token helper
```

## Approach

- **Page Object pattern** with a single `App` entry point.
- **Custom fixtures:** `app` for a fresh page, `loggedInApp` for a page that is already authenticated.
- **Login through the API:** the token is requested once and injected into the browser context, so tests do not repeat the UI login.
- **CI:** GitHub Actions runs the suite on every push and pull request to `main` and uploads the HTML report and traces, videos and screenshots of failed tests.
- ESLint and TypeScript are configured.

## Run locally

```bash
npm ci
npx playwright install --with-deps
npx playwright test          # run all tests
npx playwright show-report   # open the HTML report
```

## Notes

All tests run on CI. The credentials in `data/creds.ts` belong to the public demo account provided by the site and are not secret.
