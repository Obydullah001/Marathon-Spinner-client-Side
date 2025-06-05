import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { router } from './router/routes.jsx'
import { RouterProvider } from 'react-router'
import AuthProvider from './assets/AuthProvider/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
       <RouterProvider router={router} />
       <Toaster position='top-right'></Toaster>
    </AuthProvider>
  </StrictMode>,
)
