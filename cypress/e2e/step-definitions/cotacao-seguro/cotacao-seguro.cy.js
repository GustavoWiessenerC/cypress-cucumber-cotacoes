import { When, Then, Given, And} from "cypress-cucumber-preprocessor/steps";

Given("que acesse a pagina para cotação de seguros", () => {
  cy.visit("/app.php");
});

When("informar os dados do veiculo", () => {
  cy.fixture('veiculo').then(el => {
    cy.fillMake(el.make)
    cy.fillModel(el.model)
    cy.fillperformance(el.enginePerformance)
    cy.fillCylinderCapacity(el.cylinderCapacity)
    cy.filldateManufacture(el.dateOfManufacture)
    cy.fillNumberSeats(el.numberOfSeats)
    cy.checkHandDriver();
    cy.fillNumberSeatsMotorCycle(el.numberOfSeatsMotorcycle);
    cy.fillFuel(el.fueltype)
    cy.fillPayloadKl(el.payloadKg)
    cy.fillTotalWeight(el.totalWeight)
    cy.fillListPrice(el.listPrice)
    cy.fillLicensePlateNumber(el.numberLicense)
    cy.fillAnualMileage(el.anualMileage)  
    cy.nextQuote();
  });
});

And("informar os dados do segurador", () => {
  cy.fixture('segurador').then(el => {
    cy.fillFirstName(el.firtName)
    cy.fillLastName(el.lastName)
    cy.fillBithDate(el.dateOfBirth)
    cy.fillAddress(el.andress)
    cy.fillCountry(el.country)
    cy.fillZipCode(el.zipCode)
    cy.fillCity(el.city)
    cy.fillOccupation(el.occupation)
    cy.fillHobbie(el.hobbie)
    cy.fillWebSite(el.website)
    cy.nextProductData();
});
})

And("informar os dados do produto", () => {
  cy.fixture('produto').then(el => {
    cy.fillStartDate(el.startDate)
    cy.fillInsuranceSum(el.insuranceSum),
    cy.fillMeritRating(el.meritRating)
    cy.fillDamageInsurance(el.damageInsurance)
    cy.fillOptionalProduct(el.optionalProduct)
    cy.fillCourtesyCar(el.courtesyCar)
    cy.nextSelectorPrice()
    cy.selectPlan(el.plan)
    cy.nextSendQuote()
  })
});

When("informar os dados do usuario", () => {
  cy.fixture('usuario').then(el => {
    cy.fillEmail(el.email)
    cy.fillPhone(el.phone)
    cy.fillUserName(el.user)
    cy.fillPassword(el.pass)
    cy.fillConfirmPassword(el.pass)
    cy.sendEmail();
    cy.isSuccessQuote();
  })   
});

Then("a cotação deve ser realizada com sucesso", () => {
    cy.isSuccessQuote();
});


  