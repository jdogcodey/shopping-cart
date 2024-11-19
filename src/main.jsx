import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';
import Root from './routes/Root.jsx'
import Homepage from './routes/Homepage.jsx';
import Shopping, { loader as shoppingLoader } from './routes/Shopping.jsx';
import ErrorPage from './routes/ErrorPage.jsx';
import Checkout from './routes/Checkout.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
    path="/"
    element={<Root />}
    errorElement={<ErrorPage />}
    >
      <Route index element={<Homepage />} />
      <Route 
      path="/shopping"
      element={<Shopping />} 
      loader={shoppingLoader}/>
      <Route path='/checkout'
      element={<Checkout />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router= {router} />
  </StrictMode>,
)
