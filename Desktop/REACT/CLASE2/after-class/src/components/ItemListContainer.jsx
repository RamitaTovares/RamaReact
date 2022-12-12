import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import arrayProductos from "./json/productos.json";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
          id
            ? arrayProductos.filter((item) => item.categoria === id)
            : arrayProductos
        );
      }, 2000);
    });

    promesa.then((data) => {
      setItems(data);
    });
  }, [id]);

  return (
    <div className="container">
      <ItemList items={items} />
      <ItemCount stock={4} />
    </div>
  );
};

export default ItemListContainer;
