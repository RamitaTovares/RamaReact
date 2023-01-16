import React, { useState, useEffect, useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "./CartContext/CartContext.jsx";

const ItemDetail = ({item}) => {
    const {addItem} = useContext(CartContext);
    const [itemStock, setItemStock] = useState(0);

    const onAdd = (quantity) => {
        setItemStock(itemStock - quantity);
        addItem(item, quantity);
    }

    useEffect(() => {
        setItemStock(item.stock);
    }, [item]);

    return (
        <div className="row">
            <div className="col-md-4 offset-md-2 text-center px-3">
                <img src={item.imagen} alt={item.nombre} className="img-fluid text-center" />
            </div>
            <div className="col-md-4 text-center">
                <h1>{item.nombre}</h1>
                <h5>{item.watts} watts</h5>
                <p>{item.descripcion}</p>
                <p><b>${item.precio}</b></p>
                <ItemCount stock={item.stock} onAdd={onAdd} />
            </div>
        </div>
    )
}

export default ItemDetail;