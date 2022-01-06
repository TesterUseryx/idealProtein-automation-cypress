// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// cypress/support/commands.js
import 'cypress-file-upload'
const MailSlurp = require("mailslurp-client").default

const apiKey = "3b464dad2dc3c37b775b179805fdf5f487bfae83cbdb8d362f80a89a37ec03f7"
const mailslurp = new MailSlurp({ apiKey })

Cypress.Commands.add("createInbox", () => {
    return mailslurp.createInbox()
  })
  
Cypress.Commands.add("waitForLatestEmail", (inboxId) => {
   return mailslurp.waitForLatestEmail(inboxId)
  })


Cypress.Commands.add('loginUserPass', (user, pass, visit = true) => {
  cy.window().then(win => win.onbeforeunload = undefined)
  cy.server()
  if(visit){
    cy.visit('')
    cy.log('Visited login page..')
  }
  cy.get('#email').type(user)
  cy.get('#password').type(pass)
  cy.get('.dieter-form > .mat-raised-button').click().then(() => {
    cy.url().should('contain', '/dieter')
  });
    cy.wait(5000);
  })  

Cypress.Commands.add('clearThenType', { prevSubject: true }, (subject, text) => {
  cy.wrap(subject).clear().type(text)
})

Cypress.Commands.add('selectDate', (date) => {
  cy.get('[aria-label="Open calendar"]').click()
  cy.get('.mat-calendar-body-cell-content').contains(date).click()
})