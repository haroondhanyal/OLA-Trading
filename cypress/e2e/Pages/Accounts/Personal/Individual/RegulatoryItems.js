const RegItems=require('../../../../Locators/Account/Personal/Individual/RegulatoryItems.json')
const Buttons=require('../../../../Locators/Account/Personal/Individual/Buttons.json')
export class RegulatoryItems{
    fillSeniorExecutiveYes(){
        //cy.get(RegItems.RegulatoryItems.Option1Yes).click({force:true})
        cy.get(':nth-child(3) > :nth-child(2) > .form-check-input').click({force:true})
        cy.wait(100)
        cy.get(':nth-child(4) > .row > .col-lg-4 > .input_wrapper > .input_area > .inputForm').type('MH Traders') .should('be.visible')
        //cy.xpath(RegItems.RegulatoryItems.TickerSymbol).type('MH Traders')
        cy.wait(100)
    }
    SeniorExecutiveNo(){
        cy.get(RegItems.RegulatoryItems.Option2No).click()
    }
    // FINRAregisteredYes(){
    //     cy.get
    // }
    FINRAregisteredNO(){}
    fillPoliticalFigureSPFYes(){}
    PoliticalFigureSPFNo(){}
    fillTitle31Yes(){}
    Title31No(){
    }
    fillUnitedStatedFederalREgulationsYes(){

    }
    UnitedStatedFederalREgulationsNo(){

    }
    fillSEC15c3Yes(){}
    SEC15c3NO(){}
    GrantedTradingAuthorityYes(){}
    GrantedTradingAuthorityNo(){}
    InvestmentsInstitutionalYes(){}
    InvestmentsInstitutionalNo(){}
    PublicCorporationYes(){}
    PublicCorporationNo(){}
    ControlOfBrokerYes(){}
    ControlOfBrokerYes(){}
    fillInfoDetails(){}
    fillFurtherInfo(){}
    IObject(){}
    IDontObject(){}
    UsageButtons(){
        cy.xpath(Buttons.UsageButtons.SaveAndContinue).click()
        cy.wait(200)
    }

    

}