function NavBar({ openPage }) {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <div id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <button className="btn" onClick={() => openPage("HomePage")}>Home</button>
                    </li>
                    <li className="nav-item">
                        <button className="btn" onClick={() => openPage("LoadPage")}>Load from file</button>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled">Disabled</a>
                    </li>
                </ul>
            </div>

        </nav>)
}

export default NavBar;