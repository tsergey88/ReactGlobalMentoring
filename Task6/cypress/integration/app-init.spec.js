describe("App initialization", () => {
  it("Loads films on page", () => {
    cy.visit("http://localhost:8080");
    cy.get(".item-preview").should("have.length", 18);
  });

  it("accepts input", () => {
    const typedText = "First Film";

    cy.get(".search-input")
      .type(typedText)
      .should("have.value", typedText);
  });

  it("count of radio button", () => {
    cy.get(".box").should("have.length", 2);
  });
});
