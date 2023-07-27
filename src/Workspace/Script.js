import React from 'react'
import './Script.css'
import { AiFillHome } from 'react-icons/ai';
import { BsTextLeft } from 'react-icons/bs';
import { UserAuth } from '../AuthContext';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { BsTextCenter } from 'react-icons/bs';
import { BiBrain } from 'react-icons/bi';
import { BsThreeDots } from 'react-icons/bs';
function Script({script, firstline}) {
    const {user} = UserAuth();
  return (
    <div className='script'>
      <header>
      <AiFillHome/>
      <BsTextLeft/>
      <img src={user.photoURL} alt="" />
      </header>
    <div className="body">
        <div className="options">
    <div className="unlock">
        <span>Unlock the full power of NolanAI with our premium tiers.</span>
        <button>Unlock now</button>
    </div>  
    </div>
    <div className="option">
       <div className='full-screen'><AiOutlineUnorderedList /></div> 
        <div className="left">
       <div className="scr"><BsTextCenter/> <span>Script Smart</span> </div> 
      <div className="brain"><BiBrain/> <span>Brainstorming</span> </div> 
      <BsThreeDots/> 
        </div>
        </div>
        <div className="script-here">
          <p className='firstline'>{firstline[0]}</p>
          <p  className='secondline'>{firstline[1]}</p>
         <p> {script}</p>
            
        </div>
        </div>  
    </div>
  )
}

export default Script
