describe('Product List Page', () => {

  beforeEach(() => {
    cy.intercept('GET', '**/api/product', { fixture: 'products.json' }).as('getProducts')
    cy.visit('/')
  })

  it('loads products correctly', () => {
    cy.wait('@getProducts')

    cy.get('[data-testid="product-card"]').should('have.length.at.least', 8)
  })

  it('filters products by search', () => {
    cy.wait('@getProducts')

    cy.get('[data-testid="search-bar"]').type('Z6')

    cy.get('[data-testid="product-card"]').should('have.length', 2)

    cy.get('[data-testid="product-card"]').each(($el) => {
      expect($el.text()).to.include('Z6')
    })
  })

  it('shows empty state when filter with not results', () => {
    cy.wait('@getProducts')

    cy.get('[data-testid="search-bar"]').type('nonexistingproduct')

    cy.get('[data-testid="product-no-results"]').should('be.visible')
  })

  it('navigates to product details when clicking a product card', () => {
    cy.wait('@getProducts')

    cy.get('[data-testid="product-card"]')
      .first()
      .click()

    cy.url().should('include', '/product/')

    cy.get('[data-testid="product-details-container"]').should('exist')
  })
})