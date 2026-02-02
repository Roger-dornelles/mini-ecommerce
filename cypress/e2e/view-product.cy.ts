describe("view product page", () => {
  const productId = "1";

  it("it should be able to navigate from the Home page to the details and display the data successfully", () => {
    cy.intercept("GET", `**/api/products/${productId}`).as("getProductDetail");
    cy.intercept("GET", "**/api/products").as("getHomeProducts");

    cy.visit("http://localhost:3000");
    cy.wait("@getHomeProducts");

    cy.get(`a[href*="/product/${productId}"]`).first().click();

    cy.get('[data-testid="title"]').should("contain", "Detalhes do Produto");

    cy.get("main").within(() => {
      cy.get("img").should("be.visible").and("have.attr", "src");

      cy.get("button")
        .contains(/adicionar/i)
        .should("be.visible");
    });
  });

  it("it should ensure that the Header and Footer are present on the details page", () => {
    cy.visit(`http://localhost:3000/product/${productId}`);

    cy.get('[data-testid="cart-button"]').should("be.visible");
    cy.get('[data-testid="footer"]').should("be.visible");
  });
});
