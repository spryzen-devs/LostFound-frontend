import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RoutingPage() {
    const navigate = useNavigate();

    const handleSignUp = () => {
        navigate("/signup");
    };

    return(
        <div>
            <h1>Welcome to Campus Lost and Found</h1>
            <button onClick={handleSignUp}>Sign Up</button>
            <button onClick={() => navigate("/login")}>Login</button>
        </div>
    )
}

export default RoutingPage;