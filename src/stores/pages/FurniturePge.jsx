
import React from 'react'
import { furnitureData } from '../data/furniture'
import Navbar from '../components/Navbar'

const FurniturePge = () => {
  return (
   <>
   <Navbar />
    <div>
      <div className="pagesection">
        {furnitureData.map((item)=>{
            return(
                <div key={item.id}>
                    <div className="pageImg">
                        <img src={`${import.meta.env.BASE_URL}${item.image}`} alt="" />
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

export default FurniturePge
