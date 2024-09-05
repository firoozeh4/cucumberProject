package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class DashboardPage {
WebDriver driver;
	
	public DashboardPage(WebDriver driver) {
		this.driver=driver;
	}

	// Element Library
	 @FindBy(how = How.XPATH, using = "//input[@id='user_name']")
	 WebElement UserName;
	 @FindBy(how = How.XPATH, using = "//input[@id='password']")
	 WebElement Password;
	 @FindBy(how = How.XPATH, using = "//button[@id='login_submit']")
	 WebElement SignInButton;

	
	
}
