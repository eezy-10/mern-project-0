function UserList({ users }) {
    return (
        <ul>
            {users.map((user,index) => (
                <li key={index}> {user.name} - Age: {user.age}</li>
            ))}
        </ul>
    )
}

export default UserList;