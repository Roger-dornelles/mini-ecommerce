describe("Cart Flow", () => {
  const productId = "1";

  beforeEach(() => {
    cy.intercept("GET", "**/api/products").as("getHome");
    cy.intercept("GET", `**/api/products/${productId}`).as("getDetail");
  });

  it("it should add item and display it in the sidebar successfully", () => {
    cy.visit("http://localhost:3000");
    cy.wait("@getHome");

    cy.get(`a[href*="/product/${productId}"]`).first().click();

    cy.get("button")
      .contains(/adicionar/i)
      .click();

    cy.get(".Toastify__toast--success").should("be.visible");
    cy.get(".Toastify__toast--success", { timeout: 6000 }).should("not.exist");

    cy.get('[data-testid="cart-button"]').click();

    cy.get("h2")
      .contains(/seu carrinho/i)
      .should("be.visible");

    cy.get("span").contains("1").should("be.visible");

    cy.contains(/total/i)
      .parent()
      .find(".text-blue-400")
      .should("not.contain", "R$ 0,00");
  });

  it("it should increment quantity using data-testing attribute and update total price", () => {
    cy.visit(`http://localhost:3000/product/${productId}`);

    cy.get("button")
      .contains(/adicionar/i)
      .click();
    cy.get(".Toastify__toast--success", { timeout: 6000 }).should("not.exist");

    cy.get('[data-testid="cart-button"]').click();

    cy.contains(/total/i)
      .parent()
      .find(".text-blue-400")
      .invoke("text")
      .then((valorInicialStr) => {
        const valorInicial = parseFloat(
          valorInicialStr.replace(/[^\d,]/g, "").replace(",", "."),
        );

        cy.get('[data-testid="increment-button"]').first().click();

        cy.get("span").contains("2").should("be.visible");

        cy.contains(/total/i)
          .parent()
          .find(".text-blue-400")
          .invoke("text")
          .should((valorFinalStr) => {
            const valorFinal = parseFloat(
              valorFinalStr.replace(/[^\d,]/g, "").replace(",", "."),
            );
            expect(valorFinal).to.be.greaterThan(valorInicial);
          });
      });
  });
});
