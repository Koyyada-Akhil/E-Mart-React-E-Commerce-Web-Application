import React from 'react'
import { speakerData } from '../data/speaker'
import Navbar from '../components/Navbar'

const SpeakersPage = () => {
  return (
   <>
   <Navbar />
    <div>
      <div className="pagesection">
        {speakerData.map((item)=>{
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

export default SpeakersPage
