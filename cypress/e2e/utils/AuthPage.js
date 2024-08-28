const LoginGets = require("../Locators/authLocators/Login.json");
const SignUpGets = require("../Locators/authLocators/SignUP.json");

export class AuthPage {
    // Utility method to type into input fields
    typeField(locator, value) {
        if (value === undefined || value === null || value.trim() === '') {
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
        // if (!username || !password) {
        //     throw new Error('Username and Password are required.');
        // }

        this.typeField(LoginGets.LoginLocators.Username, username);
        this.typeField(LoginGets.LoginLocators.Password, password);
        this.clickButton(LoginGets.LoginLocators.ViewPassword); 
        this.clickButton(LoginGets.LoginLocators.LoginButton);
        cy.wait(300)
    }

    // Signup method
    signup(firstName, lastName, username, email, password) {
        if (!firstName || !lastName || !username || !email || !password) {
            throw new Error('All signup fields are required.');
        }
        this.typeField(SignUpGets.SignUpLocators.FirstName, firstName);
        this.typeField(SignUpGets.SignUpLocators.LastName, lastName);
        this.typeField(SignUpGets.SignUpLocators.UserName, username);
        this.typeField(SignUpGets.SignUpLocators.Email, email);
        this.typeField(SignUpGets.SignUpLocators.Password, password);
        this.typeField(SignUpGets.SignUpLocators.ReEnterPassword, password);
        this.clickButton(SignUpGets.SignUpLocators.SignUPButton);
    }
    // login(username, password) {
    //     cy.xpath(LoginGets.LoginLocators.Username).type(username);
    //     cy.xpath(LoginGets.LoginLocators.Password).type(password);
    //     cy.xpath(LoginGets.LoginLocators.ViewPassword).click();
    //     cy.xpath(LoginGets.LoginLocators.LoginButton).click();
    //     cy.wait(300);
    // }

    // // Signup method
    // signup(firstName, lastName, username, email, password) {
    //     if (!firstName || !lastName || !username || !email || !password) {
    //         throw new Error('All signup fields are required.');
    //     }
    //     cy.xpath(SignUpGets.SignUpLocators.FirstName).type(firstName);
    //     cy.xpath(SignUpGets.SignUpLocators.LastName).type(lastName);
    //     cy.xpath(SignUpGets.SignUpLocators.UserName).type(username);
    //     cy.xpath(SignUpGets.SignUpLocators.Email).type(email);
    //     cy.xpath(SignUpGets.SignUpLocators.Password).type(password);
    //     cy.xpath(SignUpGets.SignUpLocators.ReEnterPassword).type(password);
    //     cy.xpath(SignUpGets.SignUpLocators.SignUPButton).click();
    // }
}

  

