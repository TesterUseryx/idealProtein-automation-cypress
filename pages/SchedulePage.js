class SchedulePage {

    verifyPageElements(){
        cy.contains('Upcoming Events')
        cy.contains('Past Events')
        cy.contains('Schedule New Meeting')
    }

    clickOnScheduleNewMeeting(){
        cy.contains('Schedule New Meeting').click()
    }

    selectFreeSlot(){
        cy.get('[class="cal-cell-top available ng-star-inserted"]').eq(0).click()
    }

    selectTimeAndScheduleMeeting(){
        let text 
        cy.get('[class="time-button-title"]').eq(0).click()

        cy.get('[class="time-button-title"]').then(($el) => {
             text = $el.eq(0).text();      
        });

        cy.get('[class="mat-focus-indicator green confirm-button mat-raised-button mat-button-base"]').eq(0).click()
        cy.get('.success').contains('Appointment was successfully booked')
    }

    selectCoach(coachName){
        cy.contains(coachName).click()
    }

    submitNewPassword(newPassword){
        cy.get('[formcontrolname="password"]').clear().type('{selectall}' + newPassword)
        cy.get('[formcontrolname="confirm"]').clear().type('{selectall}' + newPassword)
        cy.get('[value="submit"]').click()
        cy.get('.success').contains('Successfully Updated Password')
    }
}

module.exports = SchedulePage