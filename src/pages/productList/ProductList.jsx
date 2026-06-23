import Header from '../../components/Header'
 import { useCart } from '../../hooks/useCart'

  function ProductList() {

    const { cart } = useCart();

    return (
      <div>
          <Header 
            breadcrumbs={[{ label: 'Home', to: '/' }]} 
            cartItems={cart.length}
          />

        <div>
          BODY ProductList
        </div>
      </div>
    )
  }

  export default ProductList