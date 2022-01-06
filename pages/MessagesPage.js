/// <reference types="cypress" />

const GetText = require('../helpers/GetText');

class MessagePage {

    function (locator, expectedResult) {
        cy.get(locator).then((theElement) => {
            const text = (theElement.text())
            expect(expectedResult).to.be.eq(text);
       });
    }

    verifyPageElements(){
        cy.get('.thread-list > .mat-card')
        cy.get('.mat-card-header-text > .mat-card-title')
        cy.get('.mat-elevation-z2')
    }

    clickOnNewMessage(){
        cy.get('.mat-stroked-button').click();
    }

    clickOnAccountIcon(){
        cy.get('.desktop-visible > .mat-button-wrapper').click()
    }

    startNewThread(clinicName,coachName,subject,message){
        cy.get('#mat-select-1 > .mat-select-trigger > .mat-select-value').click()
        cy.get('.mat-option-text').contains(clinicName).click()
        cy.get('#mat-select-2 > .mat-select-trigger > .mat-select-value').click()
        cy.get('.mat-option-text').contains(coachName).click()
        cy.get('#mat-input-0').type(subject)
        cy.get('#mat-input-1').type(message)
    }

    clickOnButton(buttonText){
        cy.get('.mat-button-wrapper').contains(buttonText).click();
    }

    verificationOfMessagesList(lastMessagedText){
        cy.wait(5000)
        this.function(':nth-child(1) > .mat-cell > .read > :nth-child(3) > .message', lastMessagedText)
    }

    searchInput(searchProduct){
        cy.get('#search_query_top').type(searchProduct);
        const searchInput = cy.get('#search_query_top');
        searchInput.clear().type(searchProduct);
        this.clickOnSearchBtn();
        return this;
    }

    getProductName(searchProduct) {
        return cy.contains(searchProduct);
    }


    selectFirstBestSellerProduct(){
        cy.get('#blockbestsellers > .first-in-line.first-item-of-tablet-line > .product-container').click();
    }

    getPrice(){
       //GetText.randomName();
    }
}

module.exports = MessagePage;