/// <reference types="cypress" />
import testFilter from '../helpers/testFilters.js'


const StringGenerator = require('../helpers/StringGenerator')
const HomePage = require('../pages/HomePage')
const MyDashboardPage = require('../pages/MyDashboardPage')

testFilter(['smoke','MyDashboard'], () => {
    describe('SMOKE MyDashboard tests', () => {
            const homePage = new HomePage()
            const myDashboardPage = new MyDashboardPage();
            const randomString =  StringGenerator.randomName()
            const randomNumber =  StringGenerator.randomName(false, 1)
            const number =  StringGenerator.randomName(false, 3)

            beforeEach(() => {
                cy.loginUserPass(Cypress.env('user'), Cypress.env('pass'))
            })

         /*   it('IDEAL-22 User should be able to add weight', () => {
                homePage.clickOnMyDashboard()
                myDashboardPage.verifyPageElements()
                myDashboardPage.navigateToBiometrics()
                myDashboardPage.verifyTheBiometricsTabElements()
                myDashboardPage.clickOnAdd()
                myDashboardPage.addNewWeight(randomNumber, randomNumber, randomNumber)
            })

            it('IDEAL-23 User should be able to add measurements', () => {
                homePage.clickOnMyDashboard()
                myDashboardPage.navigateToBiometrics()
                myDashboardPage.navigateToMeasurements()
                myDashboardPage.clickOnAdd()
                myDashboardPage.addNewMeasurements(3,3,3,3,3,3,3)
            })*/

            it('IDEAL-xx A example of a failed test (hope the only failed one :D)', () => {
                homePage.clickOnMyDashboard()
                myDashboardPage.navigateToBiometrics()
                myDashboardPage.navigateToMeasurements()
                myDashboardPage.clickOnAdd()
                myDashboardPage.addNewMeasurements(number,number,number,number,number,number,number)
            })
    })
})