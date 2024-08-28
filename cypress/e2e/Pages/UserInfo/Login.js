const Login=require('../../Locators/authLocators/Login.json')

export class LogIN{
    LoginPRocess(username,password){
        cy.xpath(Login.LoginLocators.Username).type(username)
        cy.xpath(Login.LoginLocators.Password).type(password)
        cy.xpath(Login.LoginLocators.LoginButton).click()
        cy.wait(200)
    }
}