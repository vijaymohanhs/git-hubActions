import { RateCalculatorPage } from "../pages/Ratecalculator";

describe("VerifyUserCanCalculateTheShipmentQuoteFromMalaysiatoIndia", () => {
  it("BasicValidation", () => {
    cy.visit("/");

    RateCalculatorPage.countrytextvalidation("Malaysia");
    RateCalculatorPage.enterPostCode("35600");

    cy.get(RateCalculatorPage.toCountry).click({ force: true });
    cy.get(RateCalculatorPage.toCountry)
      .clear({ force: true })
      .type("Ind", { timeout: 5000 }, { force: true });
    cy.get(RateCalculatorPage.multiCountries)
      .contains("India - IN")
      .click({ force: true });
    cy.get(RateCalculatorPage.optionalPostCode).should("have.value", "");

    cy.get(RateCalculatorPage.weight).type("1", { force: true });

    //Calculate button click and validation
    RateCalculatorPage.calculateButtonClick();
    cy.wait(8000);
    cy.get(RateCalculatorPage.multipleValues).should(
      "have.length.greaterThan",
      0
    );
  });
});
