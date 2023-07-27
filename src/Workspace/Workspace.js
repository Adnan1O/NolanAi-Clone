import React, { useEffect, useState } from 'react'
import "./Workspace.css"
import Script from './Script';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { AiOutlineYoutube } from 'react-icons/ai';
import { BiDownload } from 'react-icons/bi';
import { AiOutlineShareAlt } from 'react-icons/ai';
function Workspace({title, plot, genre}) {
  const [script, setScript] = useState([])
  const [firstline, setFirstline] = useState([])
  const handleSubmit = async()=>{
    try {
     const body = {title, plot, genre}
    const response= await fetch("http://localhost:5000/sendscript",{
       method:"POST",
       headers:{
         'Content-Type' : 'application/json',
       },
       body: JSON.stringify(body)
     })
     const jsonData = await response.json();
     const generatedScript = await jsonData.choices[0].message.content;
     //console.log(jsonData.choices[0].message.content)
     const lines = generatedScript.split('\n').filter(line => line.trim() !=='');
     console.log(lines)
     setFirstline(lines)
     setScript(generatedScript);
    } catch (error) {
     console.error(error);
    }
   } 

    useEffect(()=>{
      handleSubmit();
console.log(title, plot, genre)
    },[])
  return (
    <div className='workspace'>
      <div className="sidebar">
      <h2>{firstline[0]}</h2>
      <div className="list">
      <p><AiOutlineInfoCircle/>How To Get NolanAI Pro For Free</p>
      <p><AiOutlineYoutube/>How To Use NolanAI</p>
      <p><BiDownload/>Download</p>
      <p><AiOutlineShareAlt/>Share Script (Beta)</p>
      </div>
      <div className="scences">
        <span className='first'>Scences</span>
        <span>Characters</span>
      </div>
      <input type="text" className='sidebar-search' placeholder='Search scene' />
      </div>
      <div className="script-area">
    <Script script={script} firstline={firstline} />
      </div>
    </div>
  )
}

export default Workspace
