import React from 'react'
import { womanData } from '../data/woman'

const WomenDressings = () => {
     const firstFiveImages =womanData.slice(0,5)
  return (
    <>
    <div className="protitle">
        <h2>Women Dressings</h2>
    </div>
    <div className='prosection'>
        {
            
            firstFiveImages.map((item)=>{
                return(
                    <div className='imgbox'>
                        <img className='proimage' src={item.image} alt="" />
                    </div>
                )

            })
        }
      
    </div>
    </>

  )
}

export default WomenDressings
