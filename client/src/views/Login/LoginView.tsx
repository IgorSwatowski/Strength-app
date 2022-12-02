import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"

import { useLogin } from "../../hooks/useLogin"

const LoginView = () => {
    const { login, error, isLoading } = useLogin();
    const [data, setData] = useState({
        email: "",
        password: "",
    })

    const navigate = useNavigate();

    const handleChange = ({ currentTarget: input}) => {
        setData({
            ...data,
            [input.name]: input.value
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await login(data.email, data.password)
        navigate("/dashboard/users")
    }

    return (
        <div className="register-form">
            <form onSubmit={handleSubmit} id="form">
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
                {error && <h1>{error}</h1>}
                <button disabled={isLoading}>Login</button>
            </form>
            New Customer ? <Link to="/register">Register Here</Link>
        </div>
    )
}

export default LoginView