import React, { useEffect, useState } from 'react'
import './App.css'

type TUser = {
  firstName: string;
  _id: string;
}

function App() {

  const [firstName, setFirstName] = useState('');
  const [users, setUsers] = useState<TUser[]>([]);

  async function handleCreateUser(e: React.FormEvent) {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/usersList", { // Optimistic update, more performance
      method: "POST",
      body: JSON.stringify({
        firstName,
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const user = await response.json(); // Optimistic update, more performance
    setUsers([...users, user]) // Optimistic update, more performance
    setFirstName("")
  }

  async function handleDeleteUser(userId: string) {
    await fetch(`http://localhost:5000/usersList/${userId}`, {
      method: "DELETE",
    })
    setUsers(users.filter(user => user._id !== userId)) // Optimistic update, more performance
  }

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch("http://localhost:5000/usersList");
      const newUsers = await response.json();
      setUsers(newUsers)
      console.log(newUsers)
    }
    fetchUsers();
  }, [])


  return (
    <div className="App">
      <div className="users">
        {users.map((user) => (
          <li key={user._id}>
            {user.firstName}
            <button onClick={() => handleDeleteUser(user._id)}>Delete</button>
          </li>
        ))}
      </div>
      <form onSubmit={handleCreateUser}>
        <label htmlFor="firstName">Register your account now.</label>
        <input id="firstName"
          value={firstName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
            setFirstName(e.target.value)
          }
        />
        <button>Register</button>
      </form>
    </div>
  )
}

export default App
