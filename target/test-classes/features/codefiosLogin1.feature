@LoginFeature @Regression
Feature: Codefios login functionality validation

Background:
Given User is on the codefios login page

@Scenario1
Scenario: User should be able to login with valid credential
When User enters username as "demo@codefios.com"
When User enters password as "abc123"
When User clicks on signin button
Then User should land on dashboard page

@Scenario2
Scenario: User should not be able to login with invalid credential
When User enters username as "demo@codefios.com"
When User enters password as "abc124"
When User clicks on signin button
Then User should land on dashboard page