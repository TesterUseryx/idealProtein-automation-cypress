class ProfilePage {

    verifyPageElements(){
        cy.get('.nav-card')
        cy.get('ip-dashboard-profile-information.ng-star-inserted > .profile-content')
    }

    clickOnResetPassword(){
        cy.wait(2000)
        cy.contains('Reset Password').click()
    }

    submitNewPassword(newPassword){
        cy.get('[formcontrolname="password"]').clear().type('{selectall}' + newPassword)
        cy.get('[formcontrolname="confirm"]').clear().type('{selectall}' + newPassword)
        cy.get('[value="submit"]').click()
        cy.get('.success').contains('Successfully Updated Password')
    }

    editEmail(newEmail){
        cy.get('[formcontrolname="email"]').clear().type('{selectall}' + newEmail)
        cy.get('[value="submit"]').click()
        cy.get('.success')
    }

    navigateToPhotos(){
        cy.contains('Photos').click()
    }

    deletePhoto(photoNumber){
        cy.wait(1500)
        cy.get('[class="mat-focus-indicator mat-raised-button mat-button-base mat-warn"]').eq(photoNumber).click()
        cy.get('[class="mat-focus-indicator mat-raised-button mat-button-base mat-warn"]').eq(4).click()
    }

    uploadNewPhoto(path, photoNumber){
        const filepath = path
        cy.wait(1500)
        cy.get('[class="mat-focus-indicator mat-raised-button mat-button-base mat-primary"]').eq(photoNumber).click()
        cy.get('#image').attachFile(filepath)
        cy.get('[value="submit"]').click()
        cy.wait(1500)
        cy.get('.success')
    }
}

module.exports = ProfilePage