import { Link } from 'react-router'
import './ProductCard.scss'

function ProductCard({ className = "", product }) {
  return (
    <Link to={`/product/${product.id}`} className={`${className} product-card`}>
      <div className="product-card-image">
        <img src={product.imgUrl} alt={`${product.brand} ${product.model}`} />
      </div>
      <div className="product-card-info">
        <span className="product-card-brand">{product.brand}</span>
        <span className="product-card-model">{product.model}</span>
        <span className="product-card-price">{product.price}€</span>
      </div>
    </Link>
  )
}

export default ProductCard