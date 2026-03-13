import React from 'react'
import { fridgeData } from '../data/fridge'

const Fridge = () => {

    const fiirstFiveImage=fridgeData.slice(0,5)
  return (
   <>
   <div className="protitle">
    <h2>Fridge</h2>
   </div>
   <div className="prosection">
    {fiirstFiveImage.map(()=>{
        return(
            <div className="imgbox">
                <div className="proimage" src={item.image}></div>
            </div>
        )
    })}

   </div>
   </>
  )
}

export default Fridge
