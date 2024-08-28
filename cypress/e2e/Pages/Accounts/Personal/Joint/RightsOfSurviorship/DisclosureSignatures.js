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
    // DigitalSignature() {
    //    // cy.get('#react-sketch-canvas__canvas-background')
    //    cy.xpath("//*[name()='rect' and @id='react-sketch-canvas__canvas-background']")
    //     .trigger('mousedown', { button: 2, which: 3 })
    //   //cy.get('#react-sketch-canvas__canvas-background')
    //   cy.xpath("//*[name()='rect' and @id='react-sketch-canvas__canvas-background']")
    //     .trigger('mousemove', { clientX: 2, clientY: 5 }) 
    //     .trigger('mousemove', { clientX: 8, clientY: 4 }) 
    //   //cy.get('#react-sketch-canvas__canvas-background')
    //   cy.xpath("//*[name()='rect' and @id='react-sketch-canvas__canvas-background']")
    //     .trigger('mouseup', { button: 2, which: 3 })
    // }
    DigitalSignature(){
        cy.get("#react-sketch-canvas__canvas-background")
        .trigger("mousedown", { button: 0, which: 1, clientX: 100, clientY: 100 })
        .then(() => { console.log('Mouse Down at (100, 100)'); })
        .trigger("mousemove", { clientX: 150, clientY: 150 })
        .then(() => { console.log('Mouse Move to (150, 150)'); })
        .trigger("mousemove", { clientX: 200, clientY: 200 })
        .then(() => { console.log('Mouse Move to (200, 200)'); })
        .trigger("mouseup", { button: 0, which: 1, clientX: 200, clientY: 200 })
        .then(() => { console.log('Mouse Up at (200, 200)'); });
          
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


