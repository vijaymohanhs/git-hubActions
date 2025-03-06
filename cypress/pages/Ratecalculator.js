class Ratecalculator {
  fromCountry = '[class="font-bold"]';

  toCountry = "#mat-input-0";

  postCode = '[placeholder="Postcode"]';

  multiCountries = '[id="mat-autocomplete-0"]';

  optionalPostCode = '[placeholder="Postcode (optional)"]';

  weight ='[placeholder="eg. 0.1kg"]'

  multipleValues ='[class="text-2xl font-extrabold text-blue-900"]'

  calculateButtonClick(){
    cy.contains(" Calculate ").click({ force: true });
  }

  countrytextvalidation(country){
    cy.get(this.fromCountry)
    .invoke("text")
    .should("eq", country);
  }
  
  enterPostCode(pcode){
    cy.get(this.postCode).first().type(pcode, { force: true });
  }
}

export const RateCalculatorPage = new Ratecalculator();
