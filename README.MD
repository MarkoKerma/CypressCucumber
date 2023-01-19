## Set Cypress tests
- npm install

## Debug tests
- npx cypress open
1. From cypress runner open e2e tests
2. Run limitlex feature file


## Run tests

# Default run with electron
- npx cypress run

# Selected browser run
- npx cypress --browser {browser name}

# Run with GUI of browser
- npx cypress run --browser {browser name} --headed

## Test Case
Feature: Limitlex

  Scenario: Widget code
    Given I login to Limitlex Forum Pay
    And open Widgets menu
    When I input Order Amount "33"
    And copy widget HTML
    And open Cron Jobs page
    And start Cron Jobs
    And use Widget Code in browser
    And confirm I am not a robot
    Then widget will open with correct amount "33"
