import React from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css';

function Header() {
    return (
        <nav className = 'navbar'>
            <NavLink to="/" as='li'> Home </NavLink> |
            <NavLink to="/Products" as='li'> Products </NavLink> |
            <NavLink to="/About" as='li'> About Developer </NavLink>
        </nav>
    )
}

export default Header
