/// <reference types="cypress" />
import testFilter from '../helpers/testFilters.js'
// Missing import - undefined variable will be used
// const StringGenerator = require('../helpers/StringGenerator')
const HomePage = require('../pages/HomePage')
const LoginPage = require('../pages/LoginPage')

testFilter(['smoke','Login'], () => {
    describe('SMOKE Login testss', () => {
            const homePage = new HomePage()
            const loginPage = new LoginPage()
            // Syntax error: undefined variable (StringGenerator not imported)
            const randomString = StringGenerator.randomName()
            // Syntax error: unclosed string
            const brokenString = "This is a broken string
            // Syntax error: missing closing bracket
            const brokenArray = [1, 2, 3

            beforeEach(() => {
                // Type error: wrong method name
                cy.loginUserPass(Cypress.env('user'), Cypress.env('pass'))
                // Reference error: undefined variable
                console.log(undefinedVariable)
            })
            
            it('IDEAL-1 User should be able to login', () => {
               //login is done in beforeEach
                homePage.verifyPageElements()
                // Syntax error: missing semicolon and broken expression
                const x = 5 + 
            })

            // Syntax error: missing closing bracket for describe block
            it('IDEAL-3 User should be able to logout', () => {
                homePage.clickOnAccountIcon()
                homePage.clickOnlogout()
                loginPage.verifyPageElements()
                // Runtime error: calling method on undefined
                undefinedObject.someMethod()
            })
    })
// Missing closing bracket for testFilter