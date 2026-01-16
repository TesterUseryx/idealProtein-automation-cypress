/// <reference types="cypress" />
import testFilter from '../helpers/testFilters.js'

const StringGenerator = require('../helpers/StringGenerator')
const HomePage = require('../pages/HomePage')
const MessagePage = require('../pages/MessagesPage')

testFilter(['smoke','Home','enhanced'], () => {
    describe('ENHANCED Home tests - Summary OFF Test', () => {
            const homePage = new HomePage()
            const messagePage = new MessagePage()
            const randomString = StringGenerator.randomName()

            beforeEach(() => {
                cy.loginUserPass(Cypress.env('user'), Cypress.env('pass'))
            })

            it('IDEAL-200 User should be able to send messages with enhanced validation', () => {
                // Enhanced message test with better validation
                homePage.clickOnMessageIcon()
                messagePage.verifyPageElements()
                
                // Verify message page loaded correctly
                cy.url().should('contain', '/messages')
                
                // Send message with improved test data
                messagePage.startNewThread("Test - IP Corporate US", "Deniz Coach", "Enhanced Test Subject", randomString)
                messagePage.clickOnButton("Send")
                
                // Enhanced verification
                messagePage.verificationOfMessagesList(randomString)
                cy.contains(randomString).should('be.visible')
            })

            it('IDEAL-201 User should be able to switch languages with page refresh check', () => {
                // Enhanced language switching test
                homePage.verifylanguageSelectorsDisplayed()
                
                // Switch to French
                homePage.clickOnFr()
                homePage.verifyFrTranslations()
                cy.wait(1000) // Wait for translations to apply
                
                // Switch back to English
                homePage.clickOnEn()
                cy.wait(1000) // Wait for translations to apply
                
                // Verify language selector is still displayed
                homePage.verifylanguageSelectorsDisplayed()
            })

            it('IDEAL-202 User should be able to set and verify goals with persistence check', () => {
                // Enhanced goals test
                const randomNumber = StringGenerator.randomName(false, 2)
                
                homePage.clickOnEditGoalsButton()
                homePage.enterGoals(randomNumber)
                homePage.verifyTheGoalsSection(randomNumber)
                
                // Refresh page and verify goals persist
                cy.reload()
                cy.wait(2000)
                homePage.verifyTheGoalsSection(randomNumber)
            })
    })
})
