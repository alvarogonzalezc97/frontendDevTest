import Header from '../../components/header/Header'
import { useCart } from '../../hooks/useCart'
import { useState, useEffect, useMemo } from 'react'
import { getProducts } from '../../http/product.api'
import ProductCard from '../../components/product/listCard/ProductCard';
import SearchBar from '../../components/search/SearchBar';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { useTranslation } from 'react-i18next';
import './ProductList.scss'

function ProductList() {
  const { t } = useTranslation();
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
        breadcrumbs={[{ label: t('productList.breadcrumb.label'), to: '/' }]}
        cartItems={cart.length}
      />

      <div className="product-list-content">
        <SearchBar
          className='product-list-searchBar'
          placeholder={t('productList.searchBarPlaceholder')}
          onSearch={setSearch}
        />

        <div className="product-grid">
          {filteredProducts.length > 0
            ? filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))
            : (
              <div className="product-no-results-container">
                <ExclamationTriangleIcon />
                <p className='product-no-results'>{t('productList.noProductsFound')}</p>
              </div>
            )}
        </div>
      </div>
    </div>
  )
}

export default ProductList