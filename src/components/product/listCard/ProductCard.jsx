import { Link } from 'react-router'
import './ProductCard.scss'

function ProductCard({ className = "", product }) {
  return (
    <Link to={`/product/${product.id}`} className={`${className} product-card`} data-testid='product-card' >
      <div className="product-card-image" data-testid='product-image'>
        <img src={product.imgUrl} alt={`${product.brand}_${product.model}`} />
      </div>

      <div className="product-card-info" data-testid='product-card-info'>
        <span className="product-card-brand" data-testid='product-card-brand'>{product.brand}</span>
        <span className="product-card-model" data-testid='product-card-model'>{product.model}</span>
        <span className="product-card-price" data-testid='product-card-price'>{product.price}€</span>
      </div>
    </Link>
  )
}

export default ProductCard