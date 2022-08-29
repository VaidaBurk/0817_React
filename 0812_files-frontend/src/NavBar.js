import React from "react";
import { Link, Outlet } from "react-router-dom";

function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1 text-light">Music Bands</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <div className="nav-link">
                                <Link to="/">Home</Link>
                            </div>
                            <div className="nav-link">
                                <Link to="/loadPage">Load Page</Link>
                            </div>
                            {/* <a class="nav-link" href="#">Pricing</a>
                            <a class="nav-link disabled">Disabled</a> */}
                        </div>
                    </div>
                </div>
            </nav>
            <Outlet></Outlet>
        </>)
}

export default NavBar;