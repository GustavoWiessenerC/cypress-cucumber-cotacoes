Cypress.Commands.add('getQuote', () => {
    cy.get('#get_camper').click({force: true});
})