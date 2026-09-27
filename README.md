# OLA Trading Automation

## Automated Functional, Regression & End-to-End Testing

OLA Trading Automation is a scalable test automation framework created to validate important workflows of the OLA Trading application.

The project provides reusable automation components, structured test cases, configuration management, test data handling, logging, screenshots, and reporting to support reliable application validation across releases.

---

# Project Goals

The automation project is designed to:

- Reduce repetitive manual regression testing
- Validate critical trading workflows
- Improve release confidence
- Increase automated test coverage
- Detect defects earlier
- Maintain reusable automation components
- Generate test evidence
- Improve debugging
- Support multiple environments
- Enable future CI/CD execution

---

# Automation Scope

The framework can automate workflows such as:

- Application launch
- User authentication
- Login
- Logout
- Dashboard
- Navigation
- User account
- Profile
- Market screens
- Trading screens
- Buy/Sell flows
- Order creation
- Order modification
- Order cancellation
- Portfolio
- Open positions
- Transaction history
- Notifications
- Settings
- Validation messages
- Error handling

---

# Test Types

The framework should support:

## Smoke Testing

Validate core functionality after a new build.

Examples:

```text
Application launches
Login works
Dashboard loads
Critical trading screen opens
Logout works
```

---

## Sanity Testing

Validate targeted features following smaller application changes.

---

## Functional Testing

Validate individual business requirements and workflows.

---

## Regression Testing

Validate existing functionality before release.

---

## Negative Testing

Validate behavior when:

- Invalid credentials are entered
- Required fields are missing
- Invalid amounts are provided
- Unauthorized actions are attempted
- Invalid data is submitted

---

## End-to-End Testing

Validate complete user journeys.

Example:

```text
Login
  ↓
Open Trading Module
  ↓
Select Instrument
  ↓
Create Order
  ↓
Confirm Order
  ↓
Validate Order
  ↓
Check Portfolio / History
```

---

# Recommended Framework Architecture

Use layered automation architecture:

```text
Test Cases
    ↓
Business Flows
    ↓
Page / Screen Objects
    ↓
Reusable Actions
    ↓
Locators
    ↓
Application
    ↓
Assertions
    ↓
Reports / Evidence
```

---

# Recommended Folder Structure

```text
OLA-Trading/
│
├── tests/
│   ├── smoke/
│   ├── sanity/
│   ├── regression/
│   ├── functional/
│   └── e2e/
│
├── pages/
│   ├── LoginPage
│   ├── DashboardPage
│   ├── TradingPage
│   ├── PortfolioPage
│   └── ProfilePage
│
├── flows/
│
├── locators/
│
├── utilities/
│
├── test-data/
│
├── config/
│
├── reports/
│
├── screenshots/
│
├── logs/
│
└── README.md
```

Use actual repository folder names where they already exist.

---

# Page Object Model

The framework should follow Page Object Model or an equivalent reusable abstraction.

Example:

```text
LoginPage
├── enterUsername()
├── enterPassword()
├── clickLogin()
├── getValidationMessage()
└── verifyDashboardLoaded()
```

Test case:

```text
Login test
   ↓
LoginPage
   ↓
Reusable methods
   ↓
Application UI
```

Tests should describe business behavior rather than raw element interaction.

---

# Business Flow Layer

For complex trading scenarios create reusable flows.

Example:

```text
CreateTradeFlow
├── openTrading()
├── selectInstrument()
├── selectBuyOrSell()
├── enterQuantity()
├── enterPrice()
├── reviewOrder()
├── confirmOrder()
└── verifyOrder()
```

This keeps long tests readable.

---

# Locator Strategy

Use stable locators.

Preferred order:

```text
Test ID
Accessibility ID
Stable ID
Semantic Locator
CSS / Platform locator
XPath only if required
```

Avoid:

- Dynamic XPath
- Positional locators
- Fragile DOM paths
- Hardcoded coordinates

---

# Test Data Management

Keep test data separate.

Example:

```text
test-data/
├── users
├── instruments
├── orders
├── invalid-data
└── environments
```

Example data:

```text
Valid User
Invalid User
Trade Quantity
Instrument
Order Type
Expected Validation
```

Never commit real credentials or sensitive financial information.

---

# Configuration

Keep environment configuration separate from tests.

Example:

```text
config/
├── qa
├── staging
└── local
```

Possible configuration:

```text
Base URL
Username
Timeout
Environment
Browser / Device
Report Path
Screenshot Path
```

---

# Authentication Testing

Automate scenarios such as:

```text
Valid Login
Invalid Password
Invalid Username
Empty Credentials
Session Timeout
Logout
```

Validate both successful and unsuccessful behavior.

---

# Trading Automation

Trading automation may cover:

```text
Open trading screen
Search instrument
Select instrument
Select BUY
Select SELL
Enter quantity
Enter price
Select order type
Submit order
Confirm order
Validate confirmation
```

---

# Order Management

Automate:

- Create order
- Modify order
- Cancel order
- Validate order status
- Validate order details
- Check order history

Possible statuses:

```text
Pending
Executed
Cancelled
Rejected
```

---

# Portfolio Validation

Automate checks for:

- Holdings
- Positions
- Quantity
- Average price
- Transaction history
- Portfolio updates

Where values are dynamic, use controlled test data or API-assisted validation if available.

---

# Assertions

Every automated test must contain meaningful assertions.

Examples:

