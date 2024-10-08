import React, { useContext, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import logoPic from '../data/logo.png';
import cartPic from '../data/cart.png';

export const Navbar = () => {
    const [menu, setMenu] = useState("home");
    const {getTotalCartItems} = useContext(ShopContext);
  return (
    <section id = "header">
        <img src={logoPic} class = "logo" alt = ""/>
        <ul id = "navbar">
            <li onClick = {()=>{setMenu("home")}}><Link to='/'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
            <li onClick = {()=>{setMenu("tops")}}><Link to='/tops'>Tops</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick = {()=>{setMenu("pants")}}><Link to='/pants'>Pants</Link>{menu==="contact"?<hr/>:<></>}</li>
            <li onClick = {()=>{setMenu("accessories")}}><Link to='/accessories'>Accessories</Link>{menu==="about"?<hr/>:<></>}</li>
            <li><Link to='/cart'><img src={cartPic} class = "cart" alt=""/></Link></li>
            <div className = "cart-count">{getTotalCartItems()}</div>
        </ul>
    </section>
  )
}

