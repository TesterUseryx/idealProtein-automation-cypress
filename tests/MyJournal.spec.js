/// <reference types="cypress" />
import testFilter from '../helpers/testFilters.js'


const StringGenerator = require('../helpers/StringGenerator')
const HomePage = require('../pages/HomePage')
const MyJournalPage = require('../pages/MyJournalPage')

testFilter(['smoke','MyJournal'], () => {
    describe('SMOKE MyJournal tests', () => {
            const homePage = new HomePage()
            const myJournalPage = new MyJournalPage()
            const randomString =  StringGenerator.randomName()
            const randomNumber =  StringGenerator.randomName(false, 1)

            beforeEach(() => {
                cy.loginUserPass(Cypress.env('user'), Cypress.env('pass'))
            })
            
            it('IDEAL-7 User should be able to log Breakfast meal', () => {
                homePage.clickOnMyJournal()
                myJournalPage.verifyPageElements()
                myJournalPage.clickOnAddMeals()
                myJournalPage.searchAndSelectFood("Beef Filet")
                myJournalPage.addMeal("breakfast")
                myJournalPage.logMealAndVerifySuccessMessage()
                myJournalPage.verifyTheMealIsAdded("Beef Filet")
            }) 

            it('IDEAL-8 User should be able to see supplements details', () => {
                homePage.clickOnMyJournal()
                myJournalPage.navigateToSupplementsSection()
                myJournalPage.verifySupplementsSection()
            })

            it('IDEAL-9 User should be able to see water details', () => {
                homePage.clickOnMyJournal()
                myJournalPage.navigateToWaterSection()
                myJournalPage.clickOnAddWater()
                myJournalPage.logWater(randomNumber, false, '1')
                myJournalPage.verifyTheWaterIsAdded(randomNumber, false)
            }) 

            it('IDEAL-14 User should be able to add favorite item', () => {
                homePage.clickOnMyJournal()
                myJournalPage.clickOnAddMeals()
                myJournalPage.searchAndSelectFood("Beef Filet")
                myJournalPage.clickOnHartIcon()
                myJournalPage.navigateToFavourites()
                myJournalPage.verifyFavouritesFoods("Beef Filet", 1)
                myJournalPage.clickOnHartIcon(true)
            })

            it('IDEAL-15 User should be able to add favorite meal', () => {
                homePage.clickOnMyJournal()
                myJournalPage.clickOnAddMeals()
                myJournalPage.searchAndSelectFood("Beef Filet")
                myJournalPage.addMeal("lunch", false, "1")
                myJournalPage.saveFullMeal(randomString)
                myJournalPage.clickOnAddMeals()
                myJournalPage.clickOnFullMeal()
                myJournalPage.verifyFavouritesFoods(randomString, 1)
            }) 

            it('IDEAL-16 User should be able to add recipe', () => {
                homePage.clickOnMyJournal()
                myJournalPage.clickOnAddMeals()
                myJournalPage.addNewRecipe(randomString, 1, "Beef Filet")
                myJournalPage.verifyAndLogRecipe(randomString, "dinner")
                myJournalPage.logMealAndVerifySuccessMessage()
                myJournalPage.verifyTheMealIsAdded("Beef Filet")
            })

            it('IDEAL-57 User should be able to log Lunch meal', () => {
                homePage.clickOnMyJournal()
                myJournalPage.clickOnAddMeals()
                myJournalPage.searchAndSelectFood("Beef Filet")
                myJournalPage.addMeal("lunch")
                myJournalPage.logMealAndVerifySuccessMessage()
                myJournalPage.verifyTheMealIsAdded("Beef Filet")
            })

            it('IDEAL-59 User should be able to log Dinner meal', () => {
                homePage.clickOnMyJournal()
                myJournalPage.clickOnAddMeals()
                myJournalPage.searchAndSelectFood("Beef Filet")
                myJournalPage.addMeal("dinner")
                myJournalPage.logMealAndVerifySuccessMessage()
                myJournalPage.verifyTheMealIsAdded("Beef Filet")
            })

            it('IDEAL-58 User should be able to log Snack meal', () => {
                homePage.clickOnMyJournal()
                myJournalPage.clickOnAddMeals()
                myJournalPage.searchAndSelectFood("Beef Filet")
                myJournalPage.addMeal("snack")
                myJournalPage.logMealAndVerifySuccessMessage()
                myJournalPage.verifyTheMealIsAdded("Beef Filet")
            })

            it('IDEAL-20 User should be able to add water', () => {
                homePage.clickOnMyJournal()
                myJournalPage.navigateToWaterSection()
                myJournalPage.clickOnAddWater()
                myJournalPage.logWater(randomNumber)
                myJournalPage.verifyTheWaterIsAdded(randomNumber)
            })

            /*it('IDEAL-60 User can remove a logged meal', () => {
                ...test covered in each of the above tests
            })
            
            it('IDEAL-13 User should be able to search for desired item', () => {
                ...test covered in each of the above tests
            })*/
            
    })
})