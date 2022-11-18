import axios from 'axios';
import React, { useState } from 'react'
import { addUser } from '../../api/addUser';
import { TUser } from '../../api/getUsers';
import { Link, useNavigate } from "react-router-dom"

const LoginView = () => {
    const [users, setUsers] = useState<TUser[]>([]);
    const [error, setError ] = useState("")
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

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            const url = "http://localhost:5000/login";
            const { data: res } = await axios.post(url, data)
            localStorage.setItem("userInfo", JSON.stringify(res.data))
            console.log(res.message)
        }

        catch(error) {
            setError("error")
        }
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
                { error && <h1>{error}</h1>}
                <button>Login</button>
            </form>
            New Customer ? <Link to="/register">Register Here</Link>
        </div>
    )
}

export default LoginView