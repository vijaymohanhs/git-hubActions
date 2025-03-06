import { SignUpPage } from "../pages/HomePage";
describe("TestTheSignupFlow", () => {

  let data;
  const email = `testuser_${Cypress._.random(1000, 9999)}@example.com`;
  before(() => {
    cy.fixture("Home.json").then((testData) => {
      data = testData;
    });
  });

  it("BasicValidation", () => {
    cy.visit("/");

    cy.contains("Create an Account").click();

    cy.get(SignUpPage.firstname).type(data.fName);
    cy.get(SignUpPage.lastName).type(data.sName);
    cy.get(SignUpPage.emailadd).type(email);
    cy.get(SignUpPage.password).first().type(data.pass);
    cy.get(SignUpPage.passwordconfirmation).type(data.pass);
    cy.get(SignUpPage.createAccountButton).click();

    cy.wait(5000);

    cy.get(SignUpPage.signout).first().click();
    cy.contains("Sign Out").click();
  });

  it("Signing in with that account", () => {
    cy.contains("Sign In").click();
    cy.get(SignUpPage.email).type(email);
    cy.get(SignUpPage.password).first().type(data.pass);
    cy.get(SignUpPage.LoginButton).first().click();
  });

});
