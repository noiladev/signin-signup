import React, { useState } from 'react'
import Signup from '../Login/Signup'
import rightImg from '../../../assets/img/right.png'
import './login.scss'
import Signin from './Signin'
function Login() {
  const [mode, setMode] = useState(true)
  return (
    <div className='login'>
      {
        mode ?  <Signup mode={setMode}/>  : <Signin  mode={setMode}/>
      }
      <img src={rightImg} alt="" />
    </div>
  )
}

export default Login
