import React from 'react'
import "./Features.css"



function Features(props) {
  return (
    <div className="features">
     <div className="component">
    <img src={props.icon} height={45} alt="" />
     <div className="text-area">
        <h2>{props.title}</h2>
        <span>{props.description}</span>
     </div>
     </div>
     </div>
  )
}

export default Features
