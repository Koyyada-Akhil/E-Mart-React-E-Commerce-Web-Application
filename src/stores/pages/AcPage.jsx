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
               <div key={item.id}>
                    <div className="pageImg">
                        <img src={`${import.meta.env.BASE_URL}${item.image}`}  alt="" />
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
