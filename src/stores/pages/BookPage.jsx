
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
                    <div key={item.id}>
                    <div className="pageImg">
                        <img src={`${import.meta.env.BASE_URL}${item.image}`}  alt="" />
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
