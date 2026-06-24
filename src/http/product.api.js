const BASE_URL = 'https://itx-frontend-test.onrender.com'

export async function getProducts() {
  const res = await fetch(`${BASE_URL}/api/product`)

  if (!res.ok) {
    throw new Error('Error fetching products')
  }

  return res.json()
}