import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import { PrivateRoute } from './PrivateRoute/PrivateRoute'
import { Main } from './Main/Main'
import { Tabs } from './Tabs/Tabs'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <Main />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: '/tabs',
    element: <Tabs />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
