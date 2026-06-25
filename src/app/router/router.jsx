import { createBrowserRouter, Navigate } from 'react-router'
import ProductList from '../../pages/productList/ProductList'
import ProductDetails from '../../pages/productDetails/ProductDetails'

export const router = createBrowserRouter(
    [
        { path: '/', element: <ProductList /> },
        { path: '/product/:id', element: <ProductDetails /> },
        { path: '*', element: <Navigate to="/" /> }
    ]
)