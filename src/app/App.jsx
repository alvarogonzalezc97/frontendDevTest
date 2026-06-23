import { RouterProvider } from 'react-router'
import { router } from './router/router'
import { CartProvider } from '../context/CartContext'

function App() {

  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  )
}

export default App
