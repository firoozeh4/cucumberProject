package steps;

import org.openqa.selenium.support.PageFactory;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import junit.framework.Assert;
import pages.LoginPage;
import pages.TestBase;

public class LoginStepDefination extends TestBase {
	
	LoginPage loginpage;
	
	@Before
	public void beforeRun() {
		initDriver();
		loginpage = PageFactory.initElements(driver, LoginPage.class);
	}
	
	@Given ("User is on the codefios login page")
	public void user_is_on_the_codefios_login_page() {
//		TestBase.initDriver();
	
//		TestBase.driver.get("");
	driver.get("https://codefios.com/ebilling/login");
	}
	
	@When ("User enters username as {string}")
	public void userEntersUsername(String userName) {
		loginpage.enterUserName(userName);
		
	}
	
	@When("User enters password as {string}")
	public void user_enters_password_as(String passWord) {
		
		loginpage.enterPassword(passWord);
	    
	}

	@When("User clicks on signin button")
	public void user_clicks_on_signin_button() {
	 loginpage.clickSignInButton();   
	}

	@Then("User should land on dashboard page")
	public void user_should_land_on_dashboard_page() {
	 String expectedTitle = "Codefios";
	 String actualTitle = loginpage.getPageTitle();
	 Assert.assertEquals("page is not matching", expectedTitle, actualTitle);
	 
	}
	
	@After
	public void afterRun() {
	driver.close();
	driver.quit();
		
	}
	

}
