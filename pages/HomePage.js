/// <reference types="cypress" />

class HomePage {

    verifyPageElements(){
        cy.get('.name')
        cy.get('.avatar-container')
        cy.get('.ip-goals')
    }

    verifylanguageSelectorsDisplayed(){
        cy.get('span').contains('EN')
        cy.get('span').contains('FR')
    }

    clickOnlogout(){
        cy.wait(2000)
        cy.get('.mat-menu-content > :nth-child(3) > span').click()
    }

    clickOnAccountIcon(){
        cy.wait(2000)
        cy.get('.desktop-visible > .mat-button-wrapper').click()
    }

    clickOnPreferences(){
        cy.contains('settings_application').click()
    }

    clickOnMessageIcon(){
        cy.wait(2000)
        cy.get('.ip-message').click()
    }

    clickOnFr(){
        cy.get('span').contains('FR').click()
    }

    clickOnEn(){
        cy.get('span').contains('EN').click()
    }

    verifyFrTranslations(){
        cy.get('[icon="dashboard"] > .mat-ripple').contains('Mon Tableau de bord')
        cy.get('[icon="book"] > .mat-ripple > span.ng-star-inserted').contains('Mon Journal')
        cy.get('[icon="shopping_cart"] > .mat-ripple').contains('Précommande')
    }

    clickOnEditGoalsButton(){
        cy.get('.mat-raised-button').click()
    }

    clickOnMyDashboard(){
        cy.wait(2000)
        cy.get('[icon="dashboard"] > .mat-ripple').click()
    }

    clickOnMyProfile(){
        cy.wait(2000)
        cy.get('[icon="assignment_ind"] > .mat-ripple').click()
    }

    clickOnPreorder(){
        cy.wait(2000)
        cy.get('[icon="shopping_cart"] > .mat-ripple').click()
    }

    clickOnSchedule(){
        cy.wait(2000)
        cy.get('[icon="schedule"] > .mat-ripple').click()
    }

    clickOnMyJournal(){
        cy.wait(2000)
        cy.get('[icon="book"] > .mat-ripple > span.ng-star-inserted').click()
    }

    enterGoals(value){
        cy.get('[formcontrolname="weight"]').clear().type(value)
        cy.get('[formcontrolname="steps"]').clear().type(value)
        cy.get('[formcontrolname="sleep"]').clear().type(value)
        cy.get('[formcontrolname="hydration"]').clear().type(value)
        cy.get('[class="mat-button-wrapper"]').contains('Save').click()
    }

// dev to add IDs so we can check every section as expected
    verifyTheGoalsSection(value){
        cy.get('div').contains(value)
        cy.get('div').contains(value)
        cy.get('div').contains(value)
        cy.get('div').contains(value)
    }
}

module.exports = HomePage