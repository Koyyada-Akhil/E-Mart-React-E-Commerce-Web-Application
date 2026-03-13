import React from 'react'
import { tvData } from '../data/tv'

const Tv = () => {

    const firstFiveImage=tvData.slice(0,5)
  return (
    <>
    <div className="protitle">
        <h2>TV</h2>
    </div>
    <div className="prosection">
        {firstFiveImage.map(()=>{
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

export default Tv
