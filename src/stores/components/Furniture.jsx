import React from 'react'
import { furnitureData } from '../data/furniture'

const Furniture = () => {
    const firstFiveImages =furnitureData.slice(0,5)
  return (
    <>
    <div className="protitle">
        <h2>Furneture</h2>
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

export default Furniture
