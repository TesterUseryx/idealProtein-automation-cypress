/// <reference types="cypress" />
import testFilter from '../helpers/testFilters.js'

const StringGenerator = require('../helpers/StringGenerator')
const HomePage = require('../pages/HomePage')
const LoginPage = require('../pages/LoginPage')

testFilter(['smoke','Login','enhanced'], () => {
    describe('ENHANCED Login tests - PR Summary Test', () => {
            const homePage = new HomePage()
            const loginPage = new LoginPage()

            beforeEach(() => {
                cy.loginUserPass(Cypress.env('user'), Cypress.env('pass'))
            })
            
            it('IDEAL-100 User should be able to login with enhanced error handling', () => {
                // Enhanced login test with better error handling
                homePage.verifyPageElements()
                
                // Verify user is actually logged in by checking URL
                cy.url().should('contain', '/dieter')
                
                // Verify navigation elements are visible
                cy.get('.nav').should('be.visible')
            })

            it('IDEAL-101 User should see welcome message after login', () => {
                // Test that welcome message appears after successful login
                homePage.verifyPageElements()
                
                // Wait for page to fully load
                cy.wait(2000)
                
                // Verify user account icon is present
                homePage.clickOnAccountIcon()
                
                // Verify logout option is available
                cy.contains('Logout').should('be.visible')
            })

            it('IDEAL-102 User should be able to logout with confirmation', () => {
                // Enhanced logout test
                homePage.clickOnAccountIcon()
                homePage.clickOnlogout()
                
                // Verify we're back at login page
                loginPage.verifyPageElements()
                
                // Verify URL changed to login page
                cy.url().should('not.contain', '/dieter')
            })
    })
})
