const AccountSelection=require("../../Locators/Account/CreateAccounts/AccountCreation.json")

/// Personal Individual Account 
export class PersonalIndividual{
    CreateNewAccount(){
        cy.xpath(AccountSelection.Personal.CreateNewAccount).click()
        cy.wait(200)
    }
    PersonalAccount(){
        cy.xpath(AccountSelection.Personal.Personal).click()
        cy.wait(100)

    }
    AccountSelection(){
        cy.xpath(AccountSelection.Personal.PersonalAccountType).select('Individual')
        cy.wait(100)
    }
    Next(){
        cy.xpath(AccountSelection.Personal.Next).click()
        cy.wait(100)
    }

}

///  Personal Joint Account Type: Rights of Survivorship
export class PersonalJointOne{
    CreateNewAccount(){
        cy.xpath(AccountSelection.Personal.CreateNewAccount).click()
        cy.wait(200)
    }
    PersonalAccount(){
        cy.xpath(AccountSelection.Personal.Personal).click()
        cy.wait(100)

    }
    AccountSelection(){
        cy.xpath(AccountSelection.Personal.PersonalAccountType).select('Joint')
        cy.wait(200)
    }
    AccountSubtypeOne(){
        cy.xpath(AccountSelection.Personal.JointAccountType).select('Rights of Survivorship')
        cy.wait(200)

    }
    Next(){
        cy.xpath(AccountSelection.Personal.Next).click()
        cy.wait(200)
    }

}

///  Personal Joint Account Type: Joint Tenants in Common
export class PersonalJointTwo{
    CreateNewAccount(){
        cy.xpath(AccountSelection.Personal.CreateNewAccount).click()
        cy.wait(200)
    }
    PersonalAccount(){
        cy.xpath(AccountSelection.Personal.Personal).click()
        cy.wait(100)

    }
    AccountSelection(){
        cy.xpath(AccountSelection.Personal.PersonalAccountType).select('Joint')
        cy.wait(200)
    }
    AccountSubtypeOne(){
        cy.xpath(AccountSelection.Personal.JointAccountType).select('Joint Tenants in Common')
        cy.wait(200)

    }
    Next(){
        cy.xpath(AccountSelection.Personal.Next).click()
        cy.wait(200)
    }

}
// Entity Account : Corporation
export class EntityCorporation{
    CreateNewAccount(){
        cy.xpath(AccountSelection.Entity.CreateNewAccount).click()
        cy.wait(200)
    }
    EntityAccount(){
        cy.xpath(AccountSelection.Entity.Entity).click()
        cy.wait(100)
    }
    AccountSelection(){
        cy.xpath(AccountSelection.Entity.EntityAccountType).select('Corporation')
        cy.wait(200)
    }
    Next(){
        cy.xpath(AccountSelection.Entity.Next).click()
        cy.wait(200)
    }

}

// Entity Account: LLC
export class EntityLLC{
    CreateNewAccount(){
        cy.xpath(AccountSelection.Entity.CreateNewAccount).click()
        cy.wait(200)
    }
    EntityAccount(){
        cy.xpath(AccountSelection.Entity.Entity).click()
        cy.wait(100)
    }
    AccountSelection(){
        cy.xpath(AccountSelection.Entity.EntityAccountType).select('LLC')
        cy.wait(200)
    }
    Next(){
        cy.xpath(AccountSelection.Entity.Next).click()
        cy.wait(200)
    }

}
// Retirement Account Type :Traditional IRA
export class RetirementTraditionalIRA{
    CreateNewAccount(){
        cy.xpath(AccountSelection.Retirement.CreateNewAccount).click()
        cy.wait(200)
    }
    RetirementAccount(){
        cy.xpath(AccountSelection.Retirement.Retirement).click()
        cy.wait(100)
    }
    AccountSelection(){
        cy.xpath(AccountSelection.Retirement.RetirementAccountType).select('Traditional IRA')
        cy.wait(200)
    }
    Next(){
        cy.xpath(AccountSelection.Entity.Next).click()
        cy.wait(200)
    }

}
// Retirement Account Type :Roth IRA
export class RetirementRothIRA{
    CreateNewAccount(){
        cy.xpath(AccountSelection.Retirement.CreateNewAccount).click()
        cy.wait(200)
    }
    RetirementAccount(){
        cy.xpath(AccountSelection.Retirement.Retirement).click()
        cy.wait(100)
    }
    AccountSelection(){
        cy.xpath(AccountSelection.Retirement.RetirementAccountType).select('Roth IRA')
        cy.wait(200)
    }
    Next(){
        cy.xpath(AccountSelection.Entity.Next).click()
        cy.wait(200)
    }


}
// Retirement Account Type :Simple IRA Participant

