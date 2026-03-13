import React from 'react'
import { fridgeData } from '../data/fridge'
import Navbar from '../components/Navbar'

const FridgePage = () => {
  return (
    <>
    <Navbar />
    <div>
      <div className="pagesection">
        {fridgeData.map((item)=>{
            return(
                <div>
                    <div className="pageImg">
                        <img src={item.image} alt="" />
                    </div>
                    <div className="promodel">
                        {item.brand},{item.model}
                    </div>
                </div>
            )
        })}
      </div>
    </div>
    </>
  )
}

export default FridgePage
