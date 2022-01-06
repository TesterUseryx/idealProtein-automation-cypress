/// <reference types="cypress" />
import testFilter from '../helpers/testFilters.js'


const StringGenerator = require('../helpers/StringGenerator')
const HomePage = require('../pages/HomePage')
const ProfilePage = require('../pages/ProfilePage')
const LoginPage = require('../pages/LoginPage')
const RegistrationPage = require('../pages/RegistrationPage')

testFilter(['smoke','My Profile'], () => {
    describe('SMOKE MyProfile tests', () => {
            const homePage = new HomePage()
            const profilePage = new ProfilePage()
            const loginPage = new LoginPage()
            const randomString = StringGenerator.randomName(2)
            const randomNumber =  StringGenerator.randomName(false, 1)

            beforeEach(() => {
                cy.loginUserPass(Cypress.env('user'), Cypress.env('pass'))
            })

            it('IDEAL-5 User should be able to upload profile photo', () => {
                homePage.clickOnMyProfile()
                profilePage.navigateToPhotos()
                profilePage.deletePhoto(3)
                profilePage.uploadNewPhoto('images/profile.jpg', 3)
            })

            it('IDEAL-11 User should be able to change password', () => {
                homePage.clickOnMyProfile()
                profilePage.verifyPageElements()
                profilePage.clickOnResetPassword()
                profilePage.submitNewPassword(randomString)
                homePage.clickOnAccountIcon()
                homePage.clickOnlogout()
                loginPage.populateLoginform(Cypress.env('user'), randomString)
                loginPage.clickOnLoginBtn()
                homePage.clickOnMyProfile()
                profilePage.clickOnResetPassword()
                profilePage.submitNewPassword(Cypress.env('pass'))
            })

           /* it('IDEAL-19 User should be able to update email', () => {
                automated under IDAL-24

            })*/
    })
})