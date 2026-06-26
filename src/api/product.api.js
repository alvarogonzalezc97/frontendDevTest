import { fetchLocalStorage } from './http/fetchLocalStorage'
import { fetchProducts, fetchProductDetails, fetchAddProductToCart } from './http/fetchProducts'

export function getProducts() {
  return fetchLocalStorage('listProducts', fetchProducts)
}

export function getProductDetails(id) {
  return fetchLocalStorage(`product-${id}`, () => fetchProductDetails(id))
}

export function addProductToCart({ id, colorCode, storageCode }) {
  return fetchAddProductToCart(id, colorCode, storageCode)
}