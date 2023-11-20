import React from 'react'
import "./_ticket.scss"

const TicketSection = () => {
  return (
    <div className='ticketSection'>
        <div className='ticket_text'>
                <p>TICKETS</p>
            </div>
        <div className='ticket_box_up'>
            <div className='ticket_card_1'>
                <div className='card_left'>
                    <h2>ONE DAY</h2>
                    <div className='ticket_price'>
                    <p>Type: Regular ticket</p>
                    <p>Price: $ 10</p>
                    </div>
                    <span>*Lorem ipsum dolores sit amet, dlores sit.</span>
                </div>
                <div className='card_right'>
                    <div className='circle'></div>
                    <div className='buy_button'>
                        <p>Buy</p>
                        <i class="fa-solid fa-arrow-up"></i>
                    </div>
                </div>
            </div>
            <div className='ticket_card_2'>
                <div className='card_left'>
                    <h2>VIP PASS</h2>
                    <div className='ticket_price'>
                    <p>Type: Backstage pass</p>
                    <p>Price: $ 100</p>
                    </div>
                    <span>*Lorem ipsum dolores sit amet, dlores sit.</span>
                </div>
                <div className='card_right'>
                    <div className='circle'></div>
                    <div className='buy_button'>
                        <p>Buy</p>
                        <i class="fa-solid fa-arrow-up"></i>
                    </div>
                </div>
            </div>
            <div className='ticket_card_3'>
                <div className='card_left'>
                    <h2>7 DAYS PACK</h2>
                    <div className='ticket_price'>
                    <p>Type: Regular ticket</p>
                    <p>Price: $ 60</p>
                    </div>
                    <span>*Lorem ipsum dolores sit amet, dlores sit.</span>
                </div>
                <div className='card_right'>
                    <div className='circle'></div>
                    <div className='buy_button'>
                        <p>Buy</p>
                        <i class="fa-solid fa-arrow-up"></i>
                    </div>
                </div>
            </div>
        </div>
        <div className='ticket_box_down'>
            <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/client-img-1.png" alt="" />
            <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/client-img-2.png" alt="" />
            <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/client-img-3.png" alt="" />
            <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/client-img-4.png" alt="" />
            <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/client-img-5.png" alt="" />
            <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/client-img-6.png" alt="" />
            <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/client-img-7.png" alt="" />
            <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/client-img-8.png" alt="" />
        </div>
    </div>
  )
}

export default TicketSection