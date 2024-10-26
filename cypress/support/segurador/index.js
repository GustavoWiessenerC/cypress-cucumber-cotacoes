
Cypress.Commands.add('fillFirstName', (name) => {
    cy.get('#firstname').type(name)
})

Cypress.Commands.add('fillLastName', (lastName) => {
    cy.get('#lastname').type(lastName)
})

Cypress.Commands.add('fillBithDate', (date) => {
    cy.get('#birthdate').type(date)
})

Cypress.Commands.add('fillAddress', (address) => {
    cy.get('#streetaddress').type(address)
})

Cypress.Commands.add('fillCountry', (country) => {
    cy.get('#country').select(country)
})

Cypress.Commands.add('fillZipCode', (code) => {
    cy.get('#zipcode').type(code)
})

Cypress.Commands.add('fillCity', (city) => {
    cy.get('#city').type(city)
})

Cypress.Commands.add('fillOccupation', (occupation) => {
    cy.get('#occupation').select(occupation)
})

Cypress.Commands.add('fillHobbie', (labelValue) => {
    cy.contains('label', `${labelValue}`).click();
})

Cypress.Commands.add('fillWebSite', (link) => {
    cy.get('#website').type(link)
})

Cypress.Commands.add('nextProductData', () => {
    cy.get('#nextenterproductdata').click()
})