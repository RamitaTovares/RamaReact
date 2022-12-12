import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import arrayProductos from "./json/productos.json";
import ItemList from "./ItemList";
import Loader from "./Loader";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

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

    promesa.then((data) => setItems(data)).finally(() => setLoading(false));
  }, [id]);

  return (  
    <div className="container">
      {loading ? <Loader /> : <ItemList items={items} />}
    </div>
  );
};

export default ItemListContainer;
