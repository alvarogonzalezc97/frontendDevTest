import { Link } from 'react-router'
import './ProductCard.scss'

function ProductCard({ product }) {
  return (

    <Link to={`/product/${product.id}`} className="product-card">
      <div className="product-card-image">
        <img src={product.imgUrl} alt={`${product.brand} ${product.model}`} />
      </div>
      <div className="product-card-info">
        <span className="product-card-brand">{product.brand}</span>
        <h3 className="product-card-model">{product.model}</h3>
        <span className="product-card-price">{product.price}€</span>
      </div>
    </Link>
  )
}

export default ProductCard