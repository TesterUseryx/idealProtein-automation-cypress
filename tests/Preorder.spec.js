/// <reference types="cypress" />
import testFilter from '../helpers/testFilters.js'


const StringGenerator = require('../helpers/StringGenerator')
const HomePage = require('../pages/HomePage')
const PreorderPage = require('../pages/PreorderPage')

testFilter(['smoke','Preorder'], () => {
    describe('SMOKE Preorder tests', () => {
            const homePage = new HomePage()
            const preorderPage = new PreorderPage()
            const randomString =  StringGenerator.randomName()
            const randomNumber =  StringGenerator.randomName(false, 2);

            beforeEach(() => {
                cy.loginUserPass(Cypress.env('user'), Cypress.env('pass'))
            })

           it('IDEAL-6 User should be able to make a pre-order', () => {
                homePage.clickOnPreorder()
                preorderPage.verifyPageElements()
                preorderPage.searchInput("Anti-Oxy")
                preorderPage.addItemToCart()
                preorderPage.verifyProductIsAddedToCart(1)
                //preorderPage.increaseProductQuantity(1)
                preorderPage.verifyProductIsAddedToCart(1)
                preorderPage.leaveAComment("Testing, please ignore")
                preorderPage.clickOnSendToMyClinic()
                preorderPage.verifyThePreorderSuccessPopup("Anti-Oxy", 1, "Testing, please ignore")
            })
    })
})