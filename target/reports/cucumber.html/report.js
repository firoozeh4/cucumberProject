$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:features/addAccount.feature");
formatter.feature({
  "name": "Codefios Other Add New Account validation",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@AddAccountFeature"
    }
  ]
});
formatter.scenarioOutline({
  "name": "User should be able to loging succefully and add a new account",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ScenarioAddAccount"
    }
  ]
});
formatter.step({
  "name": "User enters the \"\u003cusername\u003e\" in the \"username\" field",
  "keyword": "When "
});
formatter.step({
  "name": "User enters the \"\u003cpassword\u003e\" in the \"password\" field",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks on \"login\"",
  "keyword": "And "
});
formatter.step({
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "name": "User clicks on \"listAccounts\"",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on \"addAccount\"",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003caccountName\u003e\" in the \"accountName\" field in accounts page",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003cdescription\u003e\" in the \"description\" field in accounts page",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003cinitialBalance\u003e\" in the \"initialBalance\" field in accounts page",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003caccountNumber\u003e\" in the \"accountNumber\" field in accounts page",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003ccontactPerson\u003e\" in the \"contactPerson\" field in accounts page",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on \"Save\"",
  "keyword": "And "
});
formatter.step({
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "accountName",
        "description",
        "initialBalance",
        "accountNumber",
        "contactPerson"
      ]
    },
    {
      "cells": [
        "demo@codefios.com",
        "abc123",
        "Test_Fay",
        "Homework1",
        "1000",
        "1020304050",
        "Firoozeh"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the codefios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.LoginStepDefination.user_is_on_the_codefios_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able to loging succefully and add a new account",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AddAccountFeature"
    },
    {
      "name": "@ScenarioAddAccount"
    }
  ]
});
formatter.step({
  "name": "User enters the \"demo@codefios.com\" in the \"username\" field",
  "keyword": "When "
});
formatter.match({
  "location": "steps.DashboardPageStepDefination.user_enters_the_in_the_field(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the \"abc123\" in the \"password\" field",
  "keyword": "When "
});
formatter.match({
  "location": "steps.DashboardPageStepDefination.user_enters_the_in_the_field(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on \"login\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AddNewAccountStepsDefination.user_clicks_on(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.DashboardPageStepDefination.user_should_land_on_Dashboard_page()"
});
formatter.result({
  "error_message": "junit.framework.ComparisonFailure: page is not matching expected:\u003c[]Codefios\u003e but was:\u003c[Welcome To ]Codefios\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat steps.DashboardPageStepDefination.user_should_land_on_Dashboard_page(DashboardPageStepDefination.java:44)\r\n\tat ✽.User should land on Dashboard page(classpath:features/addAccount.feature:12)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User clicks on \"listAccounts\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AddNewAccountStepsDefination.user_clicks_on(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on \"addAccount\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AddNewAccountStepsDefination.user_clicks_on(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"Test_Fay\" in the \"accountName\" field in accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AddNewAccountStepsDefination.user_enters_in_the_field_in_accounts_page(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"Homework1\" in the \"description\" field in accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AddNewAccountStepsDefination.user_enters_in_the_field_in_accounts_page(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"1000\" in the \"initialBalance\" field in accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AddNewAccountStepsDefination.user_enters_in_the_field_in_accounts_page(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"1020304050\" in the \"accountNumber\" field in accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AddNewAccountStepsDefination.user_enters_in_the_field_in_accounts_page(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"Firoozeh\" in the \"contactPerson\" field in accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AddNewAccountStepsDefination.user_enters_in_the_field_in_accounts_page(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on \"Save\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AddNewAccountStepsDefination.user_clicks_on(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.AddNewAccountStepsDefination.user_should_be_able_to_validate_account_created_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});