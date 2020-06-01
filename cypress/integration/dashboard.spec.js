
/// <reference types="Cypress" />
import NamedFeature from '../pageObjects/NamedFeature'
import Campaigns from '../pageObjects/Campaigns'
describe('Verify the useriq web dashbord is working fine', () => {
    
    
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

    it('Verify Named Feature Navigation is wokring fine ', () => {
     
        const namedFeature = new NamedFeature
        cy.url().should('include', '/#/home') 
        //navigating to creaating named feature 
        cy.contains("Intelligence").click({force:true});
        namedFeature.namedFeatureLink().click() 
        
        //navigating back to home page
        cy.go('back');
       
    })


    it('Verify creating campaign Navigation is working fine', () => {
     
        const campaigns = new Campaigns

        cy.url().should('include', '/#/home') 
        cy.contains('Campaigns').click({force:true})
        campaigns.getCreateCampaignButton().should('be.visible').click()
        cy.url().should('include','#/create_campaign');
    
       
    })

  })