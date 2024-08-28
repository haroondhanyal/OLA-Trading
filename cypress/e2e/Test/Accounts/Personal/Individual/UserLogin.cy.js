
import { LogIN } from "../../../../Pages/UserInfo/Login";
import { Logout } from "../../../../Pages/UserInfo/Logout";
const newLogin= new LogIN()
const logOUT=new Logout()
describe('USerLogin ',()=>{
    let userData;
    before(() => {
        cy.fixture('auth/LoginUser').then((data) => {
            userData = data;
        });
    });   
    it('Login',()=>{
        cy.visit("https://ola-staging.atlascleartrading.com/")
        cy.wait(3000)

        userData.forEach(user => {
            newLogin.LoginPRocess(user.username, user.password)
            cy.url().should('include', '/dashboard'); 
 
            logOUT.LogoutProcess();
        });
    });
    }) 

