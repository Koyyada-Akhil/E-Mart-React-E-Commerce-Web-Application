import React from 'react'
import { computerData } from '../data/computers'

const Computers = () => {
     const firstFiveImages =computerData.slice(0,5)

  return (
    <>
    <div className="protitle">
        <h2>Computers</h2>
    </div>
     <div className='prosection'>
        {
            firstFiveImages.map((item)=>{
                return(
                    <div key={item.id} className='imgbox'>
                        <img className='proimage' src={`${import.meta.env.BASE_URL}${item.image}`} alt="" />
                    </div>
                )

            })
        }
      
    </div>
    </>
  )
}

export default Computers
