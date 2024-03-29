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
import CartContextProvider from "./components/CartContext/CartContext";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import ThankYou from "./components/ThankYou"
import CheckOutPrimerCompra from "./components/CheckOutPrimerCompra";

function App() {
  return (
    <div>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path={"/"} element={<ItemListContainer />} />
            <Route path={"/category/:id"} element={<ItemListContainer />} />
            <Route path={"/item/:id"} element={<ItemDetailContainer />} />
            <Route path={"/cart"} element={<Cart />} />
            <Route path={"/checkout"} element={<Checkout />} />
            <Route path={"/checkoutprimercompra"} element={<CheckOutPrimerCompra />} />
            <Route path={"/thankyou/:id"} element={<ThankYou />} />
            <Route path={"*"} element={<Error404 />} />
          </Routes>
          <Banners />
          <Promocion />
          <Footer />
        </BrowserRouter>  
      </CartContextProvider>
    </div>
  );
}

export default App;
