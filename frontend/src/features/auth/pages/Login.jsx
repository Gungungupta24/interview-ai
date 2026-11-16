import React from 'react'
import "../auth.form.scss"

const Login = () => {

  const handleSubmit = (e)=>{
    e.preventDefault()
  }

  return (
    <main>
      <div className ="form-container">
        <h1>login</h1>

        <form onsSubmit={handleSubmit}></form>

        <form>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name='email' placeholder='enter email address' />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name='password' placeholder='enter password' />
          </div>

          <button className='button primarybutton'>Login</button>
        </form>
      </div>
    </main>
  )
}

export default Login