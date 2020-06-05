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
   simpleText()
   {
       return cy.xpath("//*[@id='toolbar']/div[2]/div/div/div[1]")

   }

   focussedText()
   {
        return cy.xpath("//*[@id='toolbar']/div[2]/div/div/div[2]/div/div")
   }
 
   focussedBullets()
   {

      return cy.xpath("//*[@id='toolbar']/div[2]/div/div/div[3]/div/div")
   }

   detailedBullets()
   {

      return cy.xpath("//*[@id='toolbar']/div[2]/div/div/div[4]/div/div")
   }
   
   detailedTwoBlock()

   {
      return cy.xpath("//*[@id='toolbar']/div[2]/div/div/div[5]/div/div")
      
   }

   detailedFourBlock()

   {
      return cy.xpath("//*[@id='toolbar']/div[2]/div/div/div[5]/div/div")
      
   }
   selectCampaignItems()
   {

    return cy.get('.MuiInputBase-input')
   }

   getCampaignDescription()
   {

    return cy.get('.redactor-in')
   }

   selectSegment()
   {

    return cy.xpath("//input[@placeholder='Select a Segment']")
   }

   reviewButton()

   {

    return cy.xpath("//button[@data-id='uiq-114']")
   }
}

export default SimpleCampaigns;