import React from "react";

function Login() {
    return(
    <>
        <hr id='newPollhr'></hr>
        <h2 className="signupHTag">Login</h2>
        <form className="signupPage">
                <input  type="text" name="email" className="signupEmailForm" placeholder="email" required/>
                <input  type="text" name="password" className="signupEmailForm" placeholder="password" required/>
                <button onClick={handleLogin}>Login</button>
            </form>
        
    </>
    )

    function handleLogin(event) {

    }
}

export default Login;