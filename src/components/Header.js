import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import '../App.css';
import { Grid } from '@material-ui/core';
import LOGO from './url/LOGO.jpg'
import Cart from './Cart';


function Header() {

    

    return (
        <Grid container>
            <Grid item xs={1} className = 'headerupper'> 
                <Link to='/'> 
                    <img src={LOGO} alt="Shoe" height="65" width="80" /> 
                </Link>
            </Grid>

            <Grid item xs={10} className = 'headerupper'> THE SHOE STORE</Grid>
            
    <Grid item xs={11} > 
        <nav className = 'navbar' >
            <div className = 'header'> 
            <NavLink to="/" as='li' >  Home  </NavLink> |
            <NavLink to="/Products" as='li'> Products </NavLink> |
            <NavLink to="/Products/Case1" as='li'> Boys </NavLink> |
            <NavLink to="/Products/Case2" as='li'> Girls </NavLink> |
            <NavLink to="/Products/Case3" as='li'> Kids </NavLink> |
            <NavLink to="/About" as='li'> About Developer </NavLink>
            </div>
        </nav>
    </Grid>
    <Grid item xs={1}>
    <Link to='/Cart'>  <Cart /> </Link>   
    </Grid>


</Grid>
    )
}

export default Header
