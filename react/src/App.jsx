import React, { useState } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Header from './header.jsx';
import Navbar from './components/Navbar.jsx';

import Cart from './components/Cart.jsx';



function App() {

const [cart,setCart]=useState([]);





   return (
    <>
     <BrowserRouter>
       <Navbar size={cart.length} />
     
       <div>
        <Routes>
          <Route path="/" element={<Header 
                cart={cart}  
                setCart={setCart}
                
                        
          /> } />
          <Route path="/cart" element={<Cart
              cart={cart}  
              setCart={setCart}
              
          /> } />
          
        </Routes>
       </div>
      
     </BrowserRouter>
    
   
     
    </>
 
   
  )
}

export default App;
