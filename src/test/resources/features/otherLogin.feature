@LoginFeatureNegative @Regression @Sanity
Feature: Codefios login functionality validation

@OtherScenario1
Scenario Outline: User should not be able to login with invalid credential
Given User is on the codefios login page
When User enters username as "<userName>"
When User enters password as "<passWord>"
When User clicks on signin button
Then User should land on dashboard page
Examples:
|userName|passWord|
|demo@codefioss.com|abc123|
|demo@codefios.com|abc124|


#@OtherScenario1 @Smoke
#Scenario: User should not be able to login with invalid credential(userName)
#Given User is on the codefios login page
#When User enters username as "demo@codefioss.com"
#When User enters password as "abc123"
#When User clicks on signin button
#Then User should land on dashboard page
#
#@OtherScenario2
#Scenario: User should not be able to login with invalid credential(passWord)
#Given User is on the codefios login page
#When User enters username as "demo@codefios.com"
#When User enters password as "abc124"
#When User clicks on signin button
#Then User should land on dashboard page