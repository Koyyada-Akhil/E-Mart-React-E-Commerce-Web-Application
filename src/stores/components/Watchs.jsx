import React from 'react'
import { watchData} from '../data/watch'
const Watchs = () => {
     const firstFiveImages =watchData.slice(0,5)
  return (
    <>
    <div className="protitle">
        <h2>Watchs</h2>
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

export default Watchs
