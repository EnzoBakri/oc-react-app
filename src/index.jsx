import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Header from './components/Header'
import Error from './components/Error'
import './styles/index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    errorElement: <Error />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/survey',
    element: <Survey />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
