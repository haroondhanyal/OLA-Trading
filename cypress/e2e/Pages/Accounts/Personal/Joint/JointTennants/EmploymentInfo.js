const EmpInfo=require('../../../../../Locators/Account/Personal/Individual/EmploymentInfo.json')
const Buttons=require('../../../../../Locators/Account/Personal/Individual/Buttons.json')
export class EmploymentInformationChoose{
    filledEmployed(){

        cy.xpath(EmpInfo.EmployedData.Employed).click()
        cy.xpath(EmpInfo.EmployedData.Employer).clear().type('Digital Sol')
        cy.xpath(EmpInfo.EmployedData.YearsEmployed).clear().type('10')
        cy.xpath(EmpInfo.EmployedData.Position).clear().type('QA Manager')
        cy.xpath(EmpInfo.EmployedData.EmployerAddress1).clear().type('NASTP Building Airport Road, Block 5')
        cy.xpath(EmpInfo.EmployedData.EmployerAddress2).clear().type('Mezaine Floor Office 505')
        // cy.xpath(EmpInfo.EmployedData.Country).select('Unites States')
        cy.xpath(EmpInfo.EmployedData.State).select('Florida')
        cy.xpath(EmpInfo.EmployedData.City).clear().type('Miami')
        cy.xpath(EmpInfo.EmployedData.ZipCode).clear().type('458787')
        cy.wait(100)
    }
    filledRetired(){
       cy.xpath(EmpInfo.RetiredInfo.Retired).click()
       cy.wait(100)
    }
    FilledUnEmployed(){
        cy.xpath(EmpInfo.UnEmployedInfo.Unemployed).click()
        cy.wait(100)

    }
    UsageButtons(){
        cy.xpath(Buttons.UsageButtons.SaveAndContinue).click()
        cy.wait(200)

    }
}