import { use, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login() {
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            const user = await axios.post("https://lost-found-3-5yj2.onrender.com/users/login",{
            email : email,
            password : password
        })

        localStorage.setItem("user",JSON.stringify(user.data));
        alert("Login successfully done");
        navigate("/items");
        }
        catch(error){
            alert("Login failed" + error.message);
        }
    }
    return(
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Email"
                    value={email}   
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="off"
                />
                <br/>
                <input
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="new-password"
                />
                <br/>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;