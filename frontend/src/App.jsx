import { useState, useEffect } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  const style = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };
  //Fetching Users
  useEffect(() => {
    axios.get('http://localhost:3000/api/users/')
    .then(res => setUsers(res.data))
    .catch(err => console.error(err));
  }, []);

  //Adding User
  const addUser = (user) => {
    axios.post('http://localhost:3000/api/users/', user)
    .then(res => setUsers([...users, res.data]))
    .catch(err => console.log(err));
    setUsers([...users, user]);
  };
  const center = {
    textAlign: 'center',
  }
  return (
    <div style={style}>
      <div>
        <h1 style={center}>User Management</h1>
        <UserForm onAdd={addUser} />
        <UserList users={users} />
      </div>
    </div>
  )
}

export default App;