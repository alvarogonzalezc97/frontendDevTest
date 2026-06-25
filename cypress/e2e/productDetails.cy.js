describe('Product Details Page', () => {

  beforeEach(() => {
    cy.intercept('GET', '**/api/product/ZmGrkLRPXOTpxsU4jjAcv', { fixture: 'productDetail.json' }).as('getProduct')
    cy.intercept('POST', '**/api/cart', { count: 1 }).as('addToCart')

    cy.visit('/product/ZmGrkLRPXOTpxsU4jjAcv')
  })

  it('loads product details', () => {
    cy.wait('@getProduct')

    cy.get('[data-testid="product-details-container"]').should('exist')
    cy.get('[data-testid="product-details-image"]').should('be.visible')
  })

  it('renders product info fields', () => {
    cy.wait('@getProduct')

    cy.get('[data-testid="product-details-info"]').should('contain.text', 'Acer')
    cy.get('[data-testid="product-details-info"]').should('contain.text', 'Quad-core 1.3 GHz Cortex-A53')
    cy.get('[data-testid="product-details-info"]').should('contain.text', '7.0 inches (~69.8% screen-to-body ratio)')
  })

  it('allows selecting options', () => {
    cy.wait('@getProduct')

    cy.get('[data-testid="selector-color-select"]').select('Black')

    cy.get('[data-testid="selector-storage-select"]').select('64 GB')
  })

  it('adding to cart', () => {
    cy.wait('@getProduct')

    cy.get('[data-testid="selector-color-select"]').select('Black')

    cy.get('[data-testid="selector-storage-select"]').select('64 GB')

    cy.get('[data-testid="product-actions-add-button"]').click()

    cy.wait('@addToCart');

    cy.get('[data-testid="cart-count"]').should('have.text', '1')
  })
})