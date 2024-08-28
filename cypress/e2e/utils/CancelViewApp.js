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
    // handleIncompleteApplication() {
    //     cy.log('Performing actions to potentially trigger the alert');
    //     cy.wait(200)
    //     this.checkForIncompleteAccountAlert().then(isAlertVisible => {
    //       if (isAlertVisible) {
    //         cy.log('Custom Alert: Incomplete account detected. Handling the incomplete application...');
    //         this.CancelApplicationYes(); 
    //         cy.wait(2000);
    //       } else {
    //         cy.log('No incomplete account detected.');
    //       }
    //     });
    //   }
      checkForIncompleteAccountAlert() {
        cy.log('Checking for incomplete account alert...');
        // cy.get('.Toastify__toast-body > :nth-child(2)').shp
        
    }
}
