import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Dijual from "./Pages/Dijual";
import Disewa from "./Pages/Disewa";
import PropertyBaru from "./Pages/PropertyBaru";
import Panduan from "./Pages/Panduan";
import Products from "./Pages/Products";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Dijual" element={<Dijual />} />
        <Route path="/Disewa" element={<Disewa />} />
        <Route path="/PropertyBaru" element={<PropertyBaru />} />
        <Route path="/Panduan" element={<Panduan />} />
        <Route path="/products" element={<Products />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
