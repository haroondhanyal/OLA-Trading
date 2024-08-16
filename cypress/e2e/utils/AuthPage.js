const LoginGets = require("../Locators/authLocators/Login.json");
const SignUpGets = require("../Locators/authLocators/SignUP.json");

export class AuthPage {
    // Utility method to type into input fields
    typeField(locator, value) {
        if (value === undefined || value === null) {
            throw new Error(`The value for locator ${locator} is undefined or null.`);
        }
        cy.xpath(locator).type(value);
        cy.wait(200);
    }

    // Utility method to click buttons
    clickButton(locator) {
        cy.xpath(locator).click();
        cy.wait(200);
    }

    // Login method
    login(username, password) {
        this.typeField(LoginGets.LoginLocators.Username, username);
        this.typeField(LoginGets.LoginLocators.Password, password);
        this.clickButton(LoginGets.LoginLocators.ViewPassword); 
        this.clickButton(LoginGets.LoginLocators.LoginButton);
        cy.wait(300)
    }

    // Signup method
    signup(firstName, lastName, username, email, password) {
        this.typeField(SignUpGets.SignUpLocators.FirstName, firstName);
        this.typeField(SignUpGets.SignUpLocators.LastName, lastName);
        this.typeField(SignUpGets.SignUpLocators.UserName, username);
        this.typeField(SignUpGets.SignUpLocators.Email, email);
        this.typeField(SignUpGets.SignUpLocators.Password, password);
        this.typeField(SignUpGets.SignUpLocators.ReEnterPassword, password);
        this.clickButton(SignUpGets.SignUpLocators.SignUPButton);
    }
}

  

