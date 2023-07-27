import React from 'react'
import "./Footer.css"
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
function Footer() {
  return (
    <footer>
       <div className="copyright">
      <p>© Nolan 2023</p>
      <small>Privacy Policy|Terms of Service </small>
       </div>
       <div className="socials">
        <p>Follow Us:</p> 
    <AiFillInstagram/>
    <AiFillTwitterCircle/>
    <AiFillYoutube/>
       </div>
       <div className="app">
      <p>hello@nolanai.app</p> 
       </div>
    </footer>
  )
}

export default Footer
