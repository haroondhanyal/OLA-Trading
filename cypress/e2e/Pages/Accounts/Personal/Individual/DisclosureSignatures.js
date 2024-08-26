const DiscSignature=require('../../../../Locators/Account/Personal/Individual/DisclosureSignatures.json')
const Buttons=require('../../../../Locators/Account/Personal/Individual/Buttons.json')
export class DisclosureAndSignatures{
    setupStubs() {
        cy.window().then((win) => {
            // Stub only once to avoid multiple stubs
            if (!win.open.stubbed) {
                cy.stub(win, 'open').as('windowOpen');
                cy.stub(win, 'location').as('windowLocation');
                win.open.stubbed = true; // Mark as stubbed
            }
        });
    }
    AccountAgreementYes(){
        this.setupStubs();
        //cy.xpath(DiscSignature.DisclosureAndSignatures.AccountAgreement).click()
        cy.xpath(DiscSignature.DisclosureAndSignatures.AccountAgreement).then(($el) => {
            $el.on('click', (event) => {
                event.preventDefault();
            });
        }).click();
        cy.get(DiscSignature.DisclosureAndSignatures.AccountAgreementYes).click()
    }
    AccountAgreementNO(){
        cy.get(DiscSignature.DisclosureAndSignatures.AccountAgreementNO).click()
    }
    CashAndMarginDomesticYes(){
        this.setupStubs();
        //cy.xpath(DiscSignature.DisclosureAndSignatures.AccountAgreementCash).click()
        cy.xpath(DiscSignature.DisclosureAndSignatures.AccountAgreementCash).then(($el) => {
            $el.on('click', (event) => {
                event.preventDefault();
            });
        }).click();
        cy.get(DiscSignature.DisclosureAndSignatures.AccountAgreementCashAndMarginYes).click()
    }
    CashAndMarginDomesticNO(){
        cy.get(DiscSignature.DisclosureAndSignatures.AccountAgreementCashAndMarginNo).click()
    }
    LoanAgreementYes(){
        this.setupStubs();
        //cy.xpath(DiscSignature.DisclosureAndSignatures.LoanAgreement).click()
        cy.xpath(DiscSignature.DisclosureAndSignatures.LoanAgreement).then(($el) => {
            $el.on('click', (event) => {
                event.preventDefault();
            });
        }).click();
        cy.get(DiscSignature.DisclosureAndSignatures.LoanAgreementYes).click()
    }
    LoanAgreementNo(){
        cy.get(DiscSignature.DisclosureAndSignatures.LoanAgreementNo).click()
    }
    DigitalSignature(){
        // Draw "H"
        cy.xpath(DiscSignature.DisclosureAndSignatures.DigitalSignature)
        .trigger('mousedown', { clientX: 50, clientY: 50, force: true })
        .trigger('mousemove', { clientX: 50, clientY: 150, force: true })
        .trigger('mouseup', { force: true });

        cy.xpath(DiscSignature.DisclosureAndSignatures.DigitalSignature)
        .trigger('mousedown', { clientX: 100, clientY: 50, force: true })
        .trigger('mousemove', { clientX: 100, clientY: 150, force: true })
        .trigger('mouseup', { force: true });

        cy.xpath(DiscSignature.DisclosureAndSignatures.DigitalSignature)
        .trigger('mousedown', { clientX: 50, clientY: 100, force: true })
        .trigger('mousemove', { clientX: 100, clientY: 100, force: true })
        .trigger('mouseup', { force: true });

       
    }
    CaptureSignature(){
        cy.xpath(DiscSignature.DisclosureAndSignatures.CaptureSignature).click()
    }
    SaveAndContinue(){
        cy.xpath(Buttons.UsageButtons.SaveAndContinue).click()
        cy.wait(200)
    }
    Save(){
        cy.xpath(Buttons.UsageButtons.Save).click()
        cy.wait(200)

    }

}