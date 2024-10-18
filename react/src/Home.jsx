import React from 'react'
import "./Home.css"


function Home({products,cart,setCart}) {


  function addcart(){ 
     setCart([...cart,products])
     console.log("clicked");
     
  }
  const alertmsg=(id)=>{
    let name=products.id;
  let arr1=cart.find((iteam)=>
   iteam.id === name)
  // console.log(name);
  // console.log(arr1);
  
  
   
  if(arr1){
    alert("This iteam alraedy added in the cart  ")
    console.log("succes");
  }
  else{
    setCart([...cart,products])
    console.log();
  }
 
}

  
  
  

  return (
 
        
          
          
            
            <div className='productgrid'> 

           
           

           
            <div className='p-details' >
                 <img className='pimg' src={products.image} alt="" />
                 <h3 className='ptitle'>
                 
                  
                  
                  {products.title}</h3>
                 <h2 className='pprice'>$
                  
                  {products.price}</h2>
                
                 <button  
                 
                //  onClick={addcart}
                
                onClick={()=>
                  alertmsg( 
                   products)
                }
                // onClick={addcart}

                
                
                 className='pbtn'>add to cart</button>

                  </div>
            </div>
           
         
           
           
             
           
       
    
  )
}

export default Home;