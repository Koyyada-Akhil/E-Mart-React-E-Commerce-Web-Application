import React from 'react'
import { tvData } from '../data/tv'
import Navbar from '../components/Navbar'

const TvPage = () => {
  return (
  <>
  <Navbar />
    <div>
      <div className="pagesection">
        {tvData.map((item)=>{
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

export default TvPage
