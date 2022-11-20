import React from "react";

const Promocion = () => {
    return (
        <div className="container-fluid bg-white">
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-2">
                        <img src="./images/logosf1.png " alt="Ferreteria SF" width="123" />
                    </div>
                    <div className="col-md-8 d-flex align-items-center">
                        <div>
                            <h2>Acercate a nuesras tiendas</h2>
                            <p>Acercate a nuesras tiendas y obtené promociones abonando de CONTADO!</p>
                        </div>
                    </div>
                    <div className="col-md-2 d-flex align-items-center text-end">
                        <a href="https://www.ferreteriasf.com" className="btn btn-light" target="_blank">Descargar ahora</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Promocion;