const accountDataPath = '../../../../e2e/fixtures/Accounts/Personal/accountData.json';
import { PersonalIndividual } from "../../../utils/AccountSetup/Personal/PersonalAccounts";

import { AuthPage } from "../../../utils/AuthPage";
import { PersonalInformation } from "../../../Pages/Accounts/Personal/Individual/PersonalInfo";
import { generatePersonalInfoData } from "../../../utils/dataGenerator";
import { EmploymentInformationChoose } from "../../../Pages/Accounts/Personal/Individual/EmploymentInfo";
import { InvestorProfile } from '../../../Pages/Accounts/Personal/Individual/InvestorProfile';
import { RegulatoryItems } from '../../../Pages/Accounts/Personal/Individual/RegulatoryItems';
import { Documents } from '../../../Pages/Accounts/Personal/Individual/DocumentUpload';
import { AccountFeatures } from "../../../Pages/Accounts/Personal/Individual/AccountFeatures";
import { DisclosureAndSignatures } from "../../../Pages/Accounts/Personal/Individual/DisclosureSignatures";
import { PersonalAccountCreation } from "../../../utils/AccountSetup/Personal/PersonalAccounts";
import { CancelViewApp } from "../../../utils/CancelViewApp";

const IndividualAccountRequest = new PersonalInformation();
const Authorization = new AuthPage();
const EmploymentData = new EmploymentInformationChoose();
const Investor = new InvestorProfile();
const Regulatory = new RegulatoryItems();
const DocUpload = new Documents();
const Account = new AccountFeatures();
const DAS = new DisclosureAndSignatures();
const PersonalAccount = new PersonalAccountCreation();
// const CancelViewAccountApplication=new CancelViewApp()

