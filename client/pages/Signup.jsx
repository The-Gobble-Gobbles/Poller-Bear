import React, { useState } from "react";
//Simple: create form with two text fields and add email and password
    //signup sends a post request to db containing name and password
    //check other inputs for bootstrap styling they used to keep it consistent
    //test would check if db contains values sent or something?  
    //How to test db w jest

function Signup() {

    const [user, setUser] = useState({
        "email": '',
        "password": ''
    })

    async function saveUser(data) {
        const response = await fetch('db url', {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data),
        })
        return response.json();
    }

    const handleSubmit = e => {
        e.preventDefault();
        setUser({
            "email": email.value,
            "password": password.value
        })
        console.log(user)
    } 
    return (
        <>
            <hr id='newPollhr'></hr>
            <h2 className="signupHTag">Signup</h2>
            <form className="signupPage">
                <input  type="text" name="email" className="signupEmailForm" placeholder="email" required/>
                <input  type="text" name="password" className="signupEmailForm" placeholder="password" required/>
                <button type="submit" className="signupSubmitButton">Signup</button>
            </form>
        </>

    )
}

export default Signup;
