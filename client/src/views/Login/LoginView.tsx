import React from 'react'

const LoginView = () => {
  return (
    <section className="login-view">
        <form id="login-form">
          <div className="email-input">
            <label htmlFor="email">Email</label>
            <input id="email" className="email" type="email"/>
          </div>
          <div className="password-input">
            <label htmlFor="password">Password</label>
            <input id="password" className="password" type="password"/>
          </div>
        </form>
    </section>
  )
}

export default LoginView