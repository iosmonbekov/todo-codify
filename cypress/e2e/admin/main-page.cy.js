describe('Working with AdminPage', () => {
  it('View of products', () => {
    cy.visit('/admin');
    cy.intercept('GET', '**/products', { fixture: 'products.json' }).as('getProducts');

    cy.wait('@getProducts');

    cy.get('[data-product-id=1]')
      .should('contain', 'T-shirt')
      .should('contain', '$799')
    cy.get('[data-product-id=2]')
      .should('contain', 'Cap')
      .should('contain', '23')
  })

  it('Create Product', () => {
    cy.visit('/create-product')
    cy.fillCreateProductForm({ name: 'T-shirt', price: '23', img: 'https://www.ymeuniverse.com/images/83735/319984-7.jpg' });
    cy.get('form').contains('Add Product').click();
  })

  it('Check new Product', () => {
    cy.get('ul li').last().should('contain', 'T-shirt').and('contain', '23')
  })
})