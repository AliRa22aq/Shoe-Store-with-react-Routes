import React from 'react'
import { Grid, Link } from '@material-ui/core'
import image from './url/comp-1.gif'
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';



function Home() {
    return (
        <div >

            <Grid container > 
            <Grid item xs={3} className='writing'> 
            A place Where you Fall in Love with Shoes <br />
            <NavLink to="Products">
            <Button variant="outlined"  > Products </Button> 
            </NavLink>

            </Grid>
            <Grid item xs={9}> <img src={image} className=' mainImage'/>   </Grid>
            </Grid>
            
        </div>
    )
}

export default Home

