import { Fragment } from "react";
import "./App.css"
import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About.jsx";
import { Contact } from "./pages/Contact.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '/contact',
      element: <Contact />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
};



export default App;
