const BASE_URL = 'https://itx-frontend-test.onrender.com'

export async function getProducts() {
  const res = await fetch(`${BASE_URL}/api/product`)

  if (!res.ok) {
    throw new Error('Error fetching products')
  }

  return res.json()
}

export async function getProductDetails(id) {
  const res = await fetch(`${BASE_URL}/api/product/${id}`)

  if (!res.ok) {
    throw new Error('Error fetching products')
  }

  return res.json()
}

export async function addProductToCart({ id, colorCode, storageCode }) {
  const res = await fetch(`${BASE_URL}/api/cart`, {
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