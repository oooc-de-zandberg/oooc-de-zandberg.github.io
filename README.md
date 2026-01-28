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

This project uses automated end-to-end testing with Playwright. For detailed information on running and writing tests, see [CONTRIBUTING.md](CONTRIBUTING.md).

## Theme Customization

The site uses a customized version of the Minima theme. Custom styles can be found in:

- `assets/css/main.scss` - Main stylesheet
- `_layouts/` - Custom layout files
- `_includes/` - Custom include files

## Deployment

The site can be deployed to GitHub Pages or any other static site host.

## Additional Resources

For more information about Jekyll installation and usage, visit the [Jekyll documentation website](https://jekyllrb.com/docs/installation/).
