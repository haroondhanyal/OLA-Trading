const PersonalInfo=require("../../../../Locators/Account/Personal/Individual/PersonalInfo.json")
const AccountSelection=require("../../../../Locators/Account/CreateAccounts/AccountCreation.json")

export class PersonalInformation{
    CreateNewAccount(){
        cy.xpath(AccountSelection.Personal.CreateNewAccount).click()
        cy.wait(200)
    }
    AccountSelection(){
        cy.xpath(AccountSelection.Personal.PersonalAccountType).select('Individual')
        cy.wait(200)
    }
    Next(){
        cy.xpath(AccountSelection.Personal.Next).click()
        cy.wait(200)
    }
    fillPersonalInfo(fName,mName,lName,dob,nOfDependents,materialStatus,membersEmail,primaryTelephone,workTelephone,socialSecNumber,IdNumber,issueDate,expirationDate){
        cy.xpath(PersonalInfo.PersonalInformation.FirstName).type(fName)
        //cy.xpath(PersonalInfo.PersonalInformation.MiddleName).type(mName)
        cy.xpath(PersonalInfo.PersonalInformation.LastName).type(lName)

        cy.xpath(PersonalInfo.PersonalInformation.DateofBirth).type('2005-09-04');

        cy.xpath(PersonalInfo.PersonalInformation.NoOfDependents).type(nOfDependents)
        cy.xpath(PersonalInfo.PersonalInformation.PrimaryTelephone).type(primaryTelephone)
        cy.xpath(PersonalInfo.PersonalInformation.WorkTelephone).type(workTelephone)
        cy.xpath(PersonalInfo.PersonalInformation.Email).type(membersEmail)
        cy.xpath(PersonalInfo.PersonalInformation.SocialSecurityNo).type(socialSecNumber)
        // cy.xpath(PersonalInfo.PersonalInformation.IdNumber)
       // cy.xpath(PersonalInfo.PersonalInformation.MaterialStatus).select(materialStatus) 
       cy.wait(200)       
    }



}