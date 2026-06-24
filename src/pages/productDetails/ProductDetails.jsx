import Header from '../../components/Header'
import { useCart } from '../../hooks/useCart'

function ProductDetails() {

  const { cart } = useCart();

  return (
    <div>
      <Header
        breadcrumbs={[{ label: 'Home', to: '/' }]}
        cartItems={cart.length}
      />

      <div>
        BODY ProductDetails
      </div>
    </div>
  )
}

export default ProductDetails