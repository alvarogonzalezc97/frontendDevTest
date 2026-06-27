import { useParams, Link } from 'react-router'
import { useState, useEffect } from 'react'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { useTranslation } from 'react-i18next'
import Header from '../../components/header/Header'
import { useCart } from '../../hooks/useCart'
import { getProductDetails } from '../../api/product.api'
import ProductDetailsList from '../../components/product/detailsList/ProductDetailsList'
import ProductActions from '../../components/product/actions/ProductActions'
import NotFound from '../../components/notFound/NotFound'
import Loader from '../../components/loader/Loader'
import './ProductDetails.scss'

function ProductDetails() {
  const { t } = useTranslation()
  const { id } = useParams()
  const { cart } = useCart()
  const [product, setProduct] = useState(null)
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    getProductDetails(id)
      .then(setProduct)
      .catch(console.error)
      .finally(() => setIsLoading(false))
  }, [id])

  function getFields() {
    return [
      { label: t('productDetails.brand'), value: product.brand },
      { label: t('productDetails.model'), value: product.model },
      { label: t('productDetails.price'), value: `${product.price} €` },
      { label: t('productDetails.cpu'), value: product.cpu },
      { label: t('productDetails.ram'), value: product.ram },
      { label: t('productDetails.os'), value: product.os },
      { label: t('productDetails.screen'), value: product.displayResolution },
      { label: t('productDetails.battery'), value: product.battery },
      { label: t('productDetails.primaryCamera'), value: product.primaryCamera },
      { label: t('productDetails.secondaryCamera'), value: product.secondaryCmera },
      { label: t('productDetails.dimensions'), value: product.dimentions },
      { label: t('productDetails.weight'), value: product.weight },
    ]
  }

  return (
    <div className="product-details-container" data-testid="product-details-container">
      <Header
        breadcrumbs={[
          { label: t('productDetails.breadcrumb.productList'), to: '/' },
          { label: t('productDetails.breadcrumb.productDetail') }
        ]}
        cartItems={cart.length}
      />

      <Link to="/" className="back-link">
        <ArrowLeftIcon />
        {t('productDetails.backToProducts')}
      </Link>

      {isLoading ? (
        <Loader
          className='product-deatils-loader'
          message={t('productDetails.loader.message')} 
        />
      ) : (
        <div className="product-details-content" data-testid="product-details-content">
          {product ? (
            <>
              <div className="product-details-image" data-testid="product-details-image">
                <img src={product.imgUrl} alt={`${product.brand}_${product.model}`} />
              </div>

              <div className="product-details-info" data-testid="product-details-info">
                <div
                  className="product-details-description"
                  data-testid="product-details-description"
                >
                  <ProductDetailsList fields={getFields(product)} />
                </div>

                <div className="product-details-actions" data-testid="product-details-actions">
                  <ProductActions
                    productId={product.id}
                    colors={product.options.colors}
                    storages={product.options.storages}
                  />
                </div>
              </div>
            </>
          ) : (
            <NotFound
              className="product-detail-notFound"
              message={t('productList.noProductsFound')}
            />
          )}
        </div>
      )}
    </div>
  )
}

export default ProductDetails
