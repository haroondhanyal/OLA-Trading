const PersonalInfo=require("../../../../Locators/Account/Personal/Individual/PersonalInfo.json")
const AccountSelection=require("../../../../Locators/Account/CreateAccounts/AccountCreation.json")
const Buttons=require('../../../../Locators/Account/Personal/Individual/Buttons.json')
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
        cy.xpath(PersonalInfo.PersonalInformation.FirstName).clear().type(fName)
        cy.xpath(PersonalInfo.PersonalInformation.MiddleName).clear().type(mName)
        cy.xpath(PersonalInfo.PersonalInformation.LastName).clear().type(lName)

        cy.xpath(PersonalInfo.PersonalInformation.DateofBirth).clear().type('2005-09-04');

        cy.xpath(PersonalInfo.PersonalInformation.NoOfDependents).clear().type(nOfDependents)
        cy.xpath(PersonalInfo.PersonalInformation.PrimaryTelephone).clear().type("12345678912345")
        cy.xpath(PersonalInfo.PersonalInformation.WorkTelephone).type(workTelephone)
        cy.xpath(PersonalInfo.PersonalInformation.Email).clear().type('alpha1234@gmail.com')
        cy.xpath(PersonalInfo.PersonalInformation.USCitizenYes).click({multiple:true})
        // cy.xpath(PersonalInfo.PersonalInformation.USCitizenYes).click()
        cy.xpath(PersonalInfo.PersonalInformation.SocialSecurityNo).clear().type('123223456')
        cy.xpath(PersonalInfo.PersonalInformation.IDnumber).clear().type('11332245655444205')
        cy.xpath(PersonalInfo.PersonalInformation.IdType).select('Passport')
        cy.xpath(PersonalInfo.PersonalInformation.MaterialStatus).select('Single') 
        //cy.xpath(PersonalInfo.PersonalInformation.IDissuanceState).type('2020-09-04')
        cy.get(':nth-child(4) > :nth-child(4) > .input_wrapper > .input_area > .inputForm').type('2020-09-04')
        cy.xpath(PersonalInfo.PersonalInformation.IDexpirationDate).clear().type('2025-09-04')
        cy.wait(200)       
    }
    fillPhysicalAddress(){
        cy.xpath(PersonalInfo.PhysicalAddress.Address1).clear().type("Evacue Trust building Floor 5")
        cy.xpath(PersonalInfo.PhysicalAddress.Address2).clear().type('floor 2')
        cy.xpath(PersonalInfo.PhysicalAddress.CountryID).select('United States')
        cy.xpath(PersonalInfo.PhysicalAddress.StateID).select('Florida')
        cy.xpath(PersonalInfo.PhysicalAddress.City).clear().type('Miami')
        cy.xpath(PersonalInfo.PhysicalAddress.PostalCode).clear().type('204454')
        cy.wait(50)

    }
    MailingAddress(){
        cy.xpath(PersonalInfo.MailingAddress.MailingAddressCheckBox).click()
        cy.xpath(PersonalInfo.MailingAddress.MailingAddress1).clear().type('Near Marriot Hotel')
        cy.xpath(PersonalInfo.MailingAddress.MailingAddress2).clear().type('Evacue Building')
        cy.xpath(PersonalInfo.MailingAddress.MailingCountryId).select('United States')
        cy.xpath(PersonalInfo.MailingAddress.MailingState).select('Alabama')
        cy.xpath(PersonalInfo.MailingAddress.MAilingCity).clear().type('Kentbury')
        cy.xpath(PersonalInfo.MailingAddress.MailingPostalCode).clear().type('204774')

    }
    TrustedContacts(){
        cy.xpath(PersonalInfo.TrustedContact.TrustedContactCheckbox).click()
        cy.xpath(PersonalInfo.TrustedContact.FirstName).clear().type('Peters')
        cy.xpath(PersonalInfo.TrustedContact.EnterLastName).clear().type('Siddle')
        cy.xpath(PersonalInfo.TrustedContact.TelephoneNumber).type('50532145896879')
        cy.xpath(PersonalInfo.TrustedContact.EmailAddress).clear().type('tester014@gmail.com')
        cy.xpath(PersonalInfo.TrustedContact.MailingAddress1).clear().type('Orange Country Hall Street ')
        cy.xpath(PersonalInfo.TrustedContact.MailingAddress2).clear().type('Brad ford Street')
        cy.xpath(PersonalInfo.TrustedContact.Country).select('United States')
        cy.xpath(PersonalInfo.TrustedContact.State).select('Florida')
        cy.xpath(PersonalInfo.TrustedContact.City).clear().type('Naples')
        cy.xpath(PersonalInfo.TrustedContact.PostalCode).clear().type('34867')
        cy.wait(200)
    

    }
    UsageButtons(){
        cy.xpath(Buttons.UsageButtons.SaveAndContinue).click()
        cy.wait(200)
    }




}