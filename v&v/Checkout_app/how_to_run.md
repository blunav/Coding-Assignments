# Steps 

## Prerequisites

```text
Node.js (v18+)

NPM or Yarn
```

### Setup Instructions

#### Clone & Install

```bash
git clone <your-repo-url>
cd automation-challenge
npm install
npx playwright install
```

Start the Sandbox:
Open a terminal and run the local server

```bash
node server.js
```

#### Execute Tests
Open a second terminal to run the Playwright suite:

```bash
# Run all tests in headless mode
npx playwright test

# Run tests with UI mode (helpful for debugging POM)
npx playwright test --ui
```

