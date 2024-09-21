import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css';

import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About.jsx";

const router=createBrowserRouter([
  {
    path: "/vite-react/",
    element: <App />,
    children: [
      {
        path: "/vite-react",
        element: <Home />,
      },
      {
        path: "/vite-react",
        element: <About />,
      },
    ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

