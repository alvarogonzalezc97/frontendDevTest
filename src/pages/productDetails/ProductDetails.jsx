import Header from '../../components/header/Header'
import { useCart } from '../../hooks/useCart'
import { useParams } from 'react-router'
import { useState, useEffect } from 'react'
import { getProductDetails } from '../../http/product.api'
import ProductDetailsCard from '../../components/product/detailsCard/ProductDetailsCard';
import './ProductDetails.scss'

function ProductDetails() {

  const { id } = useParams();
  const { cart } = useCart();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductDetails(id)
      .then(setProduct)
      .catch(console.error)
  }, [id])

  function getFields(){
    return [
        { label: 'Brand', value: product.brand },
        { label: 'Model', value: product.model },
        { label: 'Price', value: `${product.price} €` },
        { label: 'CPU', value: product.cpu },
        { label: 'RAM', value: product.ram  },
        { label: 'OS', value: product.os },
        { label: 'Screen', value: product.displayResolution },
        { label: 'Battery', value: product.battery },
        { label: 'Primary Camera', value: product.primaryCamera },
        { label: 'Secondary Camera', value: product.secondaryCmera },
        { label: 'Dimensions', value: product.dimentions },
        { label: 'Weight', value: product.weight }
      ]
  }

  return (
    <div className="product-details-container" data-testid='product-details-container' >
      <Header
        breadcrumbs={[{ label: 'Product details', to: '/' }]}
        cartItems={cart.length}
      />

      <div className="product-details-content" data-testid='product-details-content'>
        {product ? (
          <>
            <div className="product-details-image" data-testid='product-details-image'>
              <img src={product.imgUrl} alt={`${product.brand}_${product.model}`} />
            </div>

            <div className="product-details-info" data-testid='product-details-info'>
              <div className="product-details-description" data-testid='product-details-description'>
                <ProductDetailsCard fields={getFields(product)} />
              </div>

              <div className="product-details-actions" data-testid='product-details-actions'>
                Actions

              </div>
            </div>
          </>
          ):(
                <p>Product not exist</p>
            )}
      </div>
    </div >
  )
}

export default ProductDetails