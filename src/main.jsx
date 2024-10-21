import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/Root.jsx'
import Header from './routes/Header.jsx';
import Footer from './routes/Footer.jsx';
import Homepage from './routes/Homepage.jsx';
import Shopping from './routes/Shopping.jsx';
import Itemcard from './routes/Itemcard.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router= {router} />
  </StrictMode>,
)
