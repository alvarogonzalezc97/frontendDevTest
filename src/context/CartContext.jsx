import { createContext, useState } from 'react'

export const CartContext = createContext()

const CART_KEY = 'cart'

function getInitialCart() {
  const stored = localStorage.getItem(CART_KEY)
  return stored ? JSON.parse(stored) : []
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState(getInitialCart())

  const addItem = (item) => {
    const newCart = [...cart, item]
    setCart(newCart)
    localStorage.setItem(CART_KEY, JSON.stringify(newCart))
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
