class MyJournalPage {

    verifyPageElements(){
        cy.get('ip-journal-calendar')
        cy.get('.entry-container')
        cy.get('.mat-button-toggle-label-content').contains('Meals')
        cy.get('.mat-button-toggle-label-content').contains('Supplements')
        cy.get('.mat-button-toggle-label-content').contains('Water & Fluids')
    }

    selectDate(currentDate = true, day = null){
        if(!currentDate){
            cy.get('[aria-label="Open calendar"]').click()
            cy.get('.mat-calendar-body-cell-content').contains(day).click()
        }
    }

    clickOnAddMeals() {
        cy.wait(3000)
        cy.get('.mat-raised-button > .mat-button-wrapper').click()
    }

    clickOnAddWater() {
        cy.get('[class="mat-button-wrapper"]').contains(' Add Water & Fluids ').click()
    }

    navigateToSupplementsSection() {
        cy.get('.mat-button-toggle-label-content').contains('Supplements').click()
    }

    navigateToWaterSection() {
        cy.get('.mat-button-toggle-label-content').contains('Water & Fluids').click()
    }

    clickOnSearch(){
        cy.get('.mat-button-wrapper').contains('Search').click()
    }

    clickOnAddMood(){
        cy.get('[class="mood-icon mat-icon notranslate material-icons mat-icon-no-color"]').click()
    }

    clickOnRecipes(){
        cy.get('[class="mat-button-toggle-label-content"]').contains('Recipes').click()
    }

    addIngredient(){
        cy.get('[class="mat-button-wrapper"]').contains('Add Ingredient').click()
    }

    addNewRecipe(recipeName, servingsSize, searchProduct){
        this.clickOnRecipes()
        cy.get('[class="mat-button-wrapper"]').contains('Add new Recipe').click()
        cy.get('[name="name"]').clear().type(recipeName)
        cy.get('[name="serving"]').clear().type(servingsSize)
        this.addIngredient()
        this.searchAndSelectFoodReciepe(searchProduct)
        cy.get('.form-actions > .mat-primary > .mat-button-wrapper').click()
        cy.get('mat-cell').contains(searchProduct)
        cy.get('[type="submit"]').contains(' Save ').click()
    }

    verifyAndLogRecipe(recipeName, meal){
        this.searchAndSelectFood(recipeName)
        this.clickOnSearch()
        cy.contains(recipeName)
        this.addMeal(meal)
    }

    clickOnFullMeal(){
        cy.get('[class="mat-button-toggle-label-content"]').contains(' Full Meal ').click()
    }

    addMood(){
        cy.contains('radio_button_unchecked').should('be.visible').click({ multiple: true })
        cy.contains('sentiment_satisfied').click()
        cy.contains('Save').click()
    }


    clickOnHartIcon(unFavorite = false){
        cy.get('mat-icon').contains(' favorite_border ').click()
        cy.get('mat-icon').contains(' favorite ')
        if(!unFavorite){
            cy.get('mat-icon').contains(' favorite ').click()
        }
    }

    navigateToFavourites(){
        cy.get('[class="mat-button-toggle-label-content"]').contains('Favourites').click()
    }

    verifyFavouritesFoods(searchProduct, itemCount){
        this.searchAndSelectFood(searchProduct)
        cy.get('[class="mat-paginator-range-label"]').contains('1 - ' + itemCount + ' Of ' +  itemCount)
        //cy.get('mat-icon').contains(' favorite ').click()
    }

    verifySupplementsSection(){
        cy.get('ip-journal-calendar')
        cy.get('.entry-container')
    }

    searchAndSelectFood(searchProduct){
        cy.wait(3000)
        cy.get('[formcontrolname="food"]').type(searchProduct)
        const searchInput = cy.get('[formcontrolname="food"]')
        searchInput.clear().type(searchProduct)
        this.clickOnSearch()
        cy.get('.macro-info > p').contains(searchProduct).click()
        return this
    }

    searchAndSelectFoodReciepe(searchProduct){
        cy.wait(3000)
        cy.get('[formcontrolname="food"]').eq(1).type(searchProduct + '{enter}')
        cy.get('.macro-info > p').contains(searchProduct).click()
        return this
    }

    addMeal(meal, currentDate = true, day = null){
        this.selectDate(currentDate, day)
        cy.get('[for="type"]').click()
        //cy.get('[class="ng-tns-c42-219 ng-star-inserted"]').contains('Dinner').click()
        cy.get('[value="' + meal + '"]').click()
    }

    logMealAndVerifySuccessMessage(){
        cy.get('[class="mat-button-wrapper"]').contains("Log Food").click()
        cy.get('.success').contains('Meal has been successfully logged.')
    }

    saveFullMeal(mealName){
        cy.get('[class="mat-button-wrapper"]').contains("Save Meal").click()
        cy.get('input:focus').clear().type(mealName)
        cy.get('[type="submit"]').contains(' Save ').click()
        cy.get('.success').contains('Meal has been successfully logged.')
    }

    logWater(waterAmount,  currentDate = true, day = null, defaultUnit = true,unit = null){
        this.selectDate(currentDate, day)
        cy.get('[name="quantity"]').clear().type(waterAmount)
        //cy.get('[class="ng-tns-c42-219 ng-star-inserted"]').contains('Dinner').click()
        if(!defaultUnit){
            cy.get('[role="listbox"]').click()
            cy.contains(unit).click()
        }
        cy.get('[class="mat-focus-indicator mat-raised-button mat-button-base mat-primary"]').click()
        cy.get('.success > :nth-child(1) > span').contains('Successfully updated water consumption entry.')
    }

    verifyTheMealIsAdded(food, currentDate = true){
        cy.wait(1500)
        if(currentDate){
            cy.get('[class="week-date enabled selected consumed ng-star-inserted"]').click()
        }else{
            cy.get('[class="week-date enabled consumed ng-star-inserted"]').click()
        }
        
        cy.get('[class="name"]').contains(food).click()
        cy.get('[class="mat-button-wrapper"]').contains("Delete Entry").click()
        cy.wait(1500)
        cy.get('.mat-dialog-actions > .mat-primary').contains("Delete").click()
        cy.get('.info > :nth-child(1) > span').contains("Your meals have been updated.")
    }

    verifyTheWaterIsAdded(loggedWater, currentDate = true){
        cy.wait(1500)
        if(currentDate){
            cy.get('[class="week-date enabled selected consumed ng-star-inserted"]').click()
        }else{
            cy.get('[class="week-date enabled consumed ng-star-inserted"]').click()
        }
        
        cy.contains(loggedWater + '/')
    }
  }

  module.exports = MyJournalPage
  