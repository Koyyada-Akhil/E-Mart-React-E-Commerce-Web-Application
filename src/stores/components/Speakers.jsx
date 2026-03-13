import React from 'react'
import { speakerData } from '../data/speaker'

const Speakers = () => {

    const firstFiveImage=speakerData.slice(0,5)
  return (
   <>
   <div className="protitle">
    <h2>Speakers</h2>
   </div>
   <div className="prosection">
    {firstFiveImage.map(()=>{
        return(
            <div className="imgbox">
                <div className="proimage" src = {item.image}></div>
            </div>
        )
    })}

   </div>
   </>
  )
}

export default Speakers
