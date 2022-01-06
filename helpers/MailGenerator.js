/// <reference types="mailslurp-client" />

let inboxId;
let emailAddress;

it('Generate mail.', () => {
    cy.createInbox().then((inbox) => {
        // verify a new inbox was created
        assert.isDefined(inbox);
        // save the inboxId for later checking the emails
        inboxId = inbox.id;
        emailAddress = inbox.emailAddress;
    });     
});

module.exports = {
    inboxId, 
    emailAddress
};