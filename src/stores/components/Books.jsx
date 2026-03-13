
import React from 'react'
import { booksData } from '../data/books'

const Books = () => {
  const fisrtFiveImage=booksData.slice(0,5)
  return (
    <>
    <div className="protitle">
        <h2>Books</h2>
    </div>
    <div className="prosection">
        {fisrtFiveImage.map(()=>{
            return(
                <div className="imgbox">
                    <div className="proimage" src={item.image} alt="" />
                        
                </div>
            )
        })}
    </div>
    </>
  )
}

export default Books
