import { Fragment } from "react";
import "./App.css"
import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About.jsx";
import { Contact } from "./pages/Contact.jsx";
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import { AppLayout } from "./components/AppLayout.jsx";
import {ErrorPage} from "./components/ErrorPage.jsx";
import { News } from "./pages/News.jsx";
import { GetApiData } from "./Api/GetApiData.jsx";
import { AxiosExm } from "./pages/AxiosExm.jsx";
import { Task } from "./Redux/Task.jsx";
const App = () => {

  const router = createBrowserRouter([
    {
      path : "/",
      element : <AppLayout/>,
      // errorElement : <ErrorPage/>,
      ErrorBoundary : ErrorPage,
      children : [
          {
            path: '/',
            element: <Home />,
          },
          {
            path: '/about',
            element: <About />,
          },
          {
            path: '/news',
            element: <News />,
            loader : GetApiData
          },
          {
            path: '/contact',
            element: <Contact />,
          },
          {
            path : '/axiosexm',
            element : <AxiosExm/>
          },
          {
            path : '/task',
            element : <Task/>
          }
      ]
    },
  ]);

  return (
    <RouterProvider router={router} />
    // <BrowserRouter>
    //   <Routes>
    //       <Route path="/" element={<Home/>}/>
    //       <Route path="/about" element={<About/>}/>
    //       <Route path="/contact" element={<Contact/>}/>
    //   </Routes>
    // </BrowserRouter>
  );
};



export default App;
