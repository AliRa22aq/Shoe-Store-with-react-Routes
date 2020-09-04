import React from 'react'
import { Grid } from '@material-ui/core'
import image from './url/comp-1.gif'
import Button from '@material-ui/core/Button';



function Home() {
    return (
        <div >

            <Grid container > 
            <Grid item xs={3} className='writing'> 
            A place Where you Fall in Love with Shoes <br />
            <Button variant="outlined"  > Products </Button>

            </Grid>
            <Grid item xs={9}> <img src={image} className=' mainImage'/>   </Grid>
            </Grid>
            
        </div>
    )
}

export default Home

