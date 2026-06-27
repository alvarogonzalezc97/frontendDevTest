import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ProductDetailsList from './ProductDetailsList'

const mockFields = [
  { label: 'Brand', value: 'Acer' },
  { label: 'Model', value: 'Predator 8' },
  { label: 'Price', value: '350' },
]

function renderProductDetailsList(props = {}) {
  return render(<ProductDetailsList fields={mockFields} {...props} />)
}

describe('ProductDetailsList', () => {
  it('renders list', () => {
    renderProductDetailsList()

    expect(screen.getByTestId('product-details-list')).toBeInTheDocument()
  })

  it('renders field labels', () => {
    renderProductDetailsList()

    expect(screen.getByText('Brand:')).toBeInTheDocument()
    expect(screen.getByText('Model:')).toBeInTheDocument()
    expect(screen.getByText('Price:')).toBeInTheDocument()
  })

  it('renders field values', () => {
    renderProductDetailsList()

    expect(screen.getByText('Acer')).toBeInTheDocument()
    expect(screen.getByText('Predator 8')).toBeInTheDocument()
    expect(screen.getByText('350')).toBeInTheDocument()
  })

  it('does not render fields with null value', () => {
    renderProductDetailsList({
      fields: [{ label: 'Battery', value: null }],
    })

    expect(screen.queryByText('Battery:')).not.toBeInTheDocument()
  })

  it('does not render fields with undefined value', () => {
    renderProductDetailsList({
      fields: [{ label: 'Battery', value: undefined }],
    })

    expect(screen.queryByText('Battery:')).not.toBeInTheDocument()
  })

  it('does not render fields with empty string value', () => {
    renderProductDetailsList({
      fields: [{ label: 'Battery', value: '' }],
    })

    expect(screen.queryByText('Battery:')).not.toBeInTheDocument()
  })

  it('renders array values as list', () => {
    renderProductDetailsList({
      fields: [{ label: 'Cameras', value: ['5 MP', '2 MP'] }],
    })

    expect(screen.getByText('5 MP')).toBeInTheDocument()
    expect(screen.getByText('2 MP')).toBeInTheDocument()
  })

  it('does not render empty array values', () => {
    renderProductDetailsList({
      fields: [{ label: 'Cameras', value: ['', null, undefined] }],
    })

    expect(screen.queryByText('Cameras:')).not.toBeInTheDocument()
  })
})
