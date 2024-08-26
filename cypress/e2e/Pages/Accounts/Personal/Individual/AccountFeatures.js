
const AccFeature=require('../../../../Locators/Account/Personal/Individual/AccountFeatures.json')
const Buttons=require('../../../../Locators/Account/Personal/Individual/Buttons.json')
export class AccountFeatures{
    EDocYes(){
        cy.get(AccFeature.AccountFeatures.EDocumentsYes).click()
    }
    DocsKeep(){
        cy.get(AccFeature.AccountFeatures.EDocumentsNo).click()
        cy.xpath(AccFeature.AccountFeatures.KeepDocuments).click()

    }
    DocsChange(){
        cy.get(AccFeature.AccountFeatures.EDocumentsNo).click()
        cy.xpath(AccFeature.AccountFeatures.DocumentsChange).click()
    }
    MoneyMarketYes(){
        cy.get(AccFeature.AccountFeatures.MoneyMarketYes).click()
    }
    MoneyMarketNo(){
        cy.get(AccFeature.AccountFeatures.MoneyMarketNo).click()
    }
    MarginToAccountYes(){
        cy.get(AccFeature.AccountFeatures.MarginToAccountYes).click()
    }
    
    MarginToAccountNo(){
        cy.get(AccFeature.AccountFeatures.MarginToAccountNo).click()
    }
    ParticipatesYes(){
        cy.get(AccFeature.AccountFeatures.ParticipateYes).click()
    }
    WhatPaidSecurities(){
        cy.xpath(AccFeature.AccountFeatures.FullyPaidSecurities).click()
        // cy.xpath(AccFeature.AccountFeatures.WhatPaidSecurities).then(($el) => {
        //     $el.on('click', (event) => {
        //         event.preventDefault();
        //     });
        // }).click();
        cy.xpath("//a[normalize-space()='What is Fully Paid Securities Lending?']").then(($el) => {
            $el.on('click', (event) => {
                event.preventDefault();
            });
        }).click();
    }
    FullyPaidLendingClose(){
        cy.xpath(AccFeature.AccountFeatures.FullyPaidSecurities).click()
        cy.xpath(AccFeature.AccountFeatures.Close).click()
    }

    ParticipatesNo(){
        cy.get(AccFeature.AccountFeatures.ParticipateNo)
    }
    DivReinvestmentYes(){
        cy.get(AccFeature.AccountFeatures.DividendReinvestmentYes).click()
    }
    DivReinvestmentNo(){
        cy.get(AccFeature.AccountFeatures.DividendReinvestmentNo).click()
    }
    UsageButtons(){
        cy.xpath(Buttons.UsageButtons.SaveAndContinue).click()
        cy.wait(200)
    }
}
