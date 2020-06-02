class Campaigns
{
   getCreateCampaignButton()
     {
      return cy.get('[href="#/create_campaign"]')
     }
  
   selectCampaign()
   {
    return cy.get('.sc-cvbbAY')
   }

}

export default Campaigns;