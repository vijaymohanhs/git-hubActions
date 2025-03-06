describe("ApiValidations", () => {
  it("BasicValidation", () => {
    cy.api({
        method:'POST',
        url:'https://www-api.pos.com.my/api/price',
        body:{
            "country": "Malaysia", "weight": 1, "postcodeFrom": 2600, "postcodeTo": 35600
        }
    }).then((response) => {
        expect(response.status).to.eq(200);
        // expect(response.body).to.have.property('price');
        // expect(response.body).to.have.property('price').to.be.a('number');
    });

    
  });

  it("BasicValidation1", () => {
    cy.request({
        method:'POST',
        url:'https://www-api.pos.com.my/api/getStateByPostcode',
        body:{
            "postCode": "35600"
        }
    }).then((response) => {
        expect(response.status).to.eq(200);
        // expect(response.body).to.have.property('price');
        // expect(response.body).to.have.property('price').to.be.a('number');
    });

    
  });
});
