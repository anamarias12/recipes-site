import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home/Home'
import "./App.css";

const router = createBrowserRouter([
  {path:"/",element:<Home/>}
])

function App() {
  return (
    <>
    <RouterProvider router ={router}></RouterProvider>
    </>
  );
}

export default App;