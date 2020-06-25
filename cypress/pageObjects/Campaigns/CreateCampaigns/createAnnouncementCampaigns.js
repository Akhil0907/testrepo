class SimpleCampaigns
{
   getCreateCampaignButton()
     {
      return cy.get('[href="#/create_campaign"]')
     }
  
   selectCampaign()
   {
    return cy.get('.sc-cvbbAY')
   }
   
   //to use the cypress xpath synctax just type npm install -D cypress-xpath
   // in cypress home directory of your project
  

export default SimpleCampaigns;