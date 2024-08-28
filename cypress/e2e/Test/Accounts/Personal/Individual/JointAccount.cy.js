
import { PersonalAccountCreation } from "../../../../utils/AccountSetup/Personal/PersonalAccounts";

import { AuthPage } from "../../../../utils/AuthPage";
import { PersonalInformation } from "../../../../Pages/Accounts/Personal/Joint/JointTennants/PersonalInfo";
import { generatePersonalInfoData } from "../../../../utils/dataGenerator";
import { EmploymentInformationChoose } from "../../../../Pages/Accounts/Personal/Joint/JointTennants/EmploymentInfo";
import { InvestorProfile } from '../../../../Pages/Accounts/Personal/Joint/JointTennants/InvestorProfile';
import { RegulatoryItems } from '../../../../Pages/Accounts/Personal/Joint/JointTennants/RegulatoryItems';
import { Documents } from '../../../../Pages/Accounts/Personal/Joint/JointTennants/DocumentUpload';
import { AccountFeatures } from "../../../../Pages/Accounts/Personal/Joint/JointTennants/AccountFeatures";
import { DisclosureAndSignatures } from "../../../../Pages/Accounts/Personal/Joint/JointTennants/DisclosureSignatures";
import { CancelViewApp } from "../../../../utils/CancelViewApp";

const JointAccountRequest = new PersonalInformation();
const Authorization = new AuthPage();
const EmploymentData = new EmploymentInformationChoose();
const Investor = new InvestorProfile();
const Regulatory = new RegulatoryItems();
const DocUpload = new Documents();
const Account = new AccountFeatures();
const DAS = new DisclosureAndSignatures();
const PersonalAccount = new PersonalAccountCreation();
const CancelViewAccountApplication=new CancelViewApp()

describe("Account Creation Tests", () => {

    // before(() => {
    //     cy.fixture('Accounts/Personal/accountData').as('accountData');
    // });

    beforeEach(() => {
        Cypress.on('uncaught:exception', (err) => {
            console.error('Uncaught exception:', err);
            return false;
        });
        cy.visit("https://ola-staging.atlascleartrading.com/");
    });

   
    it('should create a Joint Account', function() {
        cy.fixture('Accounts/Personal/accountData').then((data) => {
            const jointAccountData = data.find(d => d.accountType === 'Joint');
            if (!jointAccountData) {
                throw new Error('No data found for Joint account type');
            }
            Authorization.login(jointAccountData.username, jointAccountData.password);
            console.log('Subtype:', jointAccountData.subtype);
            // IndividualAccountRequest.CreateNewAccount();
            // IndividualAccountRequest.AccountSelection();
            // IndividualAccountRequest.Next();
            PersonalAccount.createJointAccount()
    

            if (jointAccountData.subtype) {
                PersonalAccount.createJointAccount(jointAccountData.subtype);
            } else {
                throw new Error('Subtype is required for Joint accounts.');
            }

            const randomData = generatePersonalInfoData();
            cy.writeToFixture('PersonInfoData', randomData);
            JointAccountRequest.fillPersonalInfo(
                randomData.fName, randomData.mName, randomData.lName, randomData.dob,
                randomData.nOfDependents, randomData.primaryTelephone, randomData.workTelephone,
                randomData.socialSecNumber, randomData.IdNumber
            );
            JointAccountRequest.fillPhysicalAddress();
            JointAccountRequest.MailingAddress();
            JointAccountRequest.TrustedContacts();
            JointAccountRequest.UsageButtons();
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
});
