class LoginPage {

    function (locator, expectedResult) {
        cy.get(locator).then((theElement) => {
            const text = (theElement.text())
            cy.log(text)
            expect(expectedResult).to.be.eq(text)
       })
    }

    verifyPageElements(){
        cy.get(':nth-child(3) > h2')
        cy.get(':nth-child(1) > h2')
        cy.get('.logo')
        cy.get('app-lang-switch > :nth-child(2)')
        cy.get(':nth-child(3) > .reset-password')
        cy.get(':nth-child(1) > .reset-password')
    }

    clickOnDieterRegister(){
        cy.get('.mat-button-wrapper > a').click()
    }

    clickCreateAnAccountBtn(){
        cy.get('#SubmitCreate > span').click();
    }

    populateLoginform(email, password){
        cy.get('#email').type(email)
        cy.get('#password').type(password)
    }

    clickOnLoginBtn(){
        cy.get('.dieter-form > .mat-raised-button').click()
    }

    verifyErrorMessage(errorMessage){
        this.function('ol > li', errorMessage)
    }
}

module.exports = LoginPage