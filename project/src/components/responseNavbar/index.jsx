import React, { useState } from 'react'
import './_responseNavbar.scss'

const ResponseNavbar = () => {
    const [responsOpen, setResponsOpen] = useState(false)
    const handleResponseOpen=(e)=>{
        setResponsOpen(!responsOpen)
    }
  return (
    <>
    <div className='responseNavbar'>
        <div className='responseText'>
            <p>COPPOLA</p>
        </div>
        <div className='response_navbar_line' onClick={(e)=>handleResponseOpen(e)}>
            <div className='response_line1'></div>
            <div  className='response_line2 '></div>
        </div>

    </div>
    <div className={`responsenavbarOpen ${responsOpen ? "open" : ""}`}>
        <ul>
            <li>HOME</li>
            <li>PAGES</li>
            <li>PORTFOLIO</li>
            <li>BLOG</li>
            <li>SHOP</li>
        </ul>
    </div>
    </>
  )
}

export default ResponseNavbar