```text
Login successful
Dashboard displayed
Expected validation shown
Order created
Order status correct
Navigation successful
Profile updated
```

Avoid tests that only click through the application.

---

# Synchronization Strategy

Avoid unnecessary static delays.

Prefer:

```text
Wait until visible
Wait until enabled
Wait until loaded
Wait until state changes
Wait until response completes
```

Static sleep should be used only when unavoidable.

---

# Logging

Log important execution events.

Example:

```text
INFO  Starting login test
INFO  Login page loaded
INFO  Credentials entered
INFO  Login submitted
INFO  Dashboard displayed
PASS  Login test completed
```

On failure:

```text
ERROR Order confirmation was not displayed
```

Do not log:

- Passwords
- Tokens
- Financial secrets
- Sensitive account details

---

# Screenshots

Automatically capture screenshots on failure.

Suggested folders:

```text
screenshots/
├── failed/
├── passed/
└── execution-date/
```

Example:

```text
TC_LOGIN_001_success.png
TC_ORDER_004_cancel_failed.png
```

---

# Reporting

Reports should include:

- Test name
- Status
- Duration
- Passed tests
- Failed tests
- Skipped tests
- Error details
- Screenshots
- Logs

Recommended reporting options depend on the framework actually used.

Possible examples:

- Allure
- Extent Reports
- HTML reports
- Native test-runner reports

---

# Failure Handling Flow

```text
Test Failure
    ↓
Capture Screenshot
    ↓
Collect Logs
    ↓
Capture Error
    ↓
Attach Evidence
    ↓
Mark Test Failed
    ↓
Continue Remaining Tests
```

---

# Test Independence

Tests should be independent.

Avoid:

```text
Test 2 only works if Test 1 executed.
```

Prefer:

```text
Each test prepares its required state.
```

---

# Environment Strategy

Recommended environments:

```text
Local
QA
Staging
Production-like testing
```

Tests should not require source-code changes to switch environments.

---

# Local Execution

Recommended workflow:

```text
Clone Repository
   ↓
Open in VS Code
   ↓
Install Dependencies
   ↓
Configure Environment
   ↓
Start Application
   ↓
Run Tests
   ↓
Review Report
```

Repository:

```text
https://github.com/haroondhanyal/OLA-Trading
```

---

# VS Code Development

Use VS Code for:

- Framework development
- Test execution
- Debugging
- Locator maintenance
- Git operations
- Test-data updates
- Report review

Maintain project-specific launch or task configurations where useful.

---

# CI/CD Architecture

The automation framework should be CI-ready.

Suggested pipeline:

```text
Code Commit
    ↓
Checkout Repository
    ↓
Install Dependencies
    ↓
Setup Test Environment
    ↓
Run Smoke Tests
    ↓
Run Regression
    ↓
Generate Report
    ↓
Publish Evidence
```

Possible platforms:

- GitHub Actions
- Azure DevOps
- Jenkins
- Bitbucket Pipelines

---

# Recommended CI Strategy

For every pull request:

```text
Smoke Suite
```

For release candidate:

```text
Smoke
+
Functional
+
Regression
```

Scheduled testing:

```text
Nightly Regression
```

---

# Test Tags

Use test categories or tags where supported.

Example:

```text
@smoke
@regression
@trading
@login
@portfolio
@negative
@critical
```

This allows selective execution.

---

# Coding Standards

Follow:

- Clear naming
- Small reusable methods
- No duplicated logic
- No duplicated locators
- No hardcoded credentials
- Centralized configuration
- Meaningful comments
- Consistent assertions
- Independent test cases

---

# Example Test Naming

```text
verifyValidUserCanLogin

verifyInvalidPasswordShowsError

verifyUserCanCreateBuyOrder

verifyUserCanCreateSellOrder

verifyPendingOrderCanBeCancelled

verifyPortfolioDisplaysUpdatedPosition
```

Names should describe expected behavior.

---

# Security

Never commit:

```text
Passwords
API Keys
Tokens
Real trading credentials
Private account details
```

Use:

```text
.env
Environment Variables
CI Secrets
Secret Managers
```

and add sensitive files to `.gitignore`.

---

# Trading Safety for Automation

Where the application supports real trading, automation should preferably execute against:

```text
QA
Sandbox
Demo
Paper Trading
Test Environment
```

Do not let automated tests unintentionally execute real financial transactions.

---

# Recommended Release Automation Flow

```text
New Build
   ↓
Smoke Suite
   ↓
Functional Validation
   ↓
Regression Suite
   ↓
Review Failed Tests
   ↓
Publish Report
   ↓
Release Decision
```

---

# Future Enhancements

The automation framework can later include:

- API automation
- UI + API combined validation
- Data-driven testing
- Parallel execution
- Cross-browser testing
- Mobile automation
- Cloud test execution
- Automated test-data creation
- Database validation
- Visual testing
- Performance testing
- CI/CD dashboards
- Automated release gates

---

# Quality Principles

Each automated test should be:

```text
Readable
Reusable
Independent
Repeatable
Maintainable
Traceable
Business-focused
Evidence-driven
```

---

# Final Goal

OLA Trading Automation should provide a dependable automated regression layer for validating critical trading workflows.

The framework should help the QA and development teams:

- Detect regressions earlier
- Reduce manual effort
- Validate trading functionality consistently
- Produce clear evidence
- Improve debugging
- Shorten regression cycles
- Improve overall release confidence

The repository should evolve as a maintainable automation framework rather than a collection of isolated automation scripts.
