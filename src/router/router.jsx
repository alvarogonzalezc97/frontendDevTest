import { createBrowserRouter, Navigate } from 'react-router'
import ProductList from '../pages/productList/ProductList'
import ProductDetails from '../pages/productDetails/ProductDetails'
import NotFound from '../pages/notFound/NotFound'
import { ROUTES } from './routes'

export const router = createBrowserRouter([
  { path: ROUTES.HOME, element: <ProductList /> },
  { path: ROUTES.PRODUCT_DETAIL_PATTERN, element: <ProductDetails /> },
  { path: '*', element: <NotFound /> },
])
