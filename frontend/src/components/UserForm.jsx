import { useState } from "react";

function UserForm({ onAdd }) {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");

    const style = {
        width: '100%',
        hieght: '100%'
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd({ name, age: Number(age), email});
        setName("");
        setAge("");
        setEmail("");
    }
    const center ={
        textAlign: 'center'
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input style={style} value={ name } onChange={(e) => setName(e.target.value)} placeholder="Name" required /> <br />
                <input style={style} value={ age } onChange={(e) => setAge(e.target.value)} placeholder="Age" type="number" required /> <br />
                <input style={style} value={ email } onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" required /> <br />
                <div style={center}><button type="submit">Add User</button></div>
            </form>
        </div>
    );
}


export default UserForm;