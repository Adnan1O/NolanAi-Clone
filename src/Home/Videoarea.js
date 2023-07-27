import React from 'react'
import './Videoarea.css'
function Videoarea() {
  return (
<div  className='Videoarea'>
<div className="whatis">
<p>What is NOLAN?</p>
<h1>Lights, camera, action!</h1><br />
<span>NolanAI is the ultimate tool 
    for any screenwriter looking to 
    improve their craft. With its AI-powered
    features and user-friendly interface, it
    can help you bring your stories to life 
    in the most efficient and effective way possible,
    while respecting your unique creative voice.
        </span><br /> <br />
             <button>Explore our premium plan!</button>
      </div>
      <div className="video">
     <iframe width="500" height="300" src="https://www.youtube.com/embed/p6P4EDHqAV4" title="How To Use NolanAI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
  )
}

export default Videoarea
