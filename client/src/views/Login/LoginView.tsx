import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from "react-router-dom";

const LoginView = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);


  const configuration = {
    method: "post",
    url: "http://localhost:5000/login",
    headers: {
      "Content-Type" : "application/json"
    },
    data: {
      email,
      password,
    },
  };

    async function handleLogin(e: React.FormEvent) {
      e.preventDefault();
      await axios(configuration)
        .then((result) => {
          console.log(configuration.data)
          localStorage.setItem("userInfo", JSON.stringify(configuration.data))
          setLogin(true);
        })
        .catch((error) => {
          error = new Error();
        });
  }

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");

    console.log("/dashboard", userInfo)
  }, [])

  return (
    <section className="login-view">
      {login && (
          <p className="text-success">You Are Logged in Successfully</p>
        )}
        <form id="login-form" onSubmit={handleLogin}>
          <div className="email-input">
            <label htmlFor="email">Email</label>
            <input id="email" className="email" type="email" onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="password-input">
            <label htmlFor="password">Password</label>
            <input id="password" className="password" type="password" onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <button type="submit">Zaloguj</button>
        </form>
        New Customer ? <Link to="/register">Register Here</Link>
    </section>
  )
}

export default LoginView