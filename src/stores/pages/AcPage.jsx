import React from 'react'
import { acData } from '../data/ac'
import Navbar from '../components/Navbar'

const AcPage = () => {

  return (
   <>
   <Navbar />
    <div>
        <div className="pagesection">
        {acData.map((item)=>{
            return(
               <div>
                    <div className="pageImg">
                        <img src={item.image} alt="" />
                    </div>
                    <div className="promodel">
                        {item.company},{item.model}
                    </div>
                </div>
            )
        })}
       </div>
    </div>
   </>
  )
}

export default AcPage
