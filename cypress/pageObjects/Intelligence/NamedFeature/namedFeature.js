class NamedFeature
{

  siteUrl()
  {
    return "https://qa.useriq.com/#/home"
  }
  
   namedFeatureLink()
   {
     return cy.get('[href="#/named_features"]')
   }

   featureNameInput()
   {
     
    return cy.get('#name')

   }

   featureSelectionDropdown()
   {
      
    return cy.get("body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div.MuiDialogContent-root > div > div:nth-child(2) > div > div > div > div")

   }

   featureUrlInput()
   {

    return cy.get('#url')

   }

  saveNameFeatureButton()
  {

   return cy.get('.MuiDialogActions-root > .MuiGrid-container > :nth-child(2) > .MuiButtonBase-root')
  }

   
}
export default NamedFeature;