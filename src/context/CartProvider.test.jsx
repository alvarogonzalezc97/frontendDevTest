import { renderHook, act } from '@testing-library/react'
import { describe, it, expect, beforeEach } from 'vitest'
import { CartProvider } from './CartProvider'
import { useCart } from '../hooks/useCart'

const wrapper = ({ children }) => <CartProvider>{children}</CartProvider>

describe('CartContext', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('starts with empty cart', () => {
    const { result } = renderHook(() => useCart(), { wrapper })

    expect(result.current.cart).toEqual([])
  })

  it('adds item to cart', () => {
    const { result } = renderHook(() => useCart(), { wrapper })

    act(() => {
      result.current.addItem({ id: 1, name: 'iPhone' })
    })

    expect(result.current.cart).toHaveLength(1)
    expect(result.current.cart[0]).toEqual({
      id: 1,
      name: 'iPhone',
    })
  })
})
