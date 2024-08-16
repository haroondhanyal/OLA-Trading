const CancelView=require("../Locators/Account/CancelViewApplication/CancelViewApplication.json")

export class CancelViewApp {

     selectOption() {
        cy.xpath(CancelView.CancelViewApplication.SelectOption).click();
        cy.wait(100);
    }
      ViewApplication() {
        this.selectOption();
        cy.xpath(CancelView.CancelViewApplication.ViewApplication).click();
        cy.wait(300);
    }
     CancelApplicationYes() {
        this.selectOption();
        cy.xpath(CancelView.CancelViewApplication.CancelApplication).click();
        cy.wait(100);
        cy.xpath(CancelView.CancelViewApplication.CancelApplicationYes).click();
        cy.wait(100);
    }
     ClosedCancelApplication() {
        this.selectOption();
        cy.xpath(CancelView.CancelViewApplication.CancelApplication).click();
        cy.wait(100);
        cy.xpath(CancelView.CancelViewApplication.CloseApplicationClose).click();
        cy.wait(100);
    }
    // // Method to check if the incomplete account alert is visible
    // checkForIncompleteAccountAlert() {
    //     return cy.xpath('//div[@role="alert"]').then($alert => {
    //         if ($alert.is(':visible')) {
    //             cy.log('Custom Alert: Incomplete account detected. Handling the incomplete account...');
    //             return true;
    //         } else {
    //             cy.log('No incomplete account alert detected.');
    //             return false;
    //         }
    //     });
    // }
    checkForIncompleteAccountAlert() {
        // Wait for the alert to be present and visible
        return cy.xpath('//div[@role="alert"]', { timeout: 10000 }).should('be.visible').then($alert => {
            return $alert.length > 0; 
        });
    }
}
