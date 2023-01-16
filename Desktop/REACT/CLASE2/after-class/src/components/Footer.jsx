import React from "react";
const Footer = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6">
          <a href="/" rel="noreferrer" className="mx-1">
            <img src="/images/LOGOFB.png" alt="logofb" />
          </a>
          <a href="/" rel="noreferrer" className="mx-1">
            <img src="/images/logoig.png" alt="logoig" />
          </a>
        </div>
        <div className="col-md-6 d-flex justify-content-end">
          <a
            href="/"
            target="_blank"
            className="mx-1"
            rel="noreferrer"
          >
            <img src="/images/appstore.png" alt="App Store" width="115" />
          </a>
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className="mx-1"
          >
            <img src="/images/googleplay1.png" alt="Play Store" width="129" />
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-md-10">
          <ul className="nav nav">
            <li className="nav-item">
              <a className="nav-link text-white " href="/" target="_blank"rel="noreferrer" >
                Política de Privacidad
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/" target="_blank"rel="noreferrer" >
                Defensa del Consumidor
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/" target="_blank " rel="noreferrer">
                Protección de datos personales
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/" target="_blank" rel="noreferrer">
                Contacto
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-2 text-end">
          <p>
            <img src="/images/logosf4.png" alt="logo sf" width="40" /> © FerreSF
            2022
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
