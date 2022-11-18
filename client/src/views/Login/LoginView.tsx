import axios from 'axios';
import React, { useState } from 'react'
import { addUser } from '../../api/addUser';
import { TUser } from '../../api/getUsers';
import { Link, useNavigate } from "react-router-dom"
import { useSignup } from '../../hooks/useSignup';

const LoginView = () => {
    const [users, setUsers] = useState<TUser[]>([]);
    const [data, setData] = useState({
        email: "",
        password: "",
    })

    const handleChange = ({ currentTarget: input}) => {
        setData({
            ...data,
            [input.name]: input.value
        })
    }

      
    return (
        <div className="register-form">
            <form id="form">
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
                <button>Login</button>
            </form>
            New Customer ? <Link to="/register">Register Here</Link>
        </div>
    )
}

export default LoginView