import React from 'react'
import Navbar from '../components/Navbar'
import { computerData } from '../data/computers'

const ComputersPage = () => {

  return (
   <>
   <Navbar />
    <div>
        <div className="pagesection">
            {computerData.map((item)=>{
                return(
                    <div key={item.id}>
                    <div className="pageImg">
                        <img src={`${import.meta.env.BASE_URL}${item.image}`}  alt="" />
                    </div>
                    <div className='promodel'>
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

export default ComputersPage
