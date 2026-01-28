# Contributing to OOOC De Zandberg

Thank you for your interest in contributing to the OOOC De Zandberg website!

## Testing

This project uses [Playwright](https://playwright.dev/) for automated end-to-end testing.

### Prerequisites for Testing

- Node.js version 18 or higher
- npm
- Ruby version 2.5.0 or higher (for running the Jekyll site)
- Bundler

### Installing Test Dependencies

Install Node.js dependencies:

```bash
npm install
```

Install Ruby dependencies (if not already installed):

```bash
bundle install
```

### Running Tests

Run all tests:

```bash
npm test
```

Run tests in headed mode (with browser UI):

```bash
npm run test:headed
```

Run tests in UI mode (interactive):

```bash
npm run test:ui
```

### Continuous Integration

Tests are automatically run on GitHub Actions for all pushes and pull requests to the main branch. The workflow:

1. Sets up Ruby and builds the Jekyll site
2. Sets up Node.js and installs Playwright
3. Runs all Playwright tests
4. Uploads test reports as artifacts

Test reports are retained for 30 days and can be downloaded from the Actions tab.

### Writing Tests

Tests are located in the `tests/` directory. We use Playwright Test framework.

Example test structure:

```javascript
// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Feature Name', () => {
  test('should do something', async ({ page }) => {
    await page.goto('/path');
    await expect(page).toHaveTitle(/Expected Title/);
  });
});
```

When adding new pages to the website, make sure to add corresponding tests in `tests/navigation.spec.js` to verify the page loads correctly.
