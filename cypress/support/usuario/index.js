Cypress.Commands.add('fillEmail', (email) => {
    cy.get('#email').type(email)
})

Cypress.Commands.add('fillPhone', (phone) => {
    cy.get('#phone').type(phone)
})

Cypress.Commands.add('fillUserName', (user) => {
    cy.get('#username').type(user)
})

Cypress.Commands.add('fillPassword', (pass) => {
    cy.get('#password').type(pass, { log: false })
})

Cypress.Commands.add('fillConfirmPassword', (pass) => {
    cy.get('#confirmpassword').type(pass, { log: false })
})

Cypress.Commands.add('sendEmail', () => {
    cy.get('#sendemail').click();
})

Cypress.Commands.add('isSuccessQuote', () => {
    cy.get('.sweet-alert').should('is.visible')
    cy.containsTextValid('Sending e-mail success!')
})

Cypress.Commands.add('containsTextValid', (text) => {
    cy.contains('h2', text)
})