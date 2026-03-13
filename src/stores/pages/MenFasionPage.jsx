import React from 'react'
import Navbar from '../components/Navbar'
import { menData } from '../data/men'

const MenFasionPage = () => {

  return (
    <>
    <Navbar />
    <div>
        <div className="pagesection">
           {menData.map((item)=>{
            return(
                <div key={item.id}>
                <div className="pageImg">
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

export default MenFasionPage
