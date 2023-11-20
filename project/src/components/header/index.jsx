import React from 'react'
import './_header.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { EffectFade, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const Header = () => {
  return (
        <section id='header'>
          <Swiper
            direction={'vertical'}
            pagination={{
              clickable: true,
            }}
            effect={'fade'}
            modules={[EffectFade, Pagination, Autoplay]}
            className="mySwiper"

            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide className='swipper_1'>
              <div className='swipper_present'>
                <p>select production presents</p>
                <h1>BACK TO NATURE</h1>
                <span>Written and directed by Haruki Tanaka/ Ireland 2012</span>
              <div className='swipper_icons'>
                <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-rev-icon1.png" alt="" />
              <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-rev-icon2.png" alt="" />
                <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-rev-icon3.png" alt="" />
              </div>
              </div>
              <div className='film_festival_text'>
                <div>
                  <span> Film festival 2022 starts april</span>
                </div>
                <p>Rome / 3 Locations / Seven days</p>
              </div>
              <div className='swipper_btns'>
                <div className='swipper_play'>
                  <p>PLAY</p>
                  <i class="fa-solid fa-play"></i>  
                </div>
                <div className='swipper_ticket'>
                  GET TICKET
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className='swipper_2'>
            <div className='swipper_present'>
                <p>tweak production presents</p>
                <h1>WAIT BY THE TRAIN</h1>
                <span>Written and directed by Michael Gordon/ France 1984</span>
              <div className='swipper_icons'>
                <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-rev-icon1.png" alt="" />
              <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-rev-icon2.png" alt="" />
                <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-rev-icon3.png" alt="" />
              </div>
              </div>
              <div className='film_festival_text'>
                <div>
                  <span> Film festival 2022 starts april</span>
                </div>
                <p>Rome / 3 Locations / Seven days</p>
              </div>
              <div className='swipper_btns'>
                <div className='swipper_play'>
                  <p>PLAY</p>
                  <i class="fa-solid fa-play"></i>  
                </div>
                <div className='swipper_ticket'>
                  GET TICKET
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className='swipper_3'>
            <div className='swipper_present'>
                <p>filmix production presents</p>
                <h1>INTO THE COSMOS</h1>
                <span>Written and directed by Lars Johnson/ Sweden 2011</span>
              <div className='swipper_icons'>
                <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-rev-icon1.png" alt="" />
              <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-rev-icon2.png" alt="" />
                <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-rev-icon3.png" alt="" />
              </div>
              </div>
              <div className='film_festival_text'>
                <div>
                  <span> Film festival 2022 starts april</span>
                </div>
                <p>Rome / 3 Locations / Seven days</p>
              </div>
              <div className='swipper_btns'>
                <div className='swipper_play'>
                  <p>PLAY</p>
                  <i class="fa-solid fa-play"></i>  
                </div>
                <div className='swipper_ticket'>
                  GET TICKET
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className='swipper_4'>
            <div className='swipper_present'>
                <p>filmo production presents</p>
                <h1>HISTORY OF COLOURS</h1>
                <span>Written and directed by Andy Smith/ 2000</span>
              <div className='swipper_icons'>
                <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-rev-icon1.png" alt="" />
              <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-rev-icon2.png" alt="" />
                <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-rev-icon3.png" alt="" />
              </div>
              </div>
              <div className='film_festival_text'>
                <div>
                  <span> Film festival 2022 starts april</span>
                </div>
                <p>Rome / 3 Locations / Seven days</p>
              </div>
              <div className='swipper_btns'>
                <div className='swipper_play'>
                  <p>PLAY</p>
                  <i class="fa-solid fa-play"></i>  
                </div>
                <div className='swipper_ticket'>
                  GET TICKET
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
    
  )
}

export default Header