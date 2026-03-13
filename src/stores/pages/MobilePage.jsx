import React, { useState } from 'react'
import { mobileData } from '../data/mobiles'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
const MobilePage = () => {

    const [selectedproduct,setSelectedProduct]=useState([])

    const companyHandler=(mango)=>{
        if (selectedproduct.includes(mango)){
            setSelectedProduct(prev => prev.filter(item => item !== mango))
        }
        else{
            setSelectedProduct([mango])
        }
    }

     const filterproduct=selectedproduct.length===0?
     mobileData : mobileData.filter((orange)=>(selectedproduct.includes(orange.company))) 
  return (
   <>
   <Navbar />
  <div className="fullpage">
     <div className="pro-selected">
    {mobileData.map((phone)=>{
        return(
            <div key={phone.id} className="pro-input">
            <label>
                <input type="checkbox"
                checked={selectedproduct.includes(phone.company)}
                onChange={()=>companyHandler(phone.company)}
                />
                {phone.company}
                
            </label>
            </div>
        )
    })}
   </div>


    <div className='pagesection'>
        {
            filterproduct.map((item)=>{
                return(
                    <div key={item.id}>
                        <Link to={`/mobiles/${item.id}`}>
                    <div className="pageImg">
                        <img src={`${import.meta.env.BASE_URL}${item.image}`}  alt="" />
                    </div>
                    </Link>
                    <div className="promodel">
                        {item.company},{item.model}
                    </div>
                    </div>

                )

            })
        }
      
    </div>
  </div>
   </>
  )
}

export default MobilePage
