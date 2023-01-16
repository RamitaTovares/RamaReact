/* import React from "react";
const CartWidget = () => {
  return (
    <button type="button" className="btn btn-white position-relative">
      <img src="/images/logocarrito.png" alt="Carro" width="32" />
      <span className="position-center top-0 start-100 translate-middle badge rounded-pill bg-primary">
        1
      </span>
    </button> 
  );
};
export default CartWidget; */


import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext/CartContext.jsx";

/* const BotonCarrito = ({total}) => {
    return (
        <Link to={"/cart"} className="btn btn-warning position-relative">
            <img src="/images/logocarrito.png" alt="Carrito" width="32" />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{total}</span>
        </Link>
    )
}

  const CartWidget = () => {
      const {cartTotal} = useContext(CartContext);

      return cartTotal() > 0 ? <BotonCarrito total={cartTotal()} />  : "";
  }

  export default CartWidget; */

  const CartWidget = () => {
    const {cartTotal} = useContext(CartContext);

    return (
      <Link to={"/cart"} className="btn btn-info position-relative">
          <img src="/images/logocarrito.png" alt="Carrito" width="32" />
          {cartTotal() > 0 &&<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartTotal()}</span>}
      </Link>
  )
     
}

export default CartWidget;