import { useState } from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function SignUp() {
    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/users/register",{
            name : name,
            email : email,
            password : password
        });

        alert("SignUp successfully done");
        navigate("/login");
    };
    return(
        <div>
            <h1>Sign Up</h1>
            <p>New user Registration</p>

            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoComplete="off"
                />
                <br/>
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
                <button type="submit">SignUp</button>
            </form>
        </div>
    )
}

export default SignUp;