import React from 'react'
import './_card.scss'

const Card = ({id,img,name,price,categoryId}) => {
  return (
    <div className='card'>
        <div className='card_image'>
        <img src={img} alt="" />
        </div>
        <div className='card_text'>
        <p>{name}</p>
        <p>${price}</p>
        </div>
        <div className='card_hover'>
            <div className='card_btn'>Add to Card</div>
        </div>
    </div>
  )
}

export default Card