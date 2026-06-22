import { createBrowserRouter, Navigate } from 'react-router'

export const router = createBrowserRouter(
    [
        { path: '/', element: <h1>PLP</h1> },
        { path: '/product/:id', element: <h1>PDP</h1> },    
        { path: '*', element: <Navigate to="/" /> }
    ]
)