import React, { useState } from 'react'
import axios from "axios"

const LoginView = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  const configuration = {
    method: "post",
    url: "http://localhost:5000/login",
    data: {
      email,
      password,
    },
  };

    async function handleLogin(e: React.FormEvent) {
      e.preventDefault();
      await axios(configuration)
      .then((result) => {
        setLogin(true);
      })
      .catch((error) => {
        error = new Error();
      });
  }

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
    </section>
  )
}

export default LoginView