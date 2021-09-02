// https://docs.cypress.io/api/introduction/api.html

describe("Tab navigation", () => {
  beforeEach("it visits the app root url", () => {
    cy.visit("/");
  });
  it("Redirects to the Search tab by default", () => {
    cy.contains("ion-content", "Search page");
  });
  it("Visits the Search tab", () => {
    cy.get("#tab-button-search").click();
    cy.contains("ion-content", "Search page");
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
