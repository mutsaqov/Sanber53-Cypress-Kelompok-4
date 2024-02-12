import addressData from '../fixtures/addressData.json';
import addressData from '../fixtures/userData.json';

describe('Update Address', () => {
    beforeEach(() => {
        cy.visit('');
        cy.contains('Sign In').click();
        cy.login('jacob@gmail.com','Jacob123');
        cy.wait(500);
        cy,visit('/customer/address/edit');
    });

    it('Update Profile with Valid Address', () => {
        cy.get('#firstname').clear().should('have.value','')
        cy.get('#firstname').type(userData.validUser.firstName)
        cy.get('#lastname').clear().should('have.value','')
        cy.get('#lastname').type(userData.validUser.lastName)
        cy.get('#company').type(addressData.validAddress.company)
        cy.get('#telephone').type(addressData.validAddress.telephone)
        cy.get('#street_1').type(addressData.validAddress.street_1)
        cy.get('#city').type(addressData.validAddress.city)
        cy.get('#region').type(addressData.validAddress.region)
        cy.get('#zip').type(addressData.validAddress.zip)
        cy.get('#country').should('have.value','RU')
        cy.get('#country').select(addressData.validAddress.country)
        cy.wait(500)
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click();
        cy.wait(500)
        cy.get('.message-success > div').should('be.visible')
        cy.wait(500)
    })

});