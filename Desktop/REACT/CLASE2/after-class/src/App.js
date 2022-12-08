import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "./components/Error404";
import "./App.scss";
import Banners from "./components/Banners";
import Footer from "./components/Footer";
import Promocion from "./components/Promocion";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from "./components/NavBar";



function App() {
  return (
  <div>
    <BrowserRouter>
    <NavBar />
    <Routes> 
    <Route path={"/"} element={<ItemListContainer />} />
        <Route path={"/category/:id"} element={<ItemListContainer />} />
        <Route path={"/item/:id"} element={<ItemDetailContainer />} />
        <Route path={"*"} element={<Error404 />} /> 
    </Routes> 
    <Banners /> 
    <Promocion />
    <Footer />  
    </BrowserRouter>
  </div>
  );
} 

export default App;
