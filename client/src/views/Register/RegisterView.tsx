import axios from 'axios';
import React, { useState } from 'react'
import { addUser } from '../../api/addUser';
import { TUser } from '../../api/getUsers';
import { Link, useNavigate } from "react-router-dom"
import { useSignup } from '../../hooks/useSignup';

const RegisterView = () => {
    const [users, setUsers] = useState<TUser[]>([]);
    const {signup, error, isLoading} = useSignup()

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        age: ""
    })

    const navigate = useNavigate();

    const handleChange = ({ currentTarget: input}) => {
        setData({
            ...data,
            [input.name]: input.value
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
    
        await signup(data.email, data.password, data.firstName, data.lastName, data.age)
    }

    return (
        <div className="register-form">
            <form onSubmit={handleSubmit} id="form">
                <div className="form-firstName">
                    <label htmlFor="firstName">First name</label>
                    <input id="firstName"
                    value={data.firstName}
                    name="firstName"
                    onChange={handleChange}
                    /> 
                </div>
                <div className="form-lastName">
                    <label htmlFor="lastName">Last name</label>
                    <input id="lastName"
                    value={data.lastName}
                    name="lastName"
                    onChange={handleChange}
                    /> 
                </div>
                <div className="form-age">
                    <label htmlFor="age">Age</label>
                    <input id="age"
                    value={data.age}
                    name="age"
                    onChange={handleChange}
                    /> 
                </div>
                <div className="form-email">
                    <label htmlFor="email">Email</label>
                    <input id="email"
                    value={data.email}
                    name="email"
                    onChange={handleChange}
                    /> 
                </div>
                <div className="form-password">
                    <label htmlFor="password">Password</label>
                    <input id="password"
                    type="password"
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                    /> 
                </div>
                { error && <h1>{error}</h1>}
                <button>Submit</button>
            </form>
        </div>
    )
}

export default RegisterView