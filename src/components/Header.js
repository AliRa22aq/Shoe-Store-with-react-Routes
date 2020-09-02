import React from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css';

function Header() {
    return (
        <nav className = 'navbar' >
            <div className = 'header'> 
            <NavLink to="/" as='li' >  Home  </NavLink> |
            <NavLink to="/Products" as='li'> Products </NavLink> |
            <NavLink to="/Products/Case1" as='li'> Boys </NavLink> |
            <NavLink to="/Products/Case2" as='li'> Girls </NavLink> |
            <NavLink to="/Products/Case2" as='li'> Kids </NavLink> |
            <NavLink to="/About" as='li'> About Developer </NavLink>
            </div>
        </nav>
    )
}

export default Header
