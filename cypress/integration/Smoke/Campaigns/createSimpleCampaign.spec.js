/// <reference types="Cypress" />

import SimpleCampaigns from '../../../pageObjects/Campaigns/CreateCampaigns/createAnnouncementCampaigns'
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

    it('Smoke:-Create a simple campaign ', () => {
     
        const simpleCampaigns = new SimpleCampaigns()
        
        //clearing old campaign popups
        cy.contains('Ok').click()

        cy.contains('Campaigns').click({force:true})

        simpleCampaigns.getCreateCampaignButton().should('be.visible').click({force:true})
       
    })
       
    })

