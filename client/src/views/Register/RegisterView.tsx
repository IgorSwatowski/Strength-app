import React, { useState } from 'react'
import { addUser } from '../../api/addUser';
import { TUser } from '../../api/getUsers';


const RegisterView = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [users, setUsers] = useState<TUser[]>([]);

    async function handleCreateUser(e: React.FormEvent) {
        e.preventDefault();
        const user = await addUser(firstName, lastName, age, email, password);
        setUsers([...users, user])
        setFirstName("")
        setLastName("")
        setAge("")
        setEmail("")
        setPassword("")
    }
    
    return (
        <div className="register-form">
            <form onSubmit={handleCreateUser} id="form">
                <div className="form-firstName">
                    <label htmlFor="firstName">First name</label>
                    <input id="firstName"
                    value={firstName}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                        setFirstName(e.target.value)
                    }
                    /> 
                </div>
                <div className="form-lastName">
                    <label htmlFor="lastName">Last name</label>
                    <input id="lastName"
                    value={lastName}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                        setLastName(e.target.value)
                    }
                    /> 
                </div>
                <div className="form-age">
                    <label htmlFor="age">Age</label>
                    <input id="age"
                    value={age}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                        setAge(e.target.value)
                    }
                    /> 
                </div>
                <div className="form-email">
                    <label htmlFor="email">Email</label>
                    <input id="email"
                    value={email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                        setEmail(e.target.value)
                    }
                    /> 
                </div>
                <div className="form-password">
                    <label htmlFor="password">Password</label>
                    <input id="password"
                    type="password"
                    value={password}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                        setPassword(e.target.value)
                    }
                    /> 
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default RegisterView