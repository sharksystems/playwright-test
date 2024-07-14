# playwright-test

## Summary
This repository contains automated tests for the Redmine website (https://www.redmine.org) using Playwright and Allure for reporting. Tests are written in JavaScript following Page Object Model.

## Requirements
To run the tests, you need to have the following installed on your machine:
- Node.js (LTS version recommended)
- Java (for Allure report generation)
- Allure CLI (if not installed globally, the project includes it as a dependency)

## Steps to Install
1. Clone the repository or go to Code > Download ZIP
2. Install dependencies: npm install
3. Install Playwright browsers: npx playwright install --with-deps

## Running tests and generating a report
1. Run the tests: npm run test
2. Generate Allure report: npm run allure:generate
3. Open Allure report: npm run allure:open
