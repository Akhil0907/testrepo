/// <reference types="Cypress" />
import Segment from '../../../pageObjects/segmentPage'
describe('Segmentpage smoke test case', () => {
    
    
    before(() => {   
       
       const username = Cypress.env('username')
       const password = Cypress.env('password')

       //clear the cookies before login
       cy.clearCookies()
       cy.getCookies().should('be.empty') 

       //login details
       cy.visit('/')
    
       cy.get('#user_email').type(username,{log:false})
       cy.get('#user_password').type(password,{log:false})
       cy.get('.signin-btn').should('be.enabled').click()

    })

    it('Verify Segment page is working fine ', () => {
     
       const segment = new Segment() 

       cy.contains('Intelligence').click();
       segment.segmentLink().should('be.visible').click()
       cy.url().should('include','/#/segments')
       
    })

})