import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { describe, it, expect } from 'vitest'
import Header from './Header'

function renderHeader(props = {}) {
  return render(
    <MemoryRouter>
      <Header
        breadcrumbs={props.breadcrumbs}
        cartItems={props.cartItems} />
    </MemoryRouter>
  )
}

describe('Header', () => {
  it('renders nav container', () => {
    renderHeader()

    expect(screen.getByTestId('nav-container')).toBeInTheDocument()
  })

  it('renders the logo', () => {
    renderHeader()

    expect(screen.getByTestId('logo')).toBeInTheDocument()
    expect(screen.getByAltText('phone_store_logo')).toBeInTheDocument()
  })

  it('renders breadcrumbs contaier', () => {
    renderHeader()

    expect(screen.getByTestId('breadcrumb-container')).toBeInTheDocument()
  })

  it('renders breadcrumb labels', () => {
    renderHeader({
      breadcrumbs: [
        { label: 'Home', to: '/' },
        { label: 'Phones' }
      ]
    })

    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Phones')).toBeInTheDocument()
  })

  it('renders breadcrumb link when "to" is provided', () => {
    renderHeader({
      breadcrumbs: [
        { label: 'Home', to: '/' }
      ]
    })

    const link = screen.getByRole('link', { name: 'Home' })

    expect(link).toHaveAttribute('href', '/')
  })

  it('renders cart container and count', () => {
    renderHeader({
      cartItems: 2
    })

    expect(screen.getByTestId('cart-container')).toBeInTheDocument()

    const cartCount = screen.getByTestId('cart-count')
    expect(cartCount).toBeInTheDocument()
  })

  it('renders correct cart item count', () => {
    renderHeader({
      cartItems: 5
    })

    const cartCount = screen.getByTestId('cart-count')
    expect(cartCount).toHaveTextContent('5')
  })
})