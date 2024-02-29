import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { Provider } from 'react-redux';
import store from './store/slices/shoppingCart';

import MainPage from './pages/MainPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import PhotosPage from './pages/PhotosPage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailedPage from './pages/ProductDetailedPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage/>,
  },
  {
    path: "/about",
    element: <AboutPage/>,
  },
  {
    path: "/photos",
    element: <PhotosPage/>,
  },
  {
    path: "/contact",
    element: <ContactPage/>,
  },
  {
    path: "/products",
    element: <ProductsPage/>
  },
  {
    path: "/products/:id",
    element: <ProductDetailedPage/>
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