export class RetirementSimpleIRAParticipant{
    CreateNewAccount(){
        cy.xpath(AccountSelection.Retirement.CreateNewAccount).click()
        cy.wait(200)
    }
    RetirementAccount(){
        cy.xpath(AccountSelection.Retirement.Retirement).click()
        cy.wait(100)
    }
    AccountSelection(){
        cy.xpath(AccountSelection.Retirement.RetirementAccountType).select('Simple IRA Participant')
        cy.wait(200)
    }
    Next(){
        cy.xpath(AccountSelection.Entity.Next).click()
        cy.wait(200)
    }

}

// Retirement Account Type :Beneficiary Roth IRA
export class RetirementBeneficiaryRothIRA{
    CreateNewAccount(){
        cy.xpath(AccountSelection.Retirement.CreateNewAccount).click()
        cy.wait(200)
    }
    RetirementAccount(){
        cy.xpath(AccountSelection.Retirement.Retirement).click()
        cy.wait(100)
    }
    AccountSelection(){
        cy.xpath(AccountSelection.Retirement.RetirementAccountType).select('Beneficiary Roth IRA')
        cy.wait(200)
    }
    Next(){
        cy.xpath(AccountSelection.Entity.Next).click()
        cy.wait(200)
    }
}

// Retirement Account Type :Beneficiary Traditional IRA
export class RetirementBeneficiaryTraditionalIRA{
    CreateNewAccount(){
        cy.xpath(AccountSelection.Retirement.CreateNewAccount).click()
        cy.wait(200)
    }
    RetirementAccount(){
        cy.xpath(AccountSelection.Retirement.Retirement).click()
        cy.wait(100)
    }
    AccountSelection(){
        cy.xpath(AccountSelection.Retirement.RetirementAccountType).select('Beneficiary Traditional IRA')
        cy.wait(200)
    }
    Next(){
        cy.xpath(AccountSelection.Entity.Next).click()
        cy.wait(200)
    }

}
// Retirement Account Type :Rollover IRA
export class RetirementRolloverIRA{
    CreateNewAccount(){
        cy.xpath(AccountSelection.Retirement.CreateNewAccount).click()
        cy.wait(200)
    }
    RetirementAccount(){
        cy.xpath(AccountSelection.Retirement.Retirement).click()
        cy.wait(100)
    }
    AccountSelection(){
        cy.xpath(AccountSelection.Retirement.RetirementAccountType).select('Rollover IRA')
        cy.wait(200)
    }
    Next(){
        cy.xpath(AccountSelection.Entity.Next).click()
        cy.wait(200)
    }

}

// Retirement Account Type :SEP IRA
export class RetirementSepIRA{
    CreateNewAccount(){
        cy.xpath(AccountSelection.Retirement.CreateNewAccount).click()
        cy.wait(200)
    }
    RetirementAccount(){
        cy.xpath(AccountSelection.Retirement.Retirement).click()
        cy.wait(100)
    }
    AccountSelection(){
        cy.xpath(AccountSelection.Retirement.RetirementAccountType).select('SEP IRA')
        cy.wait(200)
    }
    Next(){
        cy.xpath(AccountSelection.Entity.Next).click()
        cy.wait(200)
    }
}