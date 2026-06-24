import Header from '../../components/header/Header'
import { useCart } from '../../hooks/useCart'
import { useState, useEffect, useMemo } from 'react'
import { getProducts } from '../../http/product.api'
import ProductCard from '../../components/product/ProductCard';
import SearchBar from '../../components/search/SearchBar';
import './ProductList.scss'

function ProductList() {

  const { cart } = useCart();
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch(console.error)
  }, [])

  const filteredProducts = useMemo(() => 
    products.filter(product =>
      product.brand.toLowerCase().includes(search.toLowerCase()) ||
      product.model.toLowerCase().includes(search.toLowerCase())
    ), [products, search])

    return (
      <div className="product-list-container">
          <Header 
            breadcrumbs={[{ label: 'Home', to: '/' }]} 
            cartItems={cart.length}
          />

        <div className="product-list-content">
          <SearchBar onSearch={setSearch} />
          <div className="product-grid">
            {filteredProducts.length > 0 
                ? filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))
                : <p className="no-results">No products found</p>
              }
          </div>
        </div>
      </div>
    )
}

export default ProductList