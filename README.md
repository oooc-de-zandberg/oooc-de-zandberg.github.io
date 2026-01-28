# OOOC De Zandberg

This is the website for OOOC De Zandberg, built with Jekyll and the Minima theme with custom styling.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Ruby version 2.5.0 or higher
- RubyGems
- GCC and Make

### Installation

1. Install Jekyll and Bundler:

```bash
gem install jekyll bundler
```

2. Clone this repository:

```bash
git clone https://github.com/yourusername/personal-zandberg.git
cd personal-zandberg
```

3. Install dependencies:

```bash
bundle install
```

## Running it locally

You can run the website locally via the following command:

```bash
bundle exec jekyll serve
```

This will start a local server at `http://localhost:4000`.

## Testing

This project uses [Playwright](https://playwright.dev/) for automated end-to-end testing.

### Prerequisites for Testing

- Node.js version 18 or higher
- npm

### Installing Test Dependencies

```bash
npm install
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

## Theme Customization

The site uses a customized version of the Minima theme. Custom styles can be found in:

- `assets/css/main.scss` - Main stylesheet
- `_layouts/` - Custom layout files
- `_includes/` - Custom include files

## Deployment

The site can be deployed to GitHub Pages or any other static site host.

## Additional Resources

For more information about Jekyll installation and usage, visit the [Jekyll documentation website](https://jekyllrb.com/docs/installation/).
