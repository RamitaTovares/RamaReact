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
            </div>
        </div>
    )
}

export default Header;