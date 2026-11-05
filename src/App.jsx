import { Fragment } from "react";
import "./App.css"
import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About.jsx";
import { Contact } from "./pages/Contact.jsx";
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
const App = () => {

  // const router = createBrowserRouter([
  //   {
  //     path: '/',
  //     element: <Home />,
  //   },
  //   {
  //     path: '/about',
  //     element: <About />,
  //   },
  //   {
  //     path: '/contact',
  //     element: <Contact />,
  //   },
  // ]);

  return (
    // <RouterProvider router={router} />
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
};



export default App;
