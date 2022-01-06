class RegistrationPage {

    verifyPageElements(){
        cy.get('[class="logo"]')
        cy.get('[class="mat-card-title"]').contains('Account Basics')
        cy.get('[class="mat-card-title"]').contains('Clinic/Center')
        cy.get('[class="mat-card-title"]').contains('Personal Information')
    }

    populateAccountBasicsInformations(firstName, lastName, email, password) {
        cy.get('[formcontrolname="firstName"]').type(firstName)
        cy.get('[formcontrolname="lastName"]').type(lastName)
        cy.get('[formcontrolname="email"]').type(email)
        cy.get('[formcontrolname="password"]').type(password)
        cy.get('[formcontrolname="confPassword"]').type(password)
        cy.get('[formcontrolname="referral"]').click()
        cy.get('[class="mat-option-text"]').contains('Facebook').click()
    }

    populateClinicCentreInformations(country, provinceState, clinic) {
        cy.get('[formcontrolname="country"]').click()
        cy.get('[class="mat-option-text"]').contains(country).click()
        cy.get('[formcontrolname="provinceState"]').click()
        cy.contains(provinceState).click()
        cy.wait(1500)
        cy.get('[formcontrolname="clinic"]').click()
        cy.get('[class="sel-name"]').contains(clinic).click()
    }

    populatePersonalInformations(birthDate, timeZone, phone) {
        cy.get('[formcontrolname="birthDay"]').type(birthDate)
        cy.get('[formcontrolname="timezone"]').click()
        cy.get('[class="mat-option-text"]').contains(timeZone).click()
        cy.get('[formcontrolname="phone"]').type(phone)
        cy.get('[value="male"]').eq(0).click()
        cy.get('[formcontrolname="height"]').click()
        cy.get('[class="mat-option ng-star-inserted mat-active"]').click()
    }

    checkPolicyAgreements(){
        cy.get('#mat-checkbox-1').click()
        cy.get('#mat-checkbox-2').click()
    }

    clickOnRegisterBtn() {
        cy.get('[type="submit"]').click()
    }

    verifyTheConfirmationEmailPopup(){
        cy.get('[class="modal ng-trigger ng-trigger-child"]')
    }

    clickOnSignInButton(){
        cy.get('[class="mat-button-wrapper"]').contains('Click Here To Sign In').click()
    }
    
  }
  
  module.exports = RegistrationPage
  