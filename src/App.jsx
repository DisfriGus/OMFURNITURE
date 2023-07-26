import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import DetailPage from "./Pages/DetailPage";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import Article from "./Pages/Article";
import { Provider } from 'react-redux';
import { store } from '../src/Component/Config/Redux'



function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Category" element={<Products/>}/>
          <Route path="/products" element={<Products /> }/>
          <Route path="/Rooms" element={<Products/>}/>
          <Route path="/Dormitory" element={<Products/>}/>
          <Route path="/DetailPage/:title" element={<DetailPage/>}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/article" element={<Article />}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
