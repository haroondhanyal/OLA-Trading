import { BasePage } from '../BasePage';
const AccountSelection = require('../../../Locators/Account/CreateAccounts/AccountCreation.json');

export class PersonalAccountCreation extends BasePage {

    createIndividualAccount() {
        this.clickElement(AccountSelection.Personal.CreateNewAccount);
        this.clickElement(AccountSelection.Personal.Personal);
        this.selectFromDropdown(AccountSelection.Personal.PersonalAccountType, 'Individual');
        this.clickElement(AccountSelection.Personal.Next);
    }

    createJointAccount(subtype) {
        this.clickElement(AccountSelection.Personal.CreateNewAccount);
        this.clickElement(AccountSelection.Personal.Personal);
        this.selectFromDropdown(AccountSelection.Personal.PersonalAccountType, 'Joint');
        this.selectFromDropdown(AccountSelection.Personal.JointAccountType, subtype);
        this.clickElement(AccountSelection.Personal.Next);
    }
}
