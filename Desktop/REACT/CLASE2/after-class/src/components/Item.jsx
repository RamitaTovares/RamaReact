import React from "react";
import { Link } from "react-router-dom";
const Item = ({ item }) => {
  return (
    <div className="col-md-6">
      <Link to={"/item/" + item.id} className="text-dark text-decoration-none">
        <div className="text-light card-body vw-100">
          <img src={item.imagen} className="w-10 h-10" alt={item.nombre} />
          <div className="card-body text">
            <p className="card-text">{item.nombre}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default Item;
