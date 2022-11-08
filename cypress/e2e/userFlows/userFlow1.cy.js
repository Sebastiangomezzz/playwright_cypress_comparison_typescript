/* eslint-disable no-undef */

describe('userFlow1', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/products/');
  });

  it('can load the page and it contains a list of 100 phones', () => {
    cy.contains('OldMobiles.com');
    cy.get('[data-cy="phones-list"]').children().should('have.length', 100);
  });

  it('can search for a phone and it returns the correct result', () => {
    cy.get('[data-cy="search-bar"]').type('iconia tab 7');
    cy.get('[data-cy="phones-list"]').children().should('have.length', 2);
    cy.get('[data-cy="search-bar"]').clear();
    cy.get('[data-cy="search-bar"]').type('iconia tab');
    cy.get('[data-cy="phones-list"]').children().should('have.length', 23);
    cy.get('[data-cy="search-bar"]').clear();
    cy.get('[data-cy="search-bar"]').type('motorola');
    cy.contains('No results...');
  });

  it('can click on a phone and it redirects to the correct page', () => {
    cy.get('[data-cy="phones-list"]').contains('Iconia Talk S').click();
    cy.url().should('include', '/products/ZmGrkLRPXOTpxsU4jjAcv');
  });

  it('can click on the logo and it redirects to the home page', () => {
    cy.get('[data-cy="phones-list"]').contains('Iconia Talk S').click();
    cy.url().should('include', '/products/ZmGrkLRPXOTpxsU4jjAcv');
    cy.get('[cy-data="navbar"]').click();
    cy.url().should('eq', 'http://localhost:3000/products');
  });

  it('can click on the back button and it redirects to the home page', () => {
    cy.get('[data-cy="phones-list"]').contains('Iconia Talk S').click();
    cy.url().should('include', '/products/ZmGrkLRPXOTpxsU4jjAcv');
    cy.get('[data-cy="back-to-list-btn"]').click();
    cy.url().should('eq', 'http://localhost:3000/products/');
  });
  it('can add elements to the cart', () => {
    cy.get('[data-cy="phones-list"]').contains('Iconia Talk S').click();
    cy.get('[cy-data="button-add-to-cart"]').click();
    cy.get('[cy-data="cart-btn"]').click();
    cy.get('[data-cy="cart-list"]').children().should('have.length', 2);
    cy.get('[cy-data="button-add-to-cart"]').click();
    cy.contains('Quantity:2');

    cy.get('[cy-data="cart-btn"]').click();
    cy.get('[data-cy="back-to-list-btn"]').click();
    cy.get('[data-cy="phones-list"]').contains('Liquid Z6 Plus').click();
    cy.get('[cy-data="button-add-to-cart"]').click();
    cy.get('[cy-data="cart-btn"]').click();
    cy.get('[data-cy="cart-list"]').children().should('have.length', 3);
    cy.get('[cy-data="button-add-to-cart"]').click();
    cy.contains('Quantity:2');
    cy.get('[cy-data="cart-btn"]').click();
  });

  it('can add and substract from the quantity of a product', () => {
    cy.get('[data-cy="phones-list"]').contains('Iconia Talk S').click();
    cy.get('[cy-data="button-add-to-cart"]').click();
    cy.get('[cy-data="cart-btn"]').click();
    cy.get('[data-cy="cart-list"]').children().should('have.length', 2);
    cy.get('[cy-data="btn-add-one"]').then(($btn) => {
      $btn.click();
    });
    cy.contains('Quantity:2');
    cy.get('[cy-data="btn-add-one"]').then(($btn) => {
      $btn.click();
    });
    cy.contains('Quantity:3');
    cy.get('[data-cy="btn-substract-one"]').click();
    cy.contains('Quantity:2');
  });

  it('can remove an element from the cart', () => {
    cy.get('[data-cy="phones-list"]').contains('Iconia Talk S').click();
    cy.get('[cy-data="button-add-to-cart"]').click();
    cy.get('[cy-data="cart-btn"]').click();
    cy.get('[data-cy="cart-list"]').children().should('have.length', 2);
    cy.get('[cy-data="btn-remove-from-cart"]').then(($btn) => {
      $btn.click();
    });
    cy.contains('Cart is empty');
    cy.get('[cy-data="cart-btn"]').click();
  });

  it('can fill the checkout form and click on the submit button', () => {
    //hacer objecto con los datos de la compra y pasarlo
    const userData = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'hgfjsdhf@sdfsdfs.com',
      phone: '123456789',
      address: 'Calle falsa 123',
      zipCode: '12345',
      billingAddress: 'Calle falsa 12354654',
      cardNumber: '1234567890123456'
    };
    cy.finishPurchase(userData);
    cy.contains('Thank you for your purchase!');
  });

  const errorMsg = 'There was an error!! Check the URL or try again in a few minutes, please.';

  it('can react to a 404 error code', () => {
    cy.intercept('GET', 'https://front-test-api.herokuapp.com/api/product', {
      statusCode: 404,
      Response: 'error'
    }).as('getProducts');
    cy.wait('@getProducts');
    cy.contains(errorMsg);
  });

  it('can show the error page when the user tries to access a page that does not exists', () => {
    cy.visit('http://localhost:3000/products/1234567sdfasdfasdfqwenfgsdfzdfgxdf89');
    cy.contains(errorMsg);
    cy.visit('http://localhost:3000/pr');
    cy.contains(errorMsg);
    cy.visit('http://localhost:3000/products/');
  });
});
