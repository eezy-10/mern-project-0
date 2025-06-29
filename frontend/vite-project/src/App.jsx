import { useState, useEffect } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  //Fetching Users
  useEffect(() => {
    axios.get('http://localhost:5000/api/users')
    .then(res => setUsers(res.data))
    .catch(err => console.error(err));
  }, []);

  //Adding User
  const addUser = (user) => {
    axios.post('http://localhost:5000/api/users', user)
    .then(res => setUsers([...users, res.data]))
    .catch(err => console.log(err));
    setUsers([...users, user]);
  };

  return (
    <div>
      <h1>User Management</h1>
      <UserForm onAdd={addUser} />
      <UserList users={users} />
    </div>
  )
}

export default App;