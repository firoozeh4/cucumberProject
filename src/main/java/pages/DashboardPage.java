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
	 @FindBy(how=How.XPATH,using="//a[@title='List Accounts']")
	 WebElement ListAccount;
	 @FindBy(how=How.XPATH,using="//button[@type='button' and @class='btn btn-primary']")
	 WebElement AddAccount;
	 @FindBy(how=How.XPATH,using="//input[@name='account_name']")
	 WebElement AccountName;
	 @FindBy(how=How.XPATH,using="//textarea[@name='description']")
	 WebElement Description;
	 @FindBy(how=How.XPATH,using="//input[@name='balance']")
	 WebElement InitialBalance;
	 @FindBy(how=How.XPATH,using="//input[@name='account_number']")
	 WebElement ACNumber;
	 @FindBy(how=How.XPATH,using="//input[@name='contact_person']")
	 WebElement ContactPerson;
	 @FindBy(how=How.XPATH,using="//button[@id='accountSave']")
	 WebElement ClickSaveButton;
	 
	 public void clickListAccount() {
		   SignInButton.click();
	 }
		   
	public void clickAddAccount() {
			   ListAccount.click();
	}
	
	public void enterAccountName(String accountName) {
		  UserName.sendKeys(accountName);
	}
	
	public void enterDescription(String description) {
		  UserName.sendKeys(description);
	}
	
	public void enterInitialBalance(String initialBalance) {
		  UserName.sendKeys(initialBalance);
	}
	
	public void enterACnumber(String acNumber) {
		  UserName.sendKeys(acNumber);
	}
	
	public void enterContactPerson(String contactNumber) {
		  UserName.sendKeys(contactNumber);
	}
	
	public void clickSaveButton() {
		   ClickSaveButton.click();
	 }
	
		   
		   
	 
	
}
