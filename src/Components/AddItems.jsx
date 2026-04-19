import { useState } from "react";
import axios from "axios";

function AddItems() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [status, setStatus] = useState("LOST");
    const userString = localStorage.getItem("user");
    const user = userString ? JSON.parse(userString) : null;
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await axios.post("http://localhost:8080/item/add",{
                name : name,
                description : description,
                location : location,
                status : status,
                userId : user.id
            })
            alert("Item added successfully");
        }catch(error){
                alert("Failed to add item" + error.message);
        }
    }

    return (
        <div>
            <h1>Add Item</h1>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoComplete="off"
                />
                <br/>
                <input
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    autoComplete="off"
                />
                <br/>
                <input
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    autoComplete="off"
                />
                <br/>
                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value="LOST">LOST</option>
                    <option value="FOUND">FOUND</option>
                </select>
                <br/>
                <button type="submit">Add Item</button>
            </form>
        </div>
    )
}

export default AddItems;