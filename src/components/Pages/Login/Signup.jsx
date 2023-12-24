import React from 'react'

function Signup({mode}) {
  return (
    <div className='sign'>
      <div className="sign__inner">
        <h2>Get Started Now</h2>
        <form className='sign__form' action='#'>
          <div>
            <label htmlFor="name">Name</label>  
            <input id='name' type="text" placeholder='Enter your name' />
          </div>
          <div>
            <label htmlFor="email">Email address</label>
            <input id='email' type="text" placeholder='Enter your email' />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input id='password' type="text" placeholder='Password' />
          </div>
          <input type="checkbox" name="" id="chekbooks" /><label htmlFor="chekbooks">I agree to the terms & policy</label>
          <button>Sign up</button>
        </form>
        <div className='sign__line'>
          <hr /> Or <hr />
        </div>
        <div className='sign__app'>
          <a href="#"><i className="bi bi-google"></i>Sign in with google</a>
          <a href="#"><i className="bi bi-apple"></i>Sign in with apple</a>
        </div>
        <div className='sign__mode'>
          Have an account? <button onClick={() => mode(false)}>Sign in</button>
        </div>
      </div>
    </div>
  )
}

export default Signup
