import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from './images/Logo.png';

function NavBar() {

    const onLogout = () => {
        sessionStorage.removeItem("user");
        window.location.reload();
    }
    return (
        <>
            <div className="navbar navbar-dark navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <div className="navbar mx-3 my-1">
                        <a>
                            <img src={logo} alt="music store" width="80"></img>
                        </a>
                        <div className="navbar-nav ms-4">
                            <ul className="navbar-nav">
                                <button className="btn btn-outline-light me-2">
                                    <Link className="nav-link active text-warning" to="/">HOME</Link>
                                </button>
                                <button className="btn btn-outline-light">
                                    <Link className="nav-link active text-warning" to="/loadPage">LOAD PAGE</Link>
                                </button>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <span className="navbar-text text-light align-middle">User: {JSON.parse(sessionStorage.getItem("user")).username}</span>
                        <button className="btn btn-outline-warning m-3" onClick={onLogout}>Log Out</button>
                    </div>
                </div>
            </div>

            <Outlet></Outlet>
        </>)
}

export default NavBar;