/// <reference types="cypress" />
import testFilter from '../helpers/testFilters.js'


const StringGenerator = require('../helpers/StringGenerator')
const JsonReader = require('../helpers/JsonReader')
const LoginPage = require('../pages/LoginPage')
const RegistrationPage = require('../pages/RegistrationPage')
const HomePage = require('../pages/HomePage')
const ProfilePage = require('../pages/ProfilePage')

testFilter(['smoke','Registration'], () => {
    describe('SMOKE Registration tests', () => {
        const loginPage = new LoginPage
        const registrationPage = new RegistrationPage
        const homePage = new HomePage
        const profilePage = new ProfilePage
        const randomString =  StringGenerator.randomName()
        const randomNumber =  StringGenerator.randomName(false, 2)
        const mail = randomString + '@getnada.com'
        const newEmail =  randomString + randomNumber +'@getnada.com'

        beforeEach(() => {
            cy.visit(Cypress.env('STG_URL'))
        })

        it('IDEAL-24 User is able to register a new Dieter account', () => {
            loginPage.clickOnDieterRegister()
            registrationPage.verifyPageElements()
            registrationPage.populateAccountBasicsInformations(randomString, randomString, mail, randomString)
            registrationPage.populateClinicCentreInformations('Canada', 'Newfoundland and Labrador', 'Bonne Bay Pharmachoice')
            registrationPage.populatePersonalInformations('12/10/1990', '(-5) Eastern Standard Time', randomNumber)
            registrationPage.checkPolicyAgreements()
            registrationPage.clickOnRegisterBtn()
            registrationPage.verifyTheConfirmationEmailPopup()
            registrationPage.clickOnSignInButton()
            loginPage.verifyPageElements()
            loginPage.populateLoginform(mail, randomString)
            loginPage.clickOnLoginBtn()
            homePage.clickOnAccountIcon()
            homePage.clickOnPreferences()
            profilePage.editEmail(newEmail)
        })
    })
})