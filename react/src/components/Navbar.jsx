import React from 'react'
import "./Navbar.css" 
import{Link} from "react-router-dom";

import { MdOutlineShoppingCart } from "react-icons/md";
function Navbar({size}) {
  return (
    <div className='nav'>
        <h1>Lulu </h1>
        {/* <form action="">
            <input type="text" placeholder=' search...'  className='search '/>
        </form> */}
         <div>
            <ul className='nav-li'>
                <li >{<Link className='tag' to={"/"}>home</Link>}</li>
                
                <li>{<Link className='carticons' to={"/cart"}><MdOutlineShoppingCart /></Link>}
                <span className='cartval'>{size}</span>
                </li>
            </ul>
           
           
           
           
                

           
          
           
         </div>
    </div>
  )
}

export default Navbar