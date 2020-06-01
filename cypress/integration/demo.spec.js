describe('login details', () => {
    
    

    it('login function ', () => {
     
       const username = Cypress.env('username')
       const password = Cypress.env('password')

        cy.get('#user_email').type(username,{log:false})
        cy.get('#user_password').type(password,{log:false})
        cy.get('.signin-btn').should('be.enabled').click()
       
    })

})