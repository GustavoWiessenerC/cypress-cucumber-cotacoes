
describe("e2e - suite home page", () => {

  let user = Cypress.env("user");
  let pass = Cypress.env("pass");
  let setWaitTimeResponse = 15000;

  beforeEach(() => {
    cy.visit("/");
  });

  it("should be in home page", () => {
    cy.loginPage(user, pass);
    cy.submitLogin();
    cy.wait(setWaitTimeResponse);
    cy.isLoggedUserInHomePage();  
  });

  it("should be in not home page", () => {
    cy.loginPage(user, '12345');
    cy.submitLogin();
    cy.isNotLoggedUserInHomePage();
  });

});
