package steps;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import junit.framework.Assert;
import pages.DashboardPage;
import pages.LoginPage;
import pages.TestBase;

public class AddNewAccountStepsDefination {
	DashboardPage dashboardpage;
	LoginPage loginpage;

	



	
	@Then("User clicks on {string}")
	public void user_clicks_on(String string) {
		
	}
	
	
	@When("User enters {string} in the {string} field in accounts page")
	public void user_enters_in_the_field_in_accounts_page(String accountName, String description, String initialBalance, String accountNumber, String contactPerson) {
	  dashboardpage.enterAccountName(accountName);
	  dashboardpage.enterDescription(description);
	  dashboardpage.enterInitialBalance(initialBalance);
	  dashboardpage.enterACnumber(accountNumber);
	  dashboardpage.enterContactPerson(contactPerson);
	}


	
	

	@Then("User should be able to validate account created successfully")
	public void user_should_be_able_to_validate_account_created_successfully() {
		String expectedTitle = "Account List";
		String actualTitle = loginpage.getPageTitle();
		Assert.assertEquals("page is not matching", expectedTitle, actualTitle);
	}





}
