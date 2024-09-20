import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About.jsx";
import { Projects } from "./pages/Projects.jsx";
import { Services } from "./pages/Services.jsx";
import { Contact } from "./pages/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/vite-react/",
    element: <App />,
    children: [
      {
        path: "/vite-react/",
        element: <Home />,
      },
      {
        path: "/vite-react/About",
        element: <About />,
      },
      {
        path: "/vite-react/Projects",
        element: <Projects />,
      },
      {
        path: "/vite-react/Services",
        element: <Services />,
      },
      {
        path: "/vite-react/contact",
        element: <Contact />,
      },
    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
