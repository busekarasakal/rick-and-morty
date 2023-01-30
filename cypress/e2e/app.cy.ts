/// <reference types="cypress" />

const API_TIMEOUT_TIME = API_TIMEOUT_TIME;

describe('App (e2e)', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Loads the app', () => {
    cy.get('h1').contains('RICKORTY');
  });

  it('Fetches the initial data', () => {
    cy.wait(API_TIMEOUT_TIME);

    cy.contains('Rick Sanchez');
  });

  it('Changes page and loads page data', () => {
    cy.wait(API_TIMEOUT_TIME);

    cy.contains('a', '>').click();

    cy.contains('Aqua Morty');
  });

  it('Loader should be visible during data fetch', () => {
    cy.get('#loader').should('be.visible');
  });

  it('Loader should not be visible after data fetch', () => {
    cy.wait(API_TIMEOUT_TIME);

    cy.get('#loader').should('not.exist');
  });
});