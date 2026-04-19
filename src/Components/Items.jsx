import { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Items() {
    const[items,setItems] = useState([]);
    const userString = localStorage.getItem("user");
    const user = userString ? JSON.parse(userString) : null;
    const navigate = useNavigate();
    useEffect(() => {
        const fetchItems = async() => {
            const response = await axios.get("http://localhost:8080/item");
            setItems(response.data);
        }
        fetchItems();
    },[]);

    return (
        <div>
            <h1>Welcome,{user.name}</h1>
            <h1>Items</h1>
            <button onClick={() => navigate("/add-item")}>Add Item</button>
            {items.map((item) => (
                <div key={item.id}>
                    <h2>{item.name}</h2>
                    <h4>{item.description}</h4>
                    <h3>{item.location}</h3>
                    <h4>{item.status}</h4>
                </div>
            ))}
        </div>
    )
}

export default Items;