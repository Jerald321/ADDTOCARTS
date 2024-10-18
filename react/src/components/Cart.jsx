import React, { useEffect, useState } from 'react'
import "./Cart.css"


function Cart({cart,setCart}) {
  const [total,setTotal]=useState(0);
  
const remove=(id)=>{
      let name=id;
    const arr=cart.filter((iteam)=>
     iteam.id !==name)
    setCart(arr);
   
    
     
  }
  useEffect(()=>{
    setTotal(cart.reduce((acc,curr)=>acc+parseInt(curr.price),0))

  },[cart])
  return (
     <div>
       <h1>Cart list</h1>
      <div className='cart-details'>
     
      {cart.map((iteam)=>(
        
          <div className='cart' key={iteam.id}>
              <div>
              <img className='c-img' src={iteam.image}
              alt="" />
              <h3 className='c-title'>{iteam.title}</h3>
              <h2 className='c-price'>Price:{iteam.price}</h2>
            {/* <form action="" className='card-form'>
              <label htmlFor="">number of the product</label><input type="number" />
            </form>  */}
              </div>
            
            
               <div>
                
               <button  className='cart-btn' onClick={()=>remove(iteam.id )}>remove</button>
               </div>
           
          </div>
        
          
        ))}

   </div>
    <h2 className='valofcart'>total price: <span>${total}</span></h2>
     </div>) 
  
    

      
  
  
}

export default Cart;