import React from 'react'
import './Banner.css'
import hero_logo from "../src/hero_logo.webp"
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../AuthContext'
function Banner() {
  const {user} = UserAuth();
const navigate = useNavigate()

const login=()=>{
  navigate('login')
}
const opendashboard=()=>{
  navigate('dashboard')
}
  return (
    <div className='Banner'>
   <img src={hero_logo} alt="" height={200} />
   <h1>Free Script Writing Software</h1>
   <p>Unleash creativity with AI Copilot - craft compelling screenplays</p>
   <div className="buttons">
    <button className='writing' onClick={user ? opendashboard : login}>Start Writing</button>
    {
      !user &&(
        <button className='login' onClick={login}>Log in</button>
      )
    }

   </div>
    </div>
  )
}

export default Banner
