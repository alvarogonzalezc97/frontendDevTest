import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { describe, it, expect } from 'vitest'
import ProductCard from './ProductCard'

const mockProduct = {
    id: '1',
    brand: 'Acer',
    model: 'Liquid Z6',
    price: '120',
    imgUrl: 'https://example.com/image.jpg'
}

function renderProductCard() {
    return render(
        <MemoryRouter>
            <ProductCard product={mockProduct} />
        </MemoryRouter>
    )
}

describe('ProductCard', () => {
    it('renders product card', () => {
        renderProductCard()

        expect(screen.getByTestId('product-card')).toBeInTheDocument()
    })

    it('renders product image', () => {
        renderProductCard()

        expect(screen.getByTestId('product-image')).toBeInTheDocument()
        expect(screen.getByRole('img')).toBeInTheDocument()
    })

    it('renders correct image alt text', () => {
        renderProductCard()

        expect(screen.getByAltText('Acer_Liquid Z6')).toBeInTheDocument()
    })

    it('renders product brand with correct text', () => {
        renderProductCard()

        expect(screen.getByTestId('product-card-brand')).toBeInTheDocument()
        expect(screen.getByText('Acer')).toBeInTheDocument()
    })

    it('renders product model with correct text', () => {
        renderProductCard()

        expect(screen.getByTestId('product-card-model')).toBeInTheDocument()
        expect(screen.getByText('Liquid Z6')).toBeInTheDocument()
    })

    it('renders product price with correct text', () => {
        renderProductCard()

        expect(screen.getByTestId('product-card-price')).toBeInTheDocument()
        expect(screen.getByText('120€')).toBeInTheDocument()
    })

    it('renders link to product detail', () => {
        renderProductCard()

        expect(screen.getByRole('link')).toHaveAttribute('href', '/product/1')
    })
})