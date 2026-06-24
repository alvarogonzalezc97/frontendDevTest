import { createBrowserRouter, Navigate } from 'react-router'
import ProductList from '../../pages/ProductList/ProductList'

export const router = createBrowserRouter(
    [
        { path: '/', element: <ProductList /> },
        { path: '/product/:id', element: <h1>PDP</h1> },
        { path: '*', element: <Navigate to="/" /> }
    ]
)