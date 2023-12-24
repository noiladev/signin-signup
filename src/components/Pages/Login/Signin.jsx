import React from 'react'
import { useNavigate } from 'react-router-dom'

function  Signin({mode}) {
  function fnIn(e) {
    e.preventDefault()
    console.log(e.target.email.value);
    console.log(e.target.password.value);
    window.location.href = 'https://login-page-react-mocha.vercel.app/login'
  }
  return (
    <div className='sign'>
      <div className="sign__inner">
        <h2>Get Started Now</h2>
        <form onSubmit={fnIn} className='sign__form' action='#'>
          <div>
            <label htmlFor="email">Email address</label>
            <input id='email' name='email' type="text" placeholder='Enter your email' />
          </div>
          <div>
            <div className='forget'>
              <label htmlFor="password">Password</label> <span>Forget password</span>
            </div>
            <input name='password' id='password' type="text" placeholder='Password' />
          </div>
          <input type="checkbox" name="" id="chekbooks" /><label htmlFor="chekbooks">Remember for 30day</label>
          <button type='submit'>Signin</button>
        </form>
        <div className='sign__line'>
          <hr /> Or <hr />
        </div>
        <div className='sign__app'>
          <a href="#"><i className="bi bi-google"></i>Sign in with google</a>
          <a href="#"><i className="bi bi-apple"></i>Sign in with apple</a>
        </div>
        <div className='sign__mode'>
          Have an account? <button onClick={() => mode(true)}>Sign up</button>
        </div>
      </div>
    </div>
  )
}


export default Signin
