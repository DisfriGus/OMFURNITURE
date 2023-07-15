import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import DetailPage from "./Pages/DetailPage";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Category" element={<Products/>}/>
        <Route path="/products" element={<Products /> }/>
        <Route path="/Rooms" element={<Products/>}/>
        <Route path="/Dormitory" element={<Products/>}/>
        <Route path="/DetailPage" element={<DetailPage/>}/>
        <Route path="/cart" element={<Cart />}/>

        


      </Routes>
    </BrowserRouter>
  );
}

export default App;
