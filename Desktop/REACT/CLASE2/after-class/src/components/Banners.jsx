import React from "react";
const Banners = () => {
  return (
    <div className="container ">
      <div className="row gx-5 mb-5 gap-5">
        <div className="col-md-6 text-center shadow p-3 mx-auto bg-body rounded ">
          <p>
            <img src="/images/baner1.jpg" alt="Wakanda" className="img-fluid " />
          </p>
          <h4>Conocenos!</h4>
          <p>
            <a
              href="www.ferreteriasf.com"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Ver Más
            </a>
          </p>
        </div>
        <div className="col-md-6 text-center shadow p-3 mx-auto bg-body rounded ">
          <p>
            <img
              src="/images/baner3.jpg"
              alt="Pedí la App"
              className="img-fluid"
            />
          </p>
          <h4>Entra y disfruta de nuestros productos</h4>
          <p>Ahora disponible para compra online</p>
          <p>
            <a
              href="https://g.page/ferreteriasflores?share"
              rel="noreferrer"
              target="_blank" 
              className="btn btn-primary"
            >
              Ver Más
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Banners;
