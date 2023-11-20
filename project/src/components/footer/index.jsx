import React from 'react'
import './_footer.scss'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer_up_box">
                <div className='bear_icon'>
                    <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/footer-img.png" alt="" />
                </div>
                <div className='footer_text'>
                <div className='footer_upper_box'>
                        <ul>
                            <li>WHAT WE DO</li>
                            <li>ABOUT US</li>
                            <li>HELP AND FAQ</li>
                        </ul>
                   
                </div>
                 <div className='footer_middle_box'>
                        <ul>
                            <li>TEAM</li>
                            <li>CONTACT US</li>
                            <li>SPEAKERS</li>
                        </ul>
                </div>
                 <div className='footer_downed_box'>
                        <ul>
                            <li>PROGRAM</li>
                            <li>SHOP</li>
                            <li>BLOG</li>
                        </ul>
                </div>
                 </div>
                   
                   
            </div>
            <div className="footer_down_box">
                <div className="footer_down_box_icon">
                    <div className="social_media">
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-youtube"></i>
                    <i class="fa-brands fa-vimeo-v"></i>
                    <i class="fa-brands fa-twitter"></i>
                    </div>
                    <div className='copyRider'>  
                    <p>© 2022 QODE INTERACTIVE, ALL RIGHTS RESERVED</p>
                    </div>
                </div>
                <div className="footer_down_box_text">
                    <div className='footer_down_box_ul'>
                        <ul>
                            <li>316 Via del Parione</li>
                            <li>Florence CA 90291, Italy</li>
                        </ul>
                    </div>
                    <input type="email" placeholder='Sign up to Newsletter' />

                </div>
            </div>
        </div>
    )
}

export default Footer