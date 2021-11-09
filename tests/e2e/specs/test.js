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
    cy.visit("/search");
  });
  it("returns matching result when found", () => {});
  it("returns error when no term entered", () => {});
  it("returns no results when no matches found", () => {});
});
