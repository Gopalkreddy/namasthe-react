import React, { lazy,Suspense } from "react"; //this is the default import it will get react from node_modules
import ReactDOM from "react-dom"; //this is the default import it will get react-dom from node_modules
import ReactDOM from "react-dom/client";   

import {createBrowserRouter,RouterProvider, BrowserRouter,  Routes, Route,Outlet } from "react-router";

import Header from "./components/Header";

import Body from "./components/Body";
import About from "./components/About";
import { Contact } from "./components/Contact";

import { Error } from "./components/Error";
import RestaurantInfo from "./components/RestaurantInfo";
;

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout=()=>{
    return(<div className="app">   
    <Header/>
    <Outlet/>
   
      </div>
    )
}

const browserRouting = createBrowserRouter([
  { path: "/", element: <AppLayout />,children:[
    {path: "/", element: <Body/>},
    {path: "/about", element: <About/>},
    {path: "/contact", element: <Contact/>},
    {path: "/grocery", element: <Suspense fallback={<h1>Loading Grocery info</h1>}><Grocery/></Suspense> },
    {path: "/restaurent/:resId", element: <RestaurantInfo/>}

  ],errorElement: <Error/> }
]);


// const routing = (
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<AppLayout />} />
//       <Route path="about" element={<About />} />
//     </Routes>
//   </BrowserRouter>
// );

const root = ReactDOM.createRoot(document.getElementById("root"));


// root.render( 
//     routing
// );

root.render(<RouterProvider router={browserRouting}/>);
    