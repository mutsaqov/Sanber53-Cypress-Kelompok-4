import Navigation from '../support/pageObject/Navigation'
describe('Login Functionality', () => {
    beforeEach(() => {
        cy.visit('')
        cy.contains('Sign In').click();
        cy.clearAllSessionStorage
    });
    
    it('Verify Success login - email & password valid', () => {
        cy.login('jacob@gmail.com','Jacob123');
        cy.wait(500);
        cy.get('.base').should('be.visible');
        cy.wait(500)
    });
    it('Verify failed login - email valid - password invalid', () => {
        cy.login('jacob@gmail.com','jacob221');
        cy.get('.message-error > div').should('be.visible');
        cy.wait(500)
    });
    it('Verify failed login - email invalid', () => {
        cy.login('tes@gail.com','Jacob123');
        cy.get('.message-error > div').should('be.visible');
        cy.wait(500)
    });
    it('Verify Success login and go to account detail', () => {
        cy.login('jacob@gmail.com','Jacob123');
        Navigation.visitAccount();
        cy.get('.base').contains("My Account").should('be.visible');
        cy.wait(500);
        cy.get('.current > strong').contains('My Account').click();
        cy.get('.block-dashboard-info > .block-title > strong').contains('Account Information').should('be.visible');
        cy.wait(500)
    }); 
   
});