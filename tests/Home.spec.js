/// <reference types="cypress" />
import testFilter from '../helpers/testFilters.js'


const StringGenerator = require('../helpers/StringGenerator')
const HomePage = require('../pages/HomePage')
const MessagePage = require('../pages/MessagesPage')

testFilter(['smoke','Home'], () => {
    describe('SMOKE Home tests', () => {
            const homePage = new HomePage()
            const messagePage = new MessagePage()
            const randomString = StringGenerator.randomName()
            const randomNumber =  StringGenerator.randomName(false, 1)

            beforeEach(() => {
                cy.loginUserPass(Cypress.env('user'), Cypress.env('pass'))
            })

            it('IDEAL-2 User should be able to send messages to coach', () => {
                homePage.clickOnMessageIcon()
                messagePage.verifyPageElements()
                messagePage.clickOnNewMessage()
                messagePage.startNewThread("Test - IP Corporate US", "Deniz Coach", "Test subject", randomString)
                messagePage.clickOnButton("Send")
                messagePage.verificationOfMessagesList(randomString)
            })

            it('IDEAL-10 User should be able to set English or French language', () => {
                homePage.verifylanguageSelectorsDisplayed()
                homePage.clickOnFr()
                homePage.verifyFrTranslations()
                homePage.clickOnEn()
            })

            it('IDEAL-4 User should be able to enter goals from Home page', () => {
                homePage.clickOnEditGoalsButton()
                homePage.enterGoals(randomNumber)
                homePage.verifyTheGoalsSection(randomNumber)
            })
    })
})