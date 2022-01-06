/// <reference types="cypress" />
import testFilter from '../helpers/testFilters.js'


const StringGenerator = require('../helpers/StringGenerator')
const HomePage = require('../pages/HomePage')
const LoginPage = require('../pages/LoginPage')

testFilter(['smoke','Login'], () => {
    describe('SMOKE Login tests', () => {
            const homePage = new HomePage()
            const loginPage = new LoginPage()
            const randomString = StringGenerator.randomName()

            beforeEach(() => {
                cy.loginUserPass(Cypress.env('user'), Cypress.env('pass'))
            })
            
            it('IDEAL-1 User should be able to login', () => {
               //login is done in beforeEach
                homePage.verifyPageElements()
            })

            it('IDEAL-3 User should be able to logout', () => {
                homePage.clickOnAccountIcon()
                homePage.clickOnlogout()
                loginPage.verifyPageElements()
            })
    })
})