const RegItems=require('../../../../../Locators/Account/Personal/Individual/RegulatoryItems.json')
const Buttons=require('../../../../../Locators/Account/Personal/Individual/Buttons.json')
export class RegulatoryItems{
    fillSeniorExecutiveYes(){
        cy.get(RegItems.RegulatoryItems.Option1Yes).click({force:true})
        cy.xpath(RegItems.RegulatoryItems.TickerSymbol).type('MH Traders').should('be.visible')
        cy.wait(100)
    }
    SeniorExecutiveNo(){
        cy.get(RegItems.RegulatoryItems.Option1No).click()
    }
    FINRAregisteredYes(){
        cy.get(RegItems.RegulatoryItems.Option2Yes).click()
    }
    FINRAregisteredNO(){
        cy.get(RegItems.RegulatoryItems.Option2No).click()
    }
    fillPoliticalFigureSPFYes(){
        cy.get(RegItems.RegulatoryItems.Option3Yes).click()
        //cy.get(':nth-child(1) > .col-2 > :nth-child(2) > .form-check-input').click()
        //cy.xpath(RegItems.RegulatoryItems.PoliticalTitle).type('Sr Deputy Manager')
        cy.get(':nth-child(2) > :nth-child(1) > .input_wrapper > .input_area > .inputForm').type('Sr Deputy Manager')
        cy.xpath(RegItems.RegulatoryItems.OfficialMembers).type('7')
        cy.xpath(RegItems.RegulatoryItems.PoliticalOrganization).type('Miami National Enterprises')
    }
    PoliticalFigureSPFNo(){
        cy.get(RegItems.RegulatoryItems.Option3No).click()
    }
    fillTitle31Yes(){
        cy.get(RegItems.RegulatoryItems.Option4Yes).click()
        cy.xpath(RegItems.RegulatoryItems.NameOfForeignInstitution).type('DK Accademy of Albama')
    }
    Title31No(){
        cy.get(RegItems.RegulatoryItems.Option4No).click()
    }
    fillUnitedStatedFederalREgulationsYes(){
        cy.get(RegItems.RegulatoryItems.Option5Yes).click()
        cy.xpath(RegItems.RegulatoryItems.ProvideAgentName).type('Zack Crawly')

    }
    UnitedStatedFederalREgulationsNo(){
        cy.get(RegItems.RegulatoryItems.Option5No).click()

    }
    fillSEC15c3Yes(){
        cy.get(RegItems.RegulatoryItems.Option6Yes).click()
    }
    SEC15c3NO(){
        cy.get(RegItems.RegulatoryItems.Option6No).click()
    }
    GrantedTradingAuthorityYes(){
        cy.get(RegItems.RegulatoryItems.Option7Yes).click()
        cy.xpath(RegItems.RegulatoryItems.ProvideNameOfAgent).type('Agent Vinod')
    }
    GrantedTradingAuthorityNo(){
        cy.get(RegItems.RegulatoryItems.Option7No).click()
    }
    InvestmentsInstitutionalYes(){
        cy.get(RegItems.RegulatoryItems.Option8Yes).click()
    }
    InvestmentsInstitutionalNo(){
        cy.get(RegItems.RegulatoryItems.Option8No).click()
    }
    PublicCorporationYes(){
        cy.get(RegItems.RegulatoryItems.Option9Yes).click()
    }
    PublicCorporationNo(){
        cy.get(RegItems.RegulatoryItems.Option9No).click()
    }
    ControlOfBrokerYes(){
        cy.get(RegItems.RegulatoryItems.Option10Yes).click()
    }
    ControlOfBrokerNo(){
        cy.get(RegItems.RegulatoryItems.Option10No).click()
    }
    fillInfoDetails(){
        cy.xpath(RegItems.RegulatoryItems.Relationship).type('Colleuge')
        cy.xpath(RegItems.RegulatoryItems.PersonName).type('Lina Joseph')
        cy.xpath(RegItems.RegulatoryItems.FirmEmployer).type('AH Group')

    }
    fillFurtherInfo(){
        cy.xpath(RegItems.RegulatoryItems.CorporationName).type('Aethihad Group')
        cy.xpath(RegItems.RegulatoryItems.Address1).type('Evacue Trust Building')
        cy.xpath(RegItems.RegulatoryItems.Address2).type('2nd Floor Burj Tower')
        cy.xpath(RegItems.RegulatoryItems.City).type('Dunbery')
        cy.get(RegItems.RegulatoryItems.State).select('Florida')
        cy.xpath(RegItems.RegulatoryItems.ZipCode).type('34879')
    }
    IObject(){
        cy.get(RegItems.DirectCommunication.IObject).click()
    }
    IDontObject(){
        cy.get(RegItems.DirectCommunication.IDontObject).click()
    }
    UsageButtons(){
        cy.xpath(Buttons.UsageButtons.SaveAndContinue).click()
        cy.wait(200)
    }

}