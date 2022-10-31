/* eslint-disable no-undef */

describe('userFlow1', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/products/');
  });

  it('can load the page and it contains a list of 100 phones', () => {
    cy.contains('OldMobiles.com');
    cy.get('.phones-list').children().should('have.length', 100);
  });

  it('can search for a phone and it returns the correct result', () => {
    cy.get('.search-bar').type('iconia tab 7');
    cy.get('.phones-list').children().should('have.length', 2);
    cy.get('.search-bar').clear();
    cy.get('.search-bar').type('iconia tab');
    cy.get('.phones-list').children().should('have.length', 23);
    cy.get('.search-bar').clear();
    cy.get('.search-bar').type('motoroña');
    cy.contains('No results...');
  });

  it('can click on a phone and it redirects to the correct page', () => {
    cy.get('.phones-list').contains('Iconia Talk S').click();
    cy.url().should('include', '/products/ZmGrkLRPXOTpxsU4jjAcv');
  });

  it('can click on the logo and it redirects to the home page', () => {
    cy.get('.phones-list').contains('Iconia Talk S').click();
    cy.url().should('include', '/products/ZmGrkLRPXOTpxsU4jjAcv');
    cy.get('.navbar-brand').click();
    cy.url().should('eq', 'http://localhost:3000/products');
  });

  it('can click on the back button and it redirects to the home page', () => {
    cy.get('.phones-list').contains('Iconia Talk S').click();
    cy.url().should('include', '/products/ZmGrkLRPXOTpxsU4jjAcv');
    cy.get('.back-to-list-btn').click();
    cy.url().should('eq', 'http://localhost:3000/products/');
  });
  it('can add elements to the cart', () => {
    cy.get('.phones-list').contains('Iconia Talk S').click();
    cy.get('.button-add-to-cart').click();
    cy.get('.cart-btn').click();
    cy.get('.cart-list').children().should('have.length', 1);
    cy.get('.button-add-to-cart').click();
    cy.contains('Quantity:2');

    cy.get('.cart-btn').click();
    cy.get('.back-to-list-btn').click();
    cy.get('.phones-list').contains('Liquid Z6 Plus').click();
    cy.get('.button-add-to-cart').click();
    cy.get('.cart-btn').click();
    cy.get('.cart-list').children().should('have.length', 2);
    cy.get('.button-add-to-cart').click();
    cy.contains('Quantity:2');
    cy.get('.cart-btn').click();
  });

  it('can add and substract from the quantity of a product', () => {
    cy.get('.phones-list').contains('Iconia Talk S').click();
    cy.get('.button-add-to-cart').click();
    cy.get('.cart-btn').click();
    cy.get('.cart-list').children().should('have.length', 1);
    cy.get('.btn-add-one').click();
    cy.contains('Quantity:2');
    cy.get('.btn-add-one').click();
    cy.contains('Quantity:3');
    cy.get('.btn-substract-one').click();
    cy.contains('Quantity:2');
  });

  it('can remove an element from the cart', () => {
    cy.get('.phones-list').contains('Iconia Talk S').click();
    cy.get('.button-add-to-cart').click();
    cy.get('.cart-btn').click();
    cy.get('.cart-list').children().should('have.length', 1);
    cy.get('.btn-remove-from-cart').click();
    cy.contains('Cart is empty');
    cy.get('.cart-btn').click();
  });
});
