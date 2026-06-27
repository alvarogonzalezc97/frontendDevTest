import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import ProductActions from './ProductActions'

vi.mock('../../../services/product.service', () => ({
  addProductToCart: vi.fn().mockResolvedValue({ count: 1 }),
}))

const mockAddItem = vi.fn()

vi.mock('../../../hooks/useCart', () => ({
  useCart: () => ({ addItem: mockAddItem }),
}))

const mockColors = [
  { code: 1, name: 'Black/Silver' },
  { code: 2, name: 'White' },
]

const mockStorages = [
  { code: 1, name: '32 GB' },
  { code: 2, name: '64 GB' },
]

function renderProductActions(props = {}) {
  return render(
    <ProductActions 
      productId="1" 
      colors={mockColors} 
      storages={mockStorages} 
      {...props} 
    />
  )
}

describe('ProductActions', () => {
  it('renders actions', () => {
    renderProductActions()

    expect(screen.getByTestId('actions-container')).toBeInTheDocument()
  })

  it('renders color selector', () => {
    renderProductActions()

    expect(screen.getByTestId('selector-color')).toBeInTheDocument()
  })

  it('renders storage selector', () => {
    renderProductActions()

    expect(screen.getByTestId('selector-storage')).toBeInTheDocument()
  })

  it('renders add button', () => {
    renderProductActions()

    expect(screen.getByTestId('product-actions-add-button')).toBeInTheDocument()
  })

  it('button is enabled when color and storage are selected', () => {
    renderProductActions()

    expect(screen.getByTestId('product-actions-add-button')).not.toBeDisabled()
  })

  it('button is disabled when no colors available', () => {
    renderProductActions({ colors: [] })

    expect(screen.getByTestId('product-actions-add-button')).toBeDisabled()
  })

  it('button is disabled when no storages available', () => {
    renderProductActions({ storages: [] })

    expect(screen.getByTestId('product-actions-add-button')).toBeDisabled()
  })

  it('calls addItem when add button is clicked', async () => {
    renderProductActions()

    fireEvent.click(screen.getByTestId('product-actions-add-button'))

    await waitFor(() => {
      expect(mockAddItem).toHaveBeenCalledWith({
        id: '1',
        colorCode: 1,
        storageCode: 1,
        count: 1,
      })
    })
  })
})
