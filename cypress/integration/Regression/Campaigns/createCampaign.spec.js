/// <reference types="Cypress" />

import Campaigns from '../../../pageObjects/regression/createCampaigns'
describe('Verify the useriq web dashbord is working fine', () => {
    
    
    before(() => {   
       
       const username = Cypress.env('username')
       const password = Cypress.env('password')

       //clear the cookies before login
       cy.clearCookies()
       cy.getCookies().should('be.empty') 

       //visit the baseurl configured in settings
       cy.visit('/')
       
       //login with email and password stored in settings
       cy.get('#user_email').should('not.be.hidden').type(username,{log:false})

       cy.get('#user_password').should('not.be.hidden').type(password,{log:false})

       cy.get('.signin-btn').should('not.be.disabled').click()

    })

    it('Verify Named Feature creation is working fine ', () => {
     
       const campaigns = new Campaigns  

       cy.contains('Campaigns').should('be.visible').click({force:true})

       campaigns.getCreateCampaignButton().should('not.be.disabled').click({force: true})
       //Cypress.config(defaultCommandTimeout,5000);

       
    })
       
    })

