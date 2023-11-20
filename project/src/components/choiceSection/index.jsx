import React from 'react'
import './_choice.scss'

const ChoiceSection = () => {
  return (
    <div className='choice'>
        <div className='choice_text'>
            <p>AUDIENCE CHOICE</p>
        </div>
        <div className='choice_big_box'>
            <div className='choice_gif'>
            <video class="elementor-video" src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/home4-video.mp4" autoplay="" loop="" muted="muted" playsinline="" controlslist="nodownload" poster="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-img1.jpg"></video>
            </div>
            <div className='choice_icon'>
                <p>Documentary</p>
                <h1>LIFE ON THE ISLAND</h1>
                <span>documentary film by Mirela Bagaric / Croatia 2021 </span>
                <div className='best_icon'>
                <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-icon1.png" alt="" />
                <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-icon2.png" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ChoiceSection