import React from "react";
import { Link } from "react-router-dom";
const Item = ({ item }) => {
  return (
    <div className="col-md-6 card-body mt-3">
      <Link to={"/item/" + item.id} className=" text-dark text-decoration-none ">
        <div className="text-light card-body">
          <img src={item.imagen} className="mt-3" alt={item.nombre} />
          <div className="card-body text-center p-3">
            <p className="text-center">{item.nombre}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default Item;
