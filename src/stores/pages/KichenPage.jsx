
import React from 'react'
import { kitchenData } from '../data/kitchen'
import Navbar from '../components/Navbar'

const KichenPage = () => {
  return (
    <>
    <Navbar />
    <div>
      <div className="pagesection">
        {kitchenData.map((item)=>{
          return(
            <div>
              <div className="page Img">
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

export default KichenPage
