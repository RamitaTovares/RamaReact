import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {doc, getDoc, getFirestore} from "firebase/firestore";
import arrayProductos from "./json/productos.json";
import ItemDetail from "./ItemDetail";
import Loading from "./Loading";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const { id } = useParams();
  const[loading, setLoading] =useState(true);

/*     useEffect(() => {
    const promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(arrayProductos.find((item) => item.id === parseInt(id)));
      }, 2000);
    });
    promesa.then((data) => {
      setItem(data);
    });
  }, [id]); */

  useEffect(() => {
    const db = getFirestore();
    const item = doc(db, "items", id);
    getDoc(item).then((snapShot) => {
        if (snapShot.exists()) {
            setItem({id:snapShot.id, ...snapShot.data()});
            setLoading(false);
        } else {
            console.log("El Producto No Existe!");
        }
    });
}, []);

  return (
    <div className="container my-5">
         {loading ? <Loading /> : <ItemDetail item={item} />}
    </div>
  );
};

export default ItemDetailContainer;
