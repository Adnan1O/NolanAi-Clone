import React, { useState } from 'react'
import './Create.css'
import { useNavigate } from 'react-router-dom'
function Create({close , handleSubmission}) {
  const [title, setTitle] = useState('')
  const [plot, setPlot] = useState('')
  const [genre, setGenre] = useState('')
  const [script, setScript] = useState('')

const navigate = useNavigate()


 
 const closeModal=()=>{
    close()
  }
  const submit=()=>{
    handleSubmission({value1: title, value2: plot, value3: genre})
  }
  const run=()=>{
    submit();
    navigate('/workspace')
  }
  return (
    <div className='create'>
      <div className="overlay" onClick={closeModal}></div>
      <div className="container">
        <p>Create Script</p>
        <label>* Title</label>
        <input type="text" onChange={(e)=>setTitle(e.target.value)} />
        <label>Plot</label>
        <input type="text"
        onChange={(e)=>setPlot(e.target.value)}
        placeholder='Sci-fi adventure across multiverse' />
        <div className="suggest">
        Suggest screenplay titles based on the plot.
        <button>Suggest titles</button>  
        </div>
        <label>*Genre</label>
      <select onChange={(e)=>setGenre(e.target.value)}>
      <option value=""></option>
      <option value={"Action"}>Action </option>
      <option value={"Advanture"}>Advanture </option>
      <option value={"Horror"}>Horror </option>
      <option value={"Comedy"}>Comedy </option>
      <option value={"Drama"}>Drama </option>
      <option value={"Fantasy"}>Fantasy </option>
      <option value={"Mystry"}>Mystry </option>
      <option value={"Thriller"}>Thriller </option>
      <option value={"Sci-fi"}>Sci-fi </option>
      </select>

        <div className="pdf">
          <p>OR</p>
          <div className="pdf-btn">
            <button>Upload .PDF</button>
            <button>Upload .FDX</button>
          </div>
        </div>
        <div className="submit">
        <button className='cancel'onClick={closeModal}>Cancel</button>
            <button onClick={run}>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Create
