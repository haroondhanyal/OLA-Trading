// utils/AccountSetup/BasePage.js
export class BasePage {
    waitForElement(selector, timeout = 5000) {
        cy.xpath(selector, { timeout }).should('be.visible');
    }

    clickElement(selector) {
        this.waitForElement(selector);
        cy.xpath(selector).click();
    }

    typeInField(selector, text) {
        this.waitForElement(selector);
        cy.xpath(selector).clear().type(text);
    }

    selectFromDropdown(selector, option) {
        this.waitForElement(selector);
        cy.xpath(selector).select(option);
    }
}
