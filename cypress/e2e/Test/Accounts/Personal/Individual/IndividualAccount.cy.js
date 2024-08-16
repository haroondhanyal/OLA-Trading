

import { AuthPage } from "../../../../utils/AuthPage";
import { PersonalInformation } from "../../../../Pages/Accounts/Personal/Individual/PersonalInfo";
import { CancelViewApp } from "../../../../utils/CancelViewApp";
import { generatePersonalInfoData } from "../../../../utils/dataGenerator";

const IndividualAccountRequest=new PersonalInformation()
const Authorization=new AuthPage()
const CancelViewAccountApplication=new CancelViewApp()


describe("User SignedIn and Creates the  Personal Individual Account ",()=>{
    beforeEach(()=>{
        cy.visit("https://ola-staging.atlascleartrading.com/")
        cy.wait(3000)
        
    })
    it("User Creates an Account",()=>{
        cy.fixture('auth/Login').then((data)=>{
            Authorization.login(data.Username, data.Password);
            IndividualAccountRequest.CreateNewAccount()
            IndividualAccountRequest.AccountSelection();
            IndividualAccountRequest.Next();
            // CancelViewAccountApplication.checkForIncompleteAccountAlert().then(isAlertVisible=>{
            //     if (isAlertVisible) {
            //         cy.log('Custom Alert: Incomplete account detected. Viewing the incomplete application...');
            //         CancelViewAccountApplication.ViewApplication(); 
            //     } else {
            //         cy.log('No incomplete account detected. Proceeding with new account creation...');
            //         IndividualAccountRequest.AccountSelection();
            //         IndividualAccountRequest.Next();
            //     }
            //     const randomData= generatePersonalInfoData();
        

            // })
            const randomData= generatePersonalInfoData();
            cy.writeToFixture('PersonInfoData', randomData)
            IndividualAccountRequest.fillPersonalInfo(randomData.fName,randomData.mName, randomData.dob,randomData.lName,randomData.nOfDependents,randomData.membersEmail,randomData.primaryTelephone,randomData.workTelephone,randomData.socialSecNumber,randomData.IdNumber)
            // IndividualAccountRequest.CreateNewAccount()
            // IndividualAccountRequest.AccountSelection()
            // IndividualAccountRequest.Next()       
        })
        // const randomData= generatePersonalInfoData();
        // cy.writeToFixture('PersonInfoData', randomData)
        // IndividualAccountRequest.fillPersonalInfo(randomData.fName.randomData.mName,randomData.lName,randomData.nOfDependents,randomData.membersEmail,randomData.primaryTelephone,randomData.workTelephone,randomData.socialSecNumber,randomDataIdNumber)
        // cy.fixture('Accounts/Personal/Individual/PersonalInfo').then((data)=>{
        //     // IndividualAccountRequest.CreateNewAccount()
        //     // IndividualAccountRequest.AccountSelection()
        //     // IndividualAccountRequest.Next()
        //     IndividualAccountRequest.fillPersonalInfo(data.statuses,data.firstName)
        // })

    })
})