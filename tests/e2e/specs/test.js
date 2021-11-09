// https://docs.cypress.io/api/introduction/api.html

describe("Tab navigation", () => {
  beforeEach("it resets viewport and visits the app root url", () => {
    cy.viewport("iphone-x");
    cy.visit("/");
  });
  it("Redirects to the Search tab by default", () => {
    cy.contains("ion-content", "Filter results by search term.");
  });
  it("Visits the Search tab", () => {
    cy.get("#tab-button-search").click();
    cy.contains("ion-content", "Filter results by search term.");
    cy.contains("ion-title", "Search");
  });
  it("Visits the Submit tab", () => {
    cy.get("#tab-button-submit").click();
    cy.contains("ion-content", "Submit page");
    cy.contains("ion-title", "Submit");
  });

  it("Visits the Save tab", () => {
    cy.get("#tab-button-save").click();
    cy.contains("ion-content", "Save page");
    cy.contains("ion-title", "Save");
  });
});

describe("Search page", () => {
  beforeEach("it resets viewport and visits the Search tab", () => {
    cy.viewport("iphone-x");
    cy.visit("/tabs/search");
  });
  it("returns matching result when found", () => {
    cy.get(".native-input").clear();
    cy.get(".native-input").type("1");
    cy.get(".button").click();
    cy.get("ion-label").should("contain.text", "1");
    cy.get(".list-md")
      .children()
      .should("have.length", 1);
  });
  it("returns error when no term entered", () => {
    cy.get(".native-input").clear();
    cy.get(".button").click();
    cy.contains("Please enter search term");
    cy.get(".list-md")
      .children()
      .should("have.length", 3);
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
