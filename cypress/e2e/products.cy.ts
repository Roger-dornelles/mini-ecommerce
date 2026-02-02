describe("home page", () => {
  beforeEach(() => {
    cy.intercept("GET", "/api/products", {
      body: [
        { id: "1", name: "Caneca Azul", price: 25.0, image: "/caneca.jpg" },
      ],
    }).as("searchRequest");

    cy.visit("http://localhost:3000");
  });

  it("it should load the initial products successfully", () => {
    cy.intercept("GET", "/api/products").as("getProducts");

    cy.wait("@getProducts");

    cy.get('a[href*="/product/"]').should("have.length.at.least", 1);
  });

  it("it should confirm that the search input is visible to the user", () => {
    cy.get('[data-testid="search-input"]')
      .should("be.visible")
      .and("have.attr", "placeholder", "Buscar");
  });

  it("it should confirm that the shopping cart button is visible", () => {
    cy.get('[data-testid="cart-button"]').should("be.visible");
  });

  it("it should open the shopping cart sidebar when clicking the cart button", () => {
    cy.get('[data-testid="cart-button"]').click();

    cy.contains("Seu Carrinho").should("be.visible");
  });

  it("it should confirm that the footer is rendered on the page", () => {
    cy.get('[data-testid="footer"]').should("exist");
  });
});
