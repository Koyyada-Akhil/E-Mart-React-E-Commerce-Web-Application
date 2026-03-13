import React from 'react'
import { menData } from '../data/men'

const MenFashion = () => {
    const firstFiveImages =menData.slice(0,5)
  return (
    <>
    <div className="protitle">
    <h2>Men Fashion</h2>
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

export default MenFashion
