import { set } from "mongoose";
import { useState } from "react";

function UserForm({ onAdd }) {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd({ name, age: Number(age) });
        setName("");
        setAge("");
    }
}

return (
    <form onSubmit={handleSubmit}>
        <input value={ name } onChange={(e) => setName(e.target.value)} placeholder="Name" required />
        <input value={ age } onChange={(e) => setName(e.target.value)} placeholder="Age" type="number" required />
        <button type="submit">Add User</button>
    </form>
);

export default UserForm;