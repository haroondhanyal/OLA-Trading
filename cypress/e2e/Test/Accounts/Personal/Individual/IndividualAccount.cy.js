

import { AuthPage } from "../../../../utils/AuthPage";
import { PersonalInformation } from "../../../../Pages/Accounts/Personal/Individual/PersonalInfo";
import { CancelViewApp } from "../../../../utils/CancelViewApp";
import { generatePersonalInfoData } from "../../../../utils/dataGenerator";
import {EmploymentInformationChoose} from "../../../../Pages/Accounts/Personal/Individual/EmploymentInfo";
import {InvestorProfile} from '../../../../Pages/Accounts/Personal/Individual/InvestorProfile';
import{RegulatoryItems}from '../../../../Pages/Accounts/Personal/Individual/RegulatoryItems';
import {Documents} from '../../../../Pages/Accounts/Personal/Individual/DocumentUpload';
import { AccountFeatures } from "../../../../Pages/Accounts/Personal/Individual/AccountFeatures";
import { DisclosureAndSignatures } from "../../../../Pages/Accounts/Personal/Individual/DisclosureSignatures";

const IndividualAccountRequest=new PersonalInformation()
const Authorization=new AuthPage()
const CancelViewAccountApplication=new CancelViewApp()
const EmploymentData=new EmploymentInformationChoose();
const Investor=new InvestorProfile();
const Regulatory=new RegulatoryItems();
const DocUpload=new Documents();
const Account=new AccountFeatures();
const DAS=new DisclosureAndSignatures();


describe("User SignedIn and Creates the  Personal Individual Account ",()=>{
    beforeEach(()=>{

        // cy.window().then((win) => {
        //     if (!win.open.stubbed) {
        //         cy.stub(win, 'open').as('windowOpen');
        //         cy.stub(win, 'location').as('windowLocation');
        //         win.open.stubbed = true;
        //     }
        // });
        Cypress.on('uncaught:exception', (err) => {
            console.error('Uncaught exception:', err);
            return false;
        });
        cy.visit("https://ola-staging.atlascleartrading.com/")
        cy.wait(3000)
        
    })
    it("User Creates an Account",()=>{
        cy.fixture('auth/Login').then((data)=>{
            Authorization.login(data.Username, data.Password);
            IndividualAccountRequest.CreateNewAccount()
            IndividualAccountRequest.AccountSelection();
            IndividualAccountRequest.Next();
            // CancelViewAccountApplication.handleIncompleteApplication();
            // CancelViewAccountApplication.checkForIncompleteAccountAlert().then(isAlertVisible=>{
            //     if (isAlertVisible) {
            //         cy.log('Custom Alert: Incomplete account detected. Viewing the incomplete application...');
            //         CancelViewAccountApplication.ViewApplication(); 
            //     } else {
            //         cy.log('No incomplete account detected. Proceeding with new account creation...');
            //         IndividualAccountRequest.AccountSelection();
            //         IndividualAccountRequest.Next();
            //     }
            // })
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
            Investor.updateOptions()
            Investor.UsageButtons()
            cy.wait(5000);
            cy.url().should('include', '/#/regulatory-items');  
            Regulatory.fillSeniorExecutiveYes()
            Regulatory.FINRAregisteredYes()
            Regulatory.fillPoliticalFigureSPFYes()
            Regulatory.fillTitle31Yes()
            Regulatory.fillUnitedStatedFederalREgulationsYes()
            Regulatory.fillSEC15c3Yes()
            Regulatory.GrantedTradingAuthorityYes()
            Regulatory.InvestmentsInstitutionalYes()
            Regulatory.PublicCorporationYes()
            Regulatory.ControlOfBrokerYes()
            Regulatory.fillInfoDetails()
            Regulatory.fillFurtherInfo()
            Regulatory.IObject()
            Regulatory.UsageButtons()
            cy.wait(5000);
            cy.url().should('include', '/#/account-features'); 
            Account.DocsKeep()
            // cy.xpath("//span[@class='lending-text']").click()
            // cy.xpath("//a[normalize-space()='What is Fully Paid Securities Lending?']").then(($el) => {
            // $el.on('click', (event) => {
            //     event.preventDefault();
            // });
            // }).click();
            Account.DocsKeep()
            Account.FullyPaidLendingClose()
            Account.UsageButtons()
            cy.wait(5000);
            cy.url().should('include', '/#/upload-documents'); 
            DocUpload.DrivingLicenses()
            cy.wait(2000);
            DocUpload.UsageButtons()
            cy.wait(5000);
            cy.url().should('include', '/#/disclosures-signatures'); 
            DAS.AccountAgreementYes()
            DAS.CashAndMarginDomesticYes()
            DAS.LoanAgreementYes()
            DAS.DigitalSignature()
            cy.get('#react-sketch-canvas__canvas-background')
            .should('be.visible');
            DAS.CaptureSignature()
            // DAS.Save()
            // DAS.SaveAndContinue()
        })
        
        
    })
})