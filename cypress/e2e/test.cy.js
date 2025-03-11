// 1. Go to https://www.goibibo.com/
// 2. In From - type - Ben
// 3. Select Bengaluru from the list.
// 4. Verify that the Bangluru is indeed selected

describe("Goibibo test", () => {
  it("Details enter", () => {
    cy.visit("https://www.goibibo.com/");
    cy.wait(5000);

    //cy.get('[class="logSprite icClose"]').click();
    // cy.get(".sc-12foipm-2.eTBlJr.fswFld")
    //   .first()
    //   .find(".sc-12foipm-6.erPfRs")
    //   .type("bBen", { delay: 100 });

    cy.get(".sc-12foipm-2.eTBlJr.fswFld")
      .first()
      .find(".sc-12foipm-6.erPfRs")
      .should("be.focused")
      .type("Ben", { delay: 100 });

    cy.get(".sc-12foipm-27.fOrNYO>*")
      .contains("Bengaluru")
      .click({ force: true });

    cy.get(".sc-12foipm-4.czGBLf.fswWidgetTitle")
      .first()
      .should("include.text", "Bengaluru");
  });
});
