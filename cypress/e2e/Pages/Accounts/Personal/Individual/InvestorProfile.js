const InvestmentData=require('../../../../Locators/Account/Personal/Individual/InvestorProfile.json')
const Buttons=require('../../../../Locators/Account/Personal/Individual/Buttons.json')

export class InvestorProfile{
    fillInvestmentPRofile(){
        cy.xpath(InvestmentData.InvestmentProfile.InvestmentObjective).select('3 - Growth & Income') .trigger('change');
        cy.xpath(InvestmentData.InvestmentProfile.InvestmentExperience).select('Limited (1 to 2 years)') .trigger('change');
        cy.xpath(InvestmentData.InvestmentProfile.RiskTolerance).select('Medium') .trigger('change');
        cy.xpath(InvestmentData.InvestmentProfile.TimeHorizon).select('4 to 7 years') .trigger('change');
        cy.xpath(InvestmentData.InvestmentProfile.TaxBracket).select('24%') .trigger('change');
        cy.wait(100)    


    }
    fillFinancialSuitability(){
        cy.xpath(InvestmentData.FinancialSuitability.AnnualIncome).select('$200,001-300,000')
        cy.xpath(InvestmentData.FinancialSuitability.TotalNetWorth).select('$200,001-500,000')
        cy.xpath(InvestmentData.FinancialSuitability.LiquidNetWorth).select('$500,001-1,000,000')
        cy.xpath(InvestmentData.FinancialSuitability.LiquidityNeeds).select('Somewhat Important')
        cy.wait(100)

    }
    fillPriorInvestmentExperience(){
        cy.xpath(InvestmentData.PriorInvestmentExperience.Stock).select('10-14')
        cy.xpath(InvestmentData.PriorInvestmentExperience.OPtions).select('10-14')
        cy.xpath(InvestmentData.PriorInvestmentExperience.MutualFunds).select('15-19')
        cy.xpath(InvestmentData.PriorInvestmentExperience.MarginAccount).select('15-19')
        cy.xpath(InvestmentData.PriorInvestmentExperience.MunicipalBonds).select('25+')
        cy.xpath(InvestmentData.PriorInvestmentExperience.CommoditiesFeatures).select('20-24')
        cy.xpath(InvestmentData.PriorInvestmentExperience.GovernmentBond).select('20-24')
        cy.xpath(InvestmentData.PriorInvestmentExperience.CorporateBonds).select('25+')
        cy.xpath(InvestmentData.PriorInvestmentExperience.TaxShelters).select('1-4')
        cy.wait(100)

    }
    fillACHRelationship(){
        cy.xpath(InvestmentData.ACHRelationship.ACHRelationshipCheckBox).click({force:true})
        cy.wait(200)
        // cy.xpath(InvestmentData.ACHRelationship.AccountOwnerNAme).click()
        cy.xpath(InvestmentData.ACHRelationship.BankName).clear().type('Bank of America')
        cy.xpath(InvestmentData.ACHRelationship.BankAccountNumber).clear().type('0000000016')
        cy.xpath(InvestmentData.ACHRelationship.BankRoutingNumber).clear().type('122105278')
        cy.xpath(InvestmentData.ACHRelationship.BankAccountType).select('SAVINGS')
        cy.wait(100)

    }
    UsageButtons(){
        cy.xpath(Buttons.UsageButtons.SaveAndContinue).click()
        cy.wait(300)
    }

}