
import React from "react";

const CartWidget = () => {
    return (
        <button type="button" className="btn btn-white position-relative">  
            <img src="images/logocarrito.png" alt="Carro" width="32" />
            <span className="position-center top-0 start-100 translate-middle badge rounded-pill bg-primary">1</span>
        </button>
    )
}

export default CartWidget;