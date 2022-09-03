import { useEffect } from "react";
import { useState } from "react";

function Register() {

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");
    const [userRoles, setUserRoles] = useState([]);
    const [userRole, setUserRole] = useState(0);

    useEffect(() => {
        if (userRoles.length === 0) {
            const headers = new Headers();
            headers.append("Content-type", "application/jsno");
            fetch("http://localhost:80/08_12_Files/getUserRoles.php", {
                method: "GET",
                headers: headers
            }).then((response) => {
                response.json().then((body) => {
                    setUserRoles(body);
                })
            })
        }
    }, [])

    const onRegister = (event) => {
        event.preventDefault();
        if (password !== passwordRepeat) {
            alert("Passwords don't match.")
            return;
        }
        const headers = new Headers();
        headers.append("Content-type", "application/json");
        fetch("http://localhost:80/08_12_files/registerUser.php", {
            method: "POST",
            headers: headers,
            body: JSON.stringify({
                username: username,
                password: password,
                userRole: userRole,
            })
        }).then((response) => {
            response.json().then((body) => {
                if (body.userCreated === true) {
                    alert("New user registered");
                }
                else {
                    alert(body.error);
                }
            })
        })
    }

    return (
        <>
            <div className="m-5">
                <form method="POST" onSubmit={(event) => { onRegister(event) }}>
                    <select className="form-select form-select mb-4" id="userRole" onChange={(event) => { setUserRole(event.target.value) }}>
                        <option selected>Select user role</option>
                        {userRoles.map((userRole) => {
                            return (
                                <option key={userRole.id} value={userRole.id}>{userRole.text}</option>)
                            })
                        }
                    </select>

                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="username">Username</label>
                        <input type="text" className="form-control" id="username" onChange={(event) => { setUserName(event.target.value) }} />
                    </div>


                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="password">Password</label>
                        <input type="password" id="password" className="form-control" name="password" onChange={(event) => { setPassword(event.target.value) }} />
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="password-repeat">Repeat Password</label>
                        <input type="password" id="password-repeat" className="form-control" onChange={(event) => { setPasswordRepeat(event.target.value) }} />
                    </div>

                    <button type="submit" className="btn btn-info btn-block">REGISTER</button>
                </form>
            </div>
        </>
    );
}

export default Register;