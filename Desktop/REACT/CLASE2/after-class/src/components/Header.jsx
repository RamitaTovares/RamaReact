import React from "react";
import CartWidget from "./CartWidget";
import NavBar from "./NavBar";

const Header = () => {
    return (
        <div className="container .bg-info.bg-gradient">
            <div className="row">
                <div className="col-md-12 .bg-info.bg-gradient">
                    <NavBar />
                </div>
                <div className="col-md-6 d-flex align-items-center justify-content-end">
                    <CartWidget />
                </div>
            </div>
        </div>
    )
}

export default Header;