import React from "react";
//Simple: create form with two text fields and add email and password
    //signup sends a post request to db containing name and password
    //check other inputs for bootstrap styling they used to keep it consistent
    //test would check if db contains values sent or something?  
    //How to test db w jest
    /*

    const [user, setUser] = useState({
        "email": '',
        "password": ''
    })

    const handleSubmit = e => {
        e.preventDefault();
    } 


    <form>
        <div className="input-group mb-3">
            <input  type="text" name="email" className="form-control" placeholder="email" required/>
            <input  type="text" name="password" className="form-control" placeholder="password" required/>
            <button type="submit" >Signup</button>
        </div>
    </form>
    */
function Signup() {
    return (
        <>
            <h1>Signup</h1>
            <form>
                <div className="input-group mb-3">
                <input  type="text" name="email" className="form-control" placeholder="email" required/>
                <input  type="text" name="password" className="form-control" placeholder="password" required/>
            <button type="submit" >Signup</button>
        </div>
    </form>
        </>

    )
}

export default Signup;
