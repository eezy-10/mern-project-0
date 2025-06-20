import { useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
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