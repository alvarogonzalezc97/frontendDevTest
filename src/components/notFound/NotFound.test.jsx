import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import NotFound from './NotFound'

function renderNotFound(props = {}) {
  return render(
    <NotFound
      className='product-list-notFound'
      message="No products found"
      {...props}
    />
  )
}

describe('NotFound', () => {
  it('renders container', () => {
    renderNotFound()

    expect(screen.getByTestId('product-list-notFound-container')).toBeInTheDocument()
  })

  it('renders icon', () => {
    renderNotFound()

    expect(screen.getByTestId('not-found-icon')).toBeInTheDocument()
  })

  it('renders message', () => {
    renderNotFound()

    expect(screen.getByTestId('not-found-message')).toBeInTheDocument()
  })

  it('renders correct message', () => {
    renderNotFound({ message: 'No products found' })

    expect(screen.getByTestId('not-found-message')).toHaveTextContent('No products found')
  })
})
