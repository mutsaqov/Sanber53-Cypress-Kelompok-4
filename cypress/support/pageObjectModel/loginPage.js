class loginPage{
    visit() {
        cy.visit('/customer/account/login/')
    }

    fillLoginFormUsername(email){
        cy.get('input[id="email"]').type(email)

    }

    fillLoginFormPassword(password){
        cy.get('input[id="pass"]').type(password)
    }

    submitLoginForm(){
        cy.get('button[type="submit"]').eq(1).click()
    }

    onclickForgotPassword(){
        cy.contains('Forgot Your Password?').click()
        cy.url().should('include','/customer/account/forgotpassword/')
    }

    onClickCreateAccount(){
        cy.contains('Create an Account').click()
        cy.url().should('include', '/customer/account/create/')
    }

    verifySuccessAccessMyAccountPage(){
        cy.url().should('include', '/customer/account/')
        cy.get('.page-title-wrapper .page-title .base')
        .should('be.visible')
        .and('have.text', 'My Account')
    }

    verifyToasterMessageWhenFieldEmpty(){
        cy.get('.page.messages').should('be.visible').within(() => {
            cy.contains('A login and a password are required.').should('be.visible')
        })
    }

    
    getEmptyEmailErrorMessage(){
        return cy.get('#email-error-id')

    }
    getEmptyPasswordErrorMessage(){
        return cy.get('#pass-error-id')
    }
    

    getInvalidAccountErrorMessage(){
        cy.get('a.page.messages .messages a.message-error.error.message')
        .should('be.visible')
        .and('have.text', 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')
    }

}

export default loginPage

