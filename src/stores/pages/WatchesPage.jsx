import React from 'react'
import { watchData } from '../data/watch'
import Navbar from '../components/Navbar'

const WatchesPage = () => {
  return (
   <>
   <div className="propage">
   <Navbar />
    <div className='pagesection'>
        {watchData.map((item)=>{
            return(
               <div key={item.id}>
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

export default WatchesPage
