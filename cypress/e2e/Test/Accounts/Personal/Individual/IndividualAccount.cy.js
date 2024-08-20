

import { AuthPage } from "../../../../utils/AuthPage";
import { PersonalInformation } from "../../../../Pages/Accounts/Personal/Individual/PersonalInfo";
import { CancelViewApp } from "../../../../utils/CancelViewApp";
import { generatePersonalInfoData } from "../../../../utils/dataGenerator";
import {EmploymentInformationChoose} from "../../../../Pages/Accounts/Personal/Individual/EmploymentInfo";
import {InvestorProfile} from '../../../../Pages/Accounts/Personal/Individual/InvestorProfile';
import{RegulatoryItems}from '../../../../Pages/Accounts/Personal/Individual/RegulatoryItems';
import {Documents} from '../../../../Pages/Accounts/Personal/Individual/DocumentUpload';

const IndividualAccountRequest=new PersonalInformation()
const Authorization=new AuthPage()
const CancelViewAccountApplication=new CancelViewApp()
const EmploymentData=new EmploymentInformationChoose();
const Investor=new InvestorProfile();
const Regulatory=new RegulatoryItems();
const DocUpload=new Documents();


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
            CancelViewAccountApplication.checkForIncompleteAccountAlert().then(isAlertVisible=>{
                if (isAlertVisible) {
                    cy.log('Custom Alert: Incomplete account detected. Viewing the incomplete application...');
                    CancelViewAccountApplication.ViewApplication(); 
                } else {
                    cy.log('No incomplete account detected. Proceeding with new account creation...');
                    IndividualAccountRequest.AccountSelection();
                    IndividualAccountRequest.Next();
                }
                
        

            })
            const randomData= generatePersonalInfoData();
            cy.writeToFixture('PersonInfoData', randomData)
            IndividualAccountRequest.fillPersonalInfo(randomData.fName,randomData.mName, randomData.lName,randomData.dob,randomData.nOfDependents,randomData.primaryTelephone,randomData.workTelephone,randomData.socialSecNumber,randomData.IdNumber)
            IndividualAccountRequest.fillPhysicalAddress()
            IndividualAccountRequest.MailingAddress()
            IndividualAccountRequest.TrustedContacts() 
            IndividualAccountRequest.UsageButtons()
            cy.wait(5000);
            cy.url().should('include', '/#/employment-info');  
            EmploymentData.filledEmployed()  
            EmploymentData.UsageButtons()  
            Investor.fillInvestmentPRofile()
            Investor.fillFinancialSuitability()
            Investor.fillPriorInvestmentExperience()
            Investor.fillACHRelationship()
            Investor.UsageButtons()
            cy.wait(5000);
            cy.url().should('include', '/#/regulatory-items');  
            // Regulatory.fillSeniorExecutiveYes()
            // DocUpload.DrivingLicenses()
            // DocUpload.UsageButtons()
        })
        

    })
})