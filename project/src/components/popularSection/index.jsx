import React, { useEffect, useState } from 'react'
import './_popular.scss'
import axios from 'axios'
import Card from '../card/card'

const PopularSection = () => {
  const [inform, setİnform] = useState()
  const [catagory, setCatagory] = useState("All")



  const baseUrl="http://localhost:3000/PopularMovie"
  const datas= async ()=>{
    const response=await axios.get(`${baseUrl}`)
    setİnform(response.data)
    console.log(response.data);
  }
  useEffect(() => {
    datas()
  }, [])
  const handleClickA = () =>{     const sortedDataA = [...inform].sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));     setİnform(sortedDataA)  }
  const handleClickZ = () =>{     const sortedDataA = [...inform].sort((a, b) => (a.name < b.name ? 1 : b.name < a.name ? -1 : 0));  
    setİnform(sortedDataA)  }
// -------------------------
const handleClickCatagory=(e)=>(
setCatagory(e.target.value)
)
// --------------------
  return (
    <div className='popularSection'>
        <div className='popular_text'>
       <p> POPULAR MOVIES</p>
        </div>
        <div className='movies_box'>
        <div className='movies_catagory'>
            <button onClick={(e)=>handleClickCatagory(e)} value='All'>SHOW ALL</button>
            <button onClick={(e) => handleClickA(e)}>A-z</button>
            <button onClick={(e) => handleClickZ(e)}>Z-a</button>
            <button onClick={(e)=>handleClickCatagory(e)} value='1' >Romantic</button>
            <button onClick={(e)=>handleClickCatagory(e)} value='2' >Action</button>
            <button onClick={(e)=>handleClickCatagory(e)} value='3' >Comedy</button>
        </div>
        <div className='movies_inform'>
        {
          inform && inform.filter((item)=>catagory==="All" || item.categoryId===parseFloat(catagory)).map((item)=>(
            <Card {...item}/>
          ))
        }
        </div>
        </div>
    </div>
  )
}

export default PopularSection