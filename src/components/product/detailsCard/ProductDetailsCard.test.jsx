import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ProductDetailsCard from './ProductDetailsCard'

const mockFields = [
  { label: 'Brand', value: 'Acer' },
  { label: 'Model', value: 'Predator 8' },
  { label: 'Price', value: '350' },
]

function renderProductDetailsCard(props = {}) {
  return render(<ProductDetailsCard fields={mockFields} {...props} />)
}

describe('ProductDetailsCard', () => {
  it('renders list', () => {
    renderProductDetailsCard()

    expect(screen.getByTestId('product-details-card')).toBeInTheDocument()
  })

  it('renders field labels', () => {
    renderProductDetailsCard()

    expect(screen.getByText('Brand:')).toBeInTheDocument()
    expect(screen.getByText('Model:')).toBeInTheDocument()
    expect(screen.getByText('Price:')).toBeInTheDocument()
  })

  it('renders field values', () => {
    renderProductDetailsCard()

    expect(screen.getByText('Acer')).toBeInTheDocument()
    expect(screen.getByText('Predator 8')).toBeInTheDocument()
    expect(screen.getByText('350')).toBeInTheDocument()
  })

  it('does not render fields with null value', () => {
    renderProductDetailsCard({
      fields: [{ label: 'Battery', value: null }],
    })

    expect(screen.queryByText('Battery:')).not.toBeInTheDocument()
  })

  it('does not render fields with undefined value', () => {
    renderProductDetailsCard({
      fields: [{ label: 'Battery', value: undefined }],
    })

    expect(screen.queryByText('Battery:')).not.toBeInTheDocument()
  })

  it('does not render fields with empty string value', () => {
    renderProductDetailsCard({
      fields: [{ label: 'Battery', value: '' }],
    })

    expect(screen.queryByText('Battery:')).not.toBeInTheDocument()
  })

  it('renders array values as list', () => {
    renderProductDetailsCard({
      fields: [{ label: 'Cameras', value: ['5 MP', '2 MP'] }],
    })

    expect(screen.getByText('5 MP')).toBeInTheDocument()
    expect(screen.getByText('2 MP')).toBeInTheDocument()
  })

  it('does not render empty array values', () => {
    renderProductDetailsCard({
      fields: [{ label: 'Cameras', value: ['', null, undefined] }],
    })

    expect(screen.queryByText('Cameras:')).not.toBeInTheDocument()
  })
})
