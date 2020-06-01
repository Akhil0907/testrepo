class Campaigns
{
   getCreateCampaignButton()
     {
      return cy.get('[href="#/create_campaign"]')
     }
  
   //we can create as many page objects as we want inside one class
   //But they have to be accessed using Classname.methodName() in the test file.

}

export default Campaigns;