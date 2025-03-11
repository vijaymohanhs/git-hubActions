describe("Goibibo test", () => {
  let username;
  let Password;
  it("Details enter", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get('[class="oxd-text oxd-text--p"]')
      .eq(0)
      .invoke("text")
      .then((tes) => {
        
        let arr = tes.split(" ");

        username = arr[2];
        cy.log(username)
      });

    cy.get('[class="oxd-text oxd-text--p"]')
      .eq(1)
      .invoke("text")
      .then((tes) => {

        let arr = tes.split(" ");

        Password = arr[2];
        cy.log(Password)
      });
  });

  it("login", () => {
    cy.get('[name="username"]').type(username);
    cy.get('[name="password"]').type(Password);
    cy.contains('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click({force:true});
  });
});
