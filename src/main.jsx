import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from '@material-tailwind/react'
import { RouterProvider } from 'react-router-dom'
import Router from './Routes/PublicRoutes.jsx'
import AuthProviders from './Providers/AuthProviders.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
    <AuthProviders>
    <RouterProvider router={Router}/>
    </AuthProviders>
    </ThemeProvider>
  </StrictMode>,
)
