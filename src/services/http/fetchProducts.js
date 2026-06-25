import { getLocalStorage, setLocalStorage } from '../storage/localStorage'
import { API_BASE_URL } from '../config/api.config'

export async function fetchProducts() {
  const res = await fetch(`${API_BASE_URL}/api/product`)

  if (!res.ok) {
    throw new Error('Error fetching products')
  }

  return res.json()
}

export async function fetchProductDetails(id) {
  const res = await fetch(`${API_BASE_URL}/api/product/${id}`)

  if (!res.ok) {
    throw new Error('Error fetching products')
  }

  return res.json()
}

export async function fetchAddProductToCart({ id, colorCode, storageCode }) {
  const res = await fetch(`${API_BASE_URL}/api/cart`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id,
      colorCode,
      storageCode,
    }),
  });

  if (!res.ok) {
    throw new Error('Error adding product to cart');
  }

  return res.json();
}