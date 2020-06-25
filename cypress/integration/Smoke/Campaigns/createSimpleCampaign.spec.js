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
        
        //selecting simple text only Announcement campaigns
        simpleCampaigns.selectCampaign().eq(0).click()

        simpleCampaigns.simpleText().should('be.visible').click()
        
        //content tab


        simpleCampaigns.selectCampaignItems().eq(0).should('not.be.disabled').click().type('simpleCampaign12')

        simpleCampaigns.selectCampaignItems().eq(1).click()

        cy.contains('UserIQ Default').should('be.visible').click()

        simpleCampaigns.selectCampaignItems().eq(2).should('not.be.disabled').click().clear().type('Smoke testing ')

        //simpleCampaigns.getCampaignDescription().click({force:true}).clear().type('This is description area')

        //segment tab
        cy.contains('Segment').should('not.be.disabled').click()

        simpleCampaigns.selectSegment().should('not.be.hidden').click({multiple:true})
        
        //extra delay for respomse to load
        Cypress.config('responseTimeout',5000)

        cy.contains('Active Accounts').click()
        
        //review tab
        simpleCampaigns.reviewButton().should('be.visible').click()

        cy.contains('Save Campaign').should('be.visible').click()
       
    })
       
    })

