import React, { useState } from 'react'
import dashboard from '../src/dashboard.webp'
import Navbar from '../Home/Navbar'
import './Dashboard.css'
import Create from './Create';

function Dashboard({setValues}) {
     const [active, setActive] = useState('myScript');

    const makeactive=(tabname)=>{
        setActive(tabname)
    }
    const handleSubmission=({value1, value2, value3})=>{
      setValues({value1, value2, value3})
      Open();
    }
    const [openModal, setOpenModal] = useState(false);
    const Open=()=>{
        setOpenModal(!openModal)
         }
  return (
    <div className="main-div"
    style={{
        height: '100vh',
        backgroundColor:"rgba(0, 0, 0, 0.88)"
    }}>   
    <div className='dashboard' style={{
        width: '100%',
        height: '60%',
        backgroundImage: `url(${dashboard})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
      }}>
      <Navbar/>
      <h1>Your Latest Scripts</h1>
      <button>Upgrade your plan</button>
      <div className="tab">
        {/* <span onClick={Open}>Create script</span>
        <span>My Script</span>
        <span>demo</span> */}
       <span 
         className={active=== 'create' ? 'active' : ''}
         onClick={Open}>Create script</span>
        <span  
        className={active=== 'myScript' ? 'active' : ''}
        onClick={()=>makeactive("myScript")}
        >My Script</span>
        <span className={active=== 'demo' ? 'active' : ''}
         onClick={()=>makeactive("demo")}
        >Demos</span>     
      </div>
      {
            openModal &&(
                <Create close={Open} handleSubmission={handleSubmission} />
            )
        }
    </div>
    </div>
  )
}

export default Dashboard
