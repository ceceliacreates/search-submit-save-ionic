// https://docs.cypress.io/api/introduction/api.html
describe("Search results", () => {
  beforeEach("it resets viewport and visits the Search tab", () => {
    cy.viewport("iphone-x");
    cy.visit("/tabs/search");
  });
  it.only("returns matching result when found", () => {
    cy.getBySel("search-input")
      .find("input")
      .clear();
    cy.getBySel("search-input")
      .find("input")
      .type("Engineer");
    cy.getBySel("search-button").click();
    cy.getBySel("result-label").should("contain.text", "Engineer");
    cy.getBySel("result-list")
      .children()
      .should("have.length.gt", 1);
  });
  it("returns error when no term entered", () => {
    cy.getBySel("search-input")
      .find("input")
      .clear();
    cy.getBySel("search-button").click();
    cy.contains("Please enter search term");
    cy.getBySel("result-list")
      .children()
      .should("have.length", 0);
  });
  it("returns no results when no matches found", () => {
    cy.getBySel("search-input")
      .find("input")
      .clear();
    cy.getBySel("search-input")
      .find("input")
      .type("invalid search term");
    cy.getBySel("search-button").click();
    cy.getBySel("result-list")
      .children()
      .should("have.length", 0);
  });
});
