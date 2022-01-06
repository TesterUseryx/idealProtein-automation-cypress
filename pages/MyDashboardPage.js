class AccountDetailsPage {
    
    function (locator, expectedResult) {
        cy.get(locator).then((theElement) => {
            var text = (theElement.text())
            expect(expectedResult).to.be.eq(text)
       })
    }

    verifyPageElements(){
        cy.get('.header-card > .mat-card-header > .mat-card-header-text > .mat-card-title').contains("Dashboard")
        cy.get('.mat-tab-links > .active').contains("Overview")
        cy.get('.mat-tab-links > [href="/dieter/dashboard/profile"]').contains("Profile")
        cy.get('[href="/dieter/dashboard/biometrics"]').contains("Biometrics")
    }

    navigateToBiometrics(){
        cy.wait(2000)
        cy.get('[href="/dieter/dashboard/biometrics"]').click()
    }

    verifyTheBiometricsTabElements(){
        cy.get('.mat-button-toggle-button').contains("Composition")
        cy.get('.mat-button-toggle-button').contains("Measurements")
        cy.get('.mat-button-toggle-button').contains("Steps")
        cy.get('.mat-button-toggle-button').contains("Sleep")
    }

    navigateToMeasurements(){
        cy.get('.mat-button-toggle-button').contains("Measurements").click()
    }

    clickOnAdd(){
        cy.get('.add > .mat-raised-button').contains("Add").click()
    }

    selectDate(currentDate = true, day = null){
        if(!currentDate){
            cy.get('[aria-label="Open calendar"]').click()
            cy.get('.mat-calendar-body-cell-content').contains(day).click()
        }
    }

    addNewWeight(weight, bodyFat, musclePercentage){
        this.selectDate()
        cy.get('[formcontrolname="weight"]').clear().type(weight);
        cy.get('[formcontrolname="bodyFat"]').clear().type(bodyFat);
        cy.get('[formcontrolname="muscle"]').clear().type(musclePercentage);
        cy.get('.mat-dialog-actions > .mat-primary > .mat-button-wrapper').contains("Add").click()
        cy.get('.success').contains('Successfully added composition entry')
    }

    addNewMeasurements(neck, thorax, chest, arm, waist, hip, thigh){
        this.selectDate()
        cy.get('[formcontrolname="neck"]').clear().type(neck)
        cy.get('[formcontrolname="thorax"]').clear().type(thorax)
        cy.get('[formcontrolname="chest"]').clear().type(chest)
        cy.get('[formcontrolname="arm"]').clear().type(arm)
        cy.get('[formcontrolname="waist"]').clear().type(waist)
        cy.get('[formcontrolname="hip"]').clear().type(hip)
        cy.get('[formcontrolname="thigh"]').clear().type(thigh)
        cy.get('.mat-dialog-actions > .mat-primary > .mat-button-wrapper').contains("Add").click()
        cy.get('.success').contains('Successfully added measurement entry')
    }
}

module.exports = AccountDetailsPage