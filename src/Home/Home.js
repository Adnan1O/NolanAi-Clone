import React from 'react'
import './Home.css'
import Banner from './Banner'
import Nolan from "../src/Nolan.webp"
import Navbar from './Navbar'
import Features from './Features'
import featuresData from './featureData'
import Videoarea from './Videoarea'
import Demos from './Demos'
import Footer from './Footer'
function Home() {
  return (
    <div className='Home' style={{
      width: '100%',
      height: '80vh',
      backgroundImage: `url(${Nolan})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center center'
    }}>
      <Navbar/>
      <Banner/>
        <div className="feature">
       {
        featuresData.map((data)=>(
          <Features 
          key={data.id}
          icon={data.icon}
          title={data.title}
          description={data.description}
          />
        ))
       } </div>
       <Videoarea/>
       <Demos/>
       <Footer/>
    </div>
  )
}

export default Home
