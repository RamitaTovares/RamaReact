import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
/* import arrayProductos from "./json/productos.json"; */
import ItemList from "./ItemList";
import Loader from "./Loader";
import { addDoc, collection, getDocs, getFirestore, query, where, limit } from "firebase/firestore";
import Item from "./Item";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");
    const q = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
    //const q = query(itemsCollection, where("precio", "<", 1000), limit(3)); //Consulta de Filtrado

    // En caso de tener ID, filtro los Productos por ID, sino traigo la collection completa
  /*   const q = id
      ? query(itemsCollection, where("categoria", "==", id))
      : itemsCollection; */

    getDocs(q).then((snapShot) => {
      setItems(snapShot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, [id]);

  return (
    <div className="container">
      {/* loading ? <Loader /> :  */<ItemList items={items} />}
    </div>
  );
};

export default ItemListContainer;
