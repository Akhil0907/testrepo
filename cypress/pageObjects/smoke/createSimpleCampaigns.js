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
   
   simpleText()
   {
       return cy.xpath("//*[@id='toolbar']/div[2]/div/div/div[1]")

   }

   focussedText()
   {
        return cy.xpath("//*[@id='toolbar']/div[2]/div/div/div[2]/div/div")
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