# Steps 

## Prerequisites

- **Node.js (v18+)**: Ensure you have Node.js installed. Check your version by running `node -v` in your terminal.
- **NPM**: This usually comes with Node.js. Check by running `npm -v`.

### Setup Instructions

#### 1. Clone & Install

Open your terminal and run the following commands:

```bash
# Clone the repository
git clone <your-repo-url>

# Navigate into the application directory, usually same as you repo name
cd Checkout_app

# Install project dependencies
npm install

# Install Playwright browsers (required for tests)
npx playwright install
```

#### 2. Start the Local Server

You need to run the local server before executing the tests. Open a terminal (ensure you are inside the `Checkout_app` directory) and run:

```bash
node server.js
```

**Note:** Leave this terminal open and running. Do not close it.

#### 3. Execute Tests

Open a **second, new terminal window**, navigate to the `Checkout_app` directory again, and run the Playwright test suite:

```bash
# Run all tests in headless mode (no browser window will open)
npx playwright test

# Run tests with UI mode (helpful for debugging, opens an interactive window)
npx playwright test --ui
```
