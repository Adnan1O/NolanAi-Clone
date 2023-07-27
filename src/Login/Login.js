import React, { useEffect } from 'react'
import './Login.css'
import login from "../src/login.webp"
import {UserAuth} from '../AuthContext'
import { useNavigate } from 'react-router-dom'
function Login() {
const {googleSignIn, user } = UserAuth()

const navigate = useNavigate();
 const handleLogin= async()=>{
    try {
      await googleSignIn();

    } catch (error) {
      console.error(error);
    }
  }
  useEffect(()=>{
    if (user) {
      navigate('/dashboard')
    } 
  },[handleLogin])
  return (
    <div className='login' style={{
        width: '100%',
        height: '100vh',
        backgroundImage: `url(${login})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
      }}>
    <h1>Log in</h1>
    <p>Log in to unlock the full Nolan Experience.</p>
    <div className="login-area">
      <button onClick={handleLogin}>continue with Google</button>
      <button>continue with Facebook</button>
      <button>continue with Email</button>
    </div>
    </div>
  )
}

export default Login
