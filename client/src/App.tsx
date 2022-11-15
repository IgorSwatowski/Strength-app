import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { deleteUser } from './api/deleteUser';
import { getUsers, TUser } from './api/getUsers';
import './App.css'

function App() {

  const [users, setUsers] = useState<TUser[]>([]);

  async function handleDeleteUser(userId: string) {
    await deleteUser(userId)
    setUsers(users.filter(user => user._id !== userId)) // Optimistic update, more performance
  }

  useEffect(() => {
    async function fetchUsers() {
      const newUsers = await getUsers();
      setUsers(newUsers)
    }
    fetchUsers();
  }, [])


  return (
    <div className="App">
      <div className="users">
        {users.map((user) => (
          <li key={user._id}>
            <Link to={`/profile/${user._id}`}>{user.firstName}</Link>
            <button onClick={() => handleDeleteUser(user._id)}>Delete</button>
          </li>
        ))}
      </div>
    </div>
  )
}

export default App
