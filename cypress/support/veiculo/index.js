Cypress.Commands.add('fillMake', (make) => {
    cy.get('#make').select(make)
})

Cypress.Commands.add('fillModel', (model) => {
    cy.get('#model').select(model)
})

Cypress.Commands.add('fillCylinderCapacity', (capability) => {
    cy.get('#cylindercapacity').type(capability)
})

Cypress.Commands.add('filldateManufacture', (date) => {
    cy.get('#dateofmanufacture').type(date)
})

Cypress.Commands.add('fillperformance', (performance) => {
    cy.get('#engineperformance').type(performance)
})

Cypress.Commands.add('fillNumberSeats', (seatsNumber) => {
    cy.get('#numberofseats').select(seatsNumber)
})

Cypress.Commands.add('checkHandDriver', () => {
    cy.get('#righthanddriveyes').check({ force: true }).should('be.checked');
})

Cypress.Commands.add('fillNumberSeatsMotorCycle', (seatsNumberMotor) => {
    cy.get('#numberofseatsmotorcycle').select(seatsNumberMotor)
})

Cypress.Commands.add('fillFuel', (fuel) => {
    cy.get('#fuel').select(fuel)
})

Cypress.Commands.add('fillPayloadKl', (payload) => {
    cy.get('#payload').type(payload)
})

Cypress.Commands.add('fillTotalWeight', (total) => {
    cy.get('#totalweight').type(total)
})

Cypress.Commands.add('fillListPrice', (listPrice) => {
    cy.get('#listprice').type(listPrice)
})

Cypress.Commands.add('fillLicensePlateNumber', (plateNumber) => {
    cy.get('#licenseplatenumber').type(plateNumber)
})

Cypress.Commands.add('fillAnualMileage', (mileage) => {
    cy.get('#annualmileage').type(mileage)
})

Cypress.Commands.add('nextQuote', () => {
    cy.get('#nextenterinsurantdata').click({force: true})
})