
Cypress.Commands.add('fillStartDate', (date) => {
    cy.get('#startdate').type(date)
})

Cypress.Commands.add('fillInsuranceSum', (sum) => {
    cy.get('#insurancesum').select(sum)
})

Cypress.Commands.add('fillMeritRating', (rating) => {
    cy.get('#meritrating').select(rating)
})

Cypress.Commands.add('fillDamageInsurance', (damage) => {
    cy.get('#damageinsurance').select(damage)
})

Cypress.Commands.add('fillOptionalProduct', (labelValue) => {
    cy.contains('label', `${labelValue}`).click();
})

Cypress.Commands.add('fillCourtesyCar', (courtesy) => {
    cy.get('#courtesycar').select(courtesy)
})

Cypress.Commands.add('nextSelectorPrice', () => {
    cy.get('#nextselectpriceoption').click()
})

Cypress.Commands.add('selectPlan', (plan) => {
    cy.get(`input[type="radio"][value="${plan}"]`).click({force:true});
})

Cypress.Commands.add('nextSendQuote', () => {
    cy.get('#nextsendquote').click()
})
