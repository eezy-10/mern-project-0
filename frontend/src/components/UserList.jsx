function UserList({ users }) {
    return (
        <ul>
            {users.map((user,index) => (
                <li key={index}> {user.name} - Age: {user.age} - Email: {user.email}</li>
            ))}
        </ul>
    )
}

export default UserList;