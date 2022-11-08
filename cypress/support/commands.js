/* eslint-disable no-undef */
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('finishPurchase', (userData) => {
  cy.visit('http://localhost:3000/checkout');
  cy.get('[data-cy="formFirstName"]').type(userData.firstName);
  cy.get('[data-cy="formLastName"]').type(userData.lastName);
  cy.get('[data-cy="formEmail"]').type(userData.email);
  cy.get('[data-cy="formPhone"]').type(userData.phone);
  cy.get('[data-cy="formAddress"]').type(userData.address);
  cy.get('[data-cy="formZipCode"]').type(userData.zipCode);
  cy.get('[data-cy="formBillingAddress"]').type(userData.billingAddress);
  cy.get('[data-cy="formCardNumber"]').type(userData.cardNumber);
  cy.get('[data-cy="formSubmitButton"]').click();
});