describe("Account Creation Tests", () => {

    before(() => {
        cy.fixture('Accounts/Personal/accountData').as('accountData');
    });

    beforeEach(() => {
        Cypress.on('uncaught:exception', (err) => {
            console.error('Uncaught exception:', err);
            return false;
        });
        cy.visit("https://ola-staging.atlascleartrading.com/");
    });

    // Test for Individual Account
    it('should create an Individual Account', function() {
        cy.fixture('Accounts/Personal/accountData').then((data) => {
            const individualAccountData = data.find(d => d.accountType === 'Individual');
            if (!individualAccountData) {
                throw new Error('No data found for Individual account type');
            }
            
            Authorization.login(individualAccountData.username, individualAccountData.password);
            PersonalAccount.createIndividualAccount()
            // CancelViewAccountApplication.checkForIncompleteAccountAlert().then(isAlertVisible => {
            //     if (isAlertVisible) {
            //       cy.log('Custom Alert: Incomplete account detected. Handling the incomplete application...');
            //       CancelViewAccountApplication.CancelApplicationYes(); 
            //       cy.wait(2000); 
            //     } else {
            //       cy.log('No incomplete account detected.');
            //     }
            //   });
            // IndividualAccountRequest.CreateNewAccount();
            // IndividualAccountRequest.AccountSelection();
            // IndividualAccountRequest.Next();

            const randomData = generatePersonalInfoData();
            cy.writeToFixture('PersonInfoData', randomData);
            IndividualAccountRequest.fillPersonalInfo(
                randomData.fName, randomData.mName, randomData.lName, randomData.dob,
                randomData.nOfDependents, randomData.primaryTelephone, randomData.workTelephone,
                randomData.socialSecNumber, randomData.IdNumber
            );
            IndividualAccountRequest.fillPhysicalAddress();
            IndividualAccountRequest.MailingAddress();
            IndividualAccountRequest.TrustedContacts();
            IndividualAccountRequest.UsageButtons();
            cy.wait(5000);

            cy.url().should('include', '/#/employment-info');
            EmploymentData.filledEmployed();
            EmploymentData.UsageButtons();
            Investor.fillInvestmentPRofile();
            Investor.fillFinancialSuitability();
            Investor.fillPriorInvestmentExperience();
            Investor.fillACHRelationship();
            Investor.updateOptions();
            Investor.UsageButtons();
            cy.wait(5000);

            cy.url().should('include', '/#/regulatory-items');
            Regulatory.fillSeniorExecutiveYes();
            Regulatory.FINRAregisteredYes();
            Regulatory.fillPoliticalFigureSPFYes();
            Regulatory.fillTitle31Yes();
            Regulatory.fillUnitedStatedFederalREgulationsYes();
            Regulatory.fillSEC15c3Yes();
            Regulatory.GrantedTradingAuthorityYes();
            Regulatory.InvestmentsInstitutionalYes();
            Regulatory.PublicCorporationYes();
            Regulatory.ControlOfBrokerYes();
            Regulatory.fillInfoDetails();
            Regulatory.fillFurtherInfo();
            Regulatory.IObject();
            Regulatory.UsageButtons();
            cy.wait(5000);

            cy.url().should('include', '/#/account-features');
            Account.DocsKeep();
            Account.FullyPaidLendingClose();
            Account.UsageButtons();
            cy.wait(5000);

            cy.url().should('include', '/#/upload-documents');
            DocUpload.DrivingLicenses();
            cy.wait(2000);
            DocUpload.UsageButtons();
            cy.wait(5000);

            cy.url().should('include', '/#/disclosures-signatures');
            DAS.AccountAgreementYes();
            DAS.CashAndMarginDomesticYes();
            DAS.LoanAgreementYes();
            DAS.DigitalSignature();
            cy.get('#react-sketch-canvas__canvas-background').should('be.visible');
            DAS.CaptureSignature();
            // DAS.Save()
            // DAS.SaveAndContinue()
        });
    });

    // Test for Joint Account
    // it('should create a Joint Account', function() {
    //     cy.fixture('Accounts/Personal/accountData').then((data) => {
    //         const jointAccountData = data.find(d => d.accountType === 'Joint');
    //         if (!jointAccountData) {
    //             throw new Error('No data found for Joint account type');
    //         }
    //         Authorization.login(jointAccountData.username, jointAccountData.password);
    //         IndividualAccountRequest.CreateNewAccount();
    //         IndividualAccountRequest.AccountSelection();
    //         IndividualAccountRequest.Next();

    //         if (jointAccountData.subtype) {
    //             PersonalAccount.createJointAccount(jointAccountData.subtype);
    //         } else {
    //             throw new Error('Subtype is required for Joint accounts.');
    //         }

    //         const randomData = generatePersonalInfoData();
    //         cy.writeToFixture('PersonInfoData', randomData);
    //         IndividualAccountRequest.fillPersonalInfo(
    //             randomData.fName, randomData.mName, randomData.lName, randomData.dob,
    //             randomData.nOfDependents, randomData.primaryTelephone, randomData.workTelephone,
    //             randomData.socialSecNumber, randomData.IdNumber
    //         );
    //         IndividualAccountRequest.fillPhysicalAddress();
    //         IndividualAccountRequest.MailingAddress();
    //         IndividualAccountRequest.TrustedContacts();
    //         IndividualAccountRequest.UsageButtons();
    //         cy.wait(5000);

    //         cy.url().should('include', '/#/employment-info');
    //         EmploymentData.filledEmployed();
    //         EmploymentData.UsageButtons();
    //         Investor.fillInvestmentPRofile();
    //         Investor.fillFinancialSuitability();
    //         Investor.fillPriorInvestmentExperience();
    //         Investor.fillACHRelationship();
    //         Investor.updateOptions();
    //         Investor.UsageButtons();
    //         cy.wait(5000);

    //         cy.url().should('include', '/#/regulatory-items');
    //         Regulatory.fillSeniorExecutiveYes();
    //         Regulatory.FINRAregisteredYes();
    //         Regulatory.fillPoliticalFigureSPFYes();
    //         Regulatory.fillTitle31Yes();
    //         Regulatory.fillUnitedStatedFederalREgulationsYes();
    //         Regulatory.fillSEC15c3Yes();
    //         Regulatory.GrantedTradingAuthorityYes();
    //         Regulatory.InvestmentsInstitutionalYes();
    //         Regulatory.PublicCorporationYes();
    //         Regulatory.ControlOfBrokerYes();
    //         Regulatory.fillInfoDetails();
    //         Regulatory.fillFurtherInfo();
    //         Regulatory.IObject();
    //         Regulatory.UsageButtons();
    //         cy.wait(5000);

    //         cy.url().should('include', '/#/account-features');
    //         Account.DocsKeep();
    //         Account.FullyPaidLendingClose();
    //         Account.UsageButtons();
    //         cy.wait(5000);

    //         cy.url().should('include', '/#/upload-documents');
    //         DocUpload.DrivingLicenses();
    //         cy.wait(2000);
    //         DocUpload.UsageButtons();
    //         cy.wait(5000);

    //         cy.url().should('include', '/#/disclosures-signatures');
    //         DAS.AccountAgreementYes();
    //         DAS.CashAndMarginDomesticYes();
    //         DAS.LoanAgreementYes();
    //         DAS.DigitalSignature();
    //         cy.get('#react-sketch-canvas__canvas-background').should('be.visible');
    //         DAS.CaptureSignature();
    //         // DAS.Save()
    //         // DAS.SaveAndContinue()
    //     });
    // });
});
