import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

function Login() {

    const navigate = useNavigate();
    const {setUsername,setPassword} = useContext(UserContext);

    const proceedLogin = (e) => {
       
             e.preventDefault();
            navigate("/home");
 }
    
    return(
        <div>
            <form>
                <label htmlFor="username">username</label>
                <input type="text" name="username" id="username" 
                onChange={e => setUsername(e.target.value)} />
                <br/>
                <label htmlFor="password">password</label>
                <input type="password" name="password" id="password" 
                onChange={e => setPassword(e.target.value)} />
                <br/>
                <button type="submit" onClick={proceedLogin}>Submit</button>
            </form>
        </div>
    )
}

export default Login;