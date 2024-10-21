import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';
import Root from './routes/Root.jsx'
import Shopping from './routes/Shopping.jsx';
import ErrorPage from './routes/ErrorPage.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
    path="/"
    element={<Root />}
    errorElement={<ErrorPage />}
    >
      <Route 
      path="/Shopping"
      element={<Shopping />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router= {router} />
  </StrictMode>,
)
