import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    <div className="position-relative text-center">
        <img src='https://images.pexels.com/photos/6724315/pexels-photo-6724315.jpeg' alt="Landing Page" className='img-fluid w-100 d-block' style={{  height: 'auto', maxHeight: '600px', objectFit: 'cover' , opacity: 0.6}} />
        <div className=" position-absolute top-50 start-50 translate-middle p-4 bg-transparent border rounded shadow landing-card">
          <h2 className='text-center 'style={{color:"#4B0147		"}}>Where Fashion Meets Function.</h2>
          <Link to={"/dashboard"}><button className="btn " style={{backgroundColor:"#4B0147", color:"#FDFBF9	"}}>Dashboard</button></Link>
        </div>
      </div>
    </>
  )
}

export default Home