/// <reference types="cypress" />
import testFilter from '../helpers/testFilters.js'


const StringGenerator = require('../helpers/StringGenerator')
const HomePage = require('../pages/HomePage')
const SchedulePage = require('../pages/SchedulePage')

testFilter(['smoke','Schedule'], () => {
    describe('SMOKE Schedule tests', () => {
            const homePage = new HomePage()
            const schedulePage = new SchedulePage()
            const randomString =  StringGenerator.randomName()
            const randomNumber =  StringGenerator.randomName(false, 2);

            beforeEach(() => {
                cy.loginUserPass(Cypress.env('user'), Cypress.env('pass'))
            })

           it('IDEAL-18 User should be able to schedule new meeting', () => {
                homePage.clickOnSchedule()
                schedulePage.verifyPageElements()
                schedulePage.clickOnScheduleNewMeeting()
                schedulePage.selectCoach("Ursu Alexandr")
                schedulePage.selectFreeSlot();
                schedulePage.selectTimeAndScheduleMeeting()
            // verify the upcoming section remaining 
            })
    })
})