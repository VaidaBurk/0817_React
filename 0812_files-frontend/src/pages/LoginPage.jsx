import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import logo from '../images/Logo.png';


function LoginPage() {

    const [register, setRegister] = useState(false);

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
                                <button type="button"
                                    className={register ? "btn btn-outline-info me-2" : "btn btn-info me-2"}
                                    onClick={() => { setRegister(false) }}>LOGIN</button>
                                <button
                                    className={!register ? "btn btn-outline-info me-2" : "btn btn-info me-2"}
                                    onClick={() => { setRegister(true) }}>REGISTER</button>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {!register && <Login></Login>}
                {register && <Register></Register>}
            </div>
            </>
    )
}

export default LoginPage;