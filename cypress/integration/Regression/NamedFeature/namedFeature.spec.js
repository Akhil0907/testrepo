/// <reference types="Cypress" />
import NamedFeature from '../../../pageObjects/regression/namedFeature'
import WebuiNavLink from '../../../pageObjects/navUrl/navLinks'


describe('Verify the useriq web dashbord is working fine', () => {
    
    
    before(() => {   
       
       const username = Cypress.env('uname1')
       const password = Cypress.env('password1')

       //clear the cookies before login
       cy.clearCookies()
       cy.getCookies().should('be.empty') 

       //login details
       cy.visit('/')
    
       cy.get('#user_email').type(username,{log:false})
       cy.get('#user_password').type(password,{log:false})
       cy.get('.signin-btn').should('be.enabled').click()

    })

    it('Verify Named Feature creation is working fine ', () => {
     
        const namedFeature = new NamedFeature
        const webuiNavLink = new WebuiNavLink

        cy.url().should('include', '/#/home') 
        //navigating to creaating named feature 
        cy.contains("Intelligence").click({force:true});
        namedFeature.namedFeatureLink().click() 
        
        cy.contains('Create a Named Feature').should('be.visible').click()

        //Selecting name for named feature
        namedFeature.featureNameInput().click()

        function randomString(length) {
          var result           = '';
          var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
          var charactersLength = characters.length;
           for ( var i = 0; i < length; i++ ) {
             result += characters.charAt(Math.floor(Math.random() * charactersLength));
              }
         var result2 = 'akhil_namedfeature' + result
         return result2;
          }

       var namedFeatures = randomString(5)
       namedFeature.featureNameInput().type(namedFeatures)

       //Select a value from drop down
       namedFeature.featureSelectionDropdown().click()
       cy.contains('pageview').trigger('mousemove').click()
       //Save the named feature
       namedFeature.featureUrlInput().type(webuiNavLink.namedFeatureUrl())
       namedFeature.saveNameFeatureButton().click();
    })
       
    })

