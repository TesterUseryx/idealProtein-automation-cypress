/// <reference types="Cypress" />

const testFilter = (definedTags, runTest) => {
    if (Cypress.env('TEST_TAGS')) {
      const tags = Cypress.env('TEST_TAGS').split(',')
      const tagsRemove = Cypress.env('TEST_TAGS_REMOVE')
      var isFound = definedTags.some(definedTag => tags.includes(definedTag))
  
      if(tagsRemove != undefined){
        var tagsRemoveSplit = tagsRemove.split(',')
        var isRemoveFound = definedTags.some(definedTag => tagsRemoveSplit.includes(definedTag))
        if(isRemoveFound)
          isFound = false
        }
  
      if (isFound) {
        runTest()
      }
    }
}
    
export default testFilter