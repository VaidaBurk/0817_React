import {useState} from "react";

function Login() {

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [roleID, setRoleId] = useState(0);

    const onLogin = (event) => {
        const headers = new Headers();
        headers.append("Content-type", "application/json");
        fetch("http://localhost/08_12_Files/loginUser.php", {
            method: "POST",
            headers: headers,
            body: JSON.stringify({
                username: username,
                password: password
            })
        }).then((response) => {
            response.json().then((body) => {
                console.log(body);
                if (body.userExists === false){
                    alert ("Login failed. Please check your ussername and password.")
                }
                else {
                    sessionStorage.setItem("user", JSON.stringify({username: username, roleID: roleID}));
                    window.location.reload();
                }
            })
        })

        event.preventDefault();
    }

    return (
        <>
            <div className="m-5">
                <form className="form" onSubmit={(event) => {onLogin(event)}} method="POST">

                    <div className="form-outline mb-4">
                        <input type="text" className="form-control" id="username" onChange={(event) => {setUserName(event.target.value)}} />
                        <label className="form-label" htmlFor="userName">Username</label>
                    </div>

                    <div className="form-outline mb-4">
                        <input type="password" id="password" className="form-control" onChange={(event) => {setPassword(event.target.value)}}/>
                        <label className="form-label" htmlFor="form1Example2">Password</label>
                    </div>

                    {/* <div class="row mb-4">
                        <div class="col d-flex justify-content-center">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="form1Example3" checked />
                                <label class="form-check-label" for="form1Example3"> Remember me </label>
                            </div>
                        </div>

                        <div class="col">
                            <a href="#!">Forgot password?</a>
                        </div>
                    </div> */}

                    <button type="submit" className="btn btn-info btn-block">LOGIN</button>
                </form>
            </div>
        </>
    );
}

export default Login;