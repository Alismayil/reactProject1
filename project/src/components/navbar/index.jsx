import React, { useState } from 'react'
import './_navbar.scss'

const Navbar = () => {
    const [isopen, setIsopen] = useState(false)
   const handleOpen=(e)=>{
    setIsopen(!isopen)
   }
  return (
  <>
    <div className='navbar'>
        <div className='navbar_up'>
            <div className='lines'onClick={(e)=>handleOpen(e)}>
            <div className='navbar_up_line_1'></div>
            <div className='navbar_up_line_2'></div>
            </div>
        </div>
        <div className='navbar_middle'>
            <p>COPPOLA</p>
        </div>
        <div className='navbar_down'>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-youtube"></i>
        <i class="fa-brands fa-vimeo-v"></i>
        <i class="fa-brands fa-twitter"></i>
        </div>

    </div>
    <div className={`navbar_open_box ${isopen ? 'open' : "" }`} >
        <ul>
            <li className='li_1'>HOME</li>
            <li>PAGES</li>
            <li>PORTFOLIO</li>
            <li>BLOG</li>
            <li>SHOP</li>
            <li>LANDING</li>
        </ul>
    </div>
    </>
  )
}

export default Navbar