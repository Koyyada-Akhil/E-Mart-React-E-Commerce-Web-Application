import React from 'react'
import { useCart } from './Context/CartContext'
import Navbar from './components/Navbar'

const UseCart = () => {
    const {cartItems,addToCart,removeFromCart}=useCart()
    console.log(cartItems)
  return (
   <>
   <Navbar />
<div>
    <h2 className='y-cart'>Your Cart</h2>
 {cartItems.length ===0 ?
    (<p className='empty'>Your Cart is Empty</p>):
   <div>
     {cartItems.map((item)=>{
        return(
            <div key={item.id} className='cart-section'>
                <div className="cart-img">
                    <img src={`${import.meta.env.BASE_URL}${item.image.replace(/^\//, '')}`} alt="" />
                </div>
                <div className="cart-details">
                    <h3>{item.product}</h3>
                    <h2>
                        {item.price}
                    </h2>
                    <h3>{item.model}</h3>
                </div>
                <button className='removeBtn' onClick={() => removeFromCart(item)}>Remove</button>
            </div>
        )
    })}
   </div>

}
     
    </div>
   </>
  )
}

export default UseCart
