package steps;

import org.openqa.selenium.support.PageFactory;

import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import junit.framework.Assert;
import pages.DashboardPage;
import pages.LoginPage;
import pages.TestBase;

public class DashboardPageStepDefination extends TestBase {
	
LoginPage loginpage;
DashboardPage dashboardpage;	
	
	
	
	@When("User enters the {string} in the {string} field")
	public void user_enters_the_in_the_field(String logindata, String field) {
		loginpage = PageFactory.initElements(driver, LoginPage.class);
	    if(field.equalsIgnoreCase("username")) {
	    	loginpage.enterUserName(logindata);
	    }else if(field.equalsIgnoreCase("password")) {
	    	loginpage.enterPassword(logindata);
	    }else {
	    	System.out.println("wrong" + logindata);
	    }
	}
	
	@Then("User clicks on login")
	public void loginclick() {
		loginpage.clickSignInButton();
	}
	
	
	
	@Then("User should land on Dashboard page")
	public void user_should_land_on_Dashboard_page() {
		 String expectedTitle = "Codefios";
		 String actualTitle = loginpage.getPageTitle();
		 Assert.assertEquals("page is not matching", expectedTitle, actualTitle);
	}
	

}
