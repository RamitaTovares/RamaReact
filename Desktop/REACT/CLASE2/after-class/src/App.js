import React from "react";
import "./App.scss";
import Banners from "./components/Banners";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Promocion from "./components/Promocion";
import ItemListContainer from "./components/ItemListContainer";


function App() {
  return (
  <div>
    <Header />  
    <ItemListContainer greeting={"¡Bienvenidos a Ferreteria Servifer!"} />
    <Banners /> 
    <Promocion />
    <Footer />
  </div>
  );
} 

export default App;
