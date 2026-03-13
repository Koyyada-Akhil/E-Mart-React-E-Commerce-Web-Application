
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
            <div key={item.id}>
              <div className="page Img">
                <img src={`${import.meta.env.BASE_URL}${item.image}`}  alt="" />
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
