
import React from 'react'
import { booksData } from '../data/books'
import Navbar from '../components/Navbar'

const BookPage = () => {
  return (
    <>
    <Navbar />
    <div>
        <div className="pagesection">
            {booksData.map((item)=>{
                return(
                    <div>
                    <div className="pageImg">
                        <img src={item.image} alt="" />
                    </div>
                    <div className="promodel">
                        {item.title},{item.author}
                    </div>
                    </div>

                )
            })}
        </div>
    </div>
    </>
  )
}

export default BookPage
