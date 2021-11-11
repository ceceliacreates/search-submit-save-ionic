// https://docs.cypress.io/api/introduction/api.html
describe("Search results", () => {
  beforeEach("it resets viewport and visits the Search tab", () => {
    cy.viewport("iphone-x");
    cy.visit("/tabs/search");
  });
  it("returns matching result when found", () => {
    cy.get(".native-input").clear();
    cy.get(".native-input").type("Engineer");
    cy.get(".button").click();
    cy.get("ion-label").should("contain.text", "Engineer");
    cy.get(".list-md")
      .children()
      .should("have.length.gt", 1);
  });
  it("returns error when no term entered", () => {
    cy.get(".native-input").clear();
    cy.get(".button").click();
    cy.contains("Please enter search term");
    cy.get(".list-md")
      .children()
      .should("have.length", 0);
  });
  it("returns no results when no matches found", () => {
    cy.get(".native-input").clear();
    cy.get(".native-input").type("invalid search term");
    cy.get(".button").click();
    cy.get(".list-md")
      .children()
      .should("have.length", 0);
  });
});
