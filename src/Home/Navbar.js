import React, { useEffect } from 'react'
import NolanLogo from "../src/NolanLogo.webp"
import './Navbar.css'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../AuthContext';
function Navbar() {
  const navigate = useNavigate();
  const {user, logOut } = UserAuth();

  const login=()=>{
    navigate('/login')
  }
  const logout= async()=>{
    try {
      await logOut()
    } catch (error) {
      
    }
  }
  useEffect(()=>{
    console.log(user.photoURL)
  },[])
  return (
    <div className='navbar'>
    <div className="logo">
    <img src={NolanLogo} alt="" />
    </div>
    <div className="list">
        <p>About Us</p>
         <p onClick={user? logout : login}>{user? "Logout" : "Login"}</p>
        <p>Pricing</p>
        <p>Create Script</p>
        <p>Blog</p>
{
  user &&(
        <p className='user-img'><img src={user.photoURL} alt=""/><p>{user.displayName}</p></p>
  )
}
     
    </div>
    </div>
  )
}

export default Navbar



