const Log= require('../../Locators/authLocators/Logout.json')
export class Logout{
    LogoutProcess(){
        cy.xpath(Log.Logout.LogClick).click()
        cy.xpath(Log.Logout.LogoutButton).click()
    }
}