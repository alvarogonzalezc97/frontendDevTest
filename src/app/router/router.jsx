import { createBrowserRouter, Navigate } from 'react-router'
import ProductList from '../../pages/ProductList/ProductList'
import ProductDetails from '../../pages/ProductDetails/ProductDetails'

export const router = createBrowserRouter(
    [
        { path: '/', element: <ProductList /> },
        { path: '/product/:id', element: <ProductDetails /> },
        { path: '*', element: <Navigate to="/" /> }
    ]
)