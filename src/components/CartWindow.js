import React, {useState, useContext} from 'react'
import {CartContext} from './CartContext';
import { Button, Grid, Paper, Link } from '@material-ui/core';
import '../App.css';


function CartWindow() {
    const [Cart, setCart] = useContext(CartContext);


    var priceData = Cart.map((item) => {return( item.price)})
    var TotalPrice = priceData.reduce((acc, curr) => acc+curr, 0);

        
    return (
        <div>

            <Grid className = 'detailhead' container> <h4> Products added into Cart </h4> </Grid>

            <ol> 
             
            {Cart.map((val) => {
                return (
                    <Paper>
                    <li> 
                     <Grid container>   
                     <Grid item xs={4 } className='carttext'> 
                        Name of the Product: {val.name}  <br />
                        
                        </Grid> 
                        
                        <Grid item xs={5 }> 
                        <img src={val.image} alt={val.name} width={300} height={300} />
                        </Grid> 
                    

                    <Grid item xs={3 }> 
                    <Grid container > 
                    <div  className= 'cartprice'>   Amount: ${val.price}  </div>
                    </Grid>
                    
                    <div className='cartbutton'>
                    <Button variant="outlined" onClick={() => {setCart(Cart.filter((a) => {return ( a.name!=val.name)} ))}} > Delete from Cart </Button>
                    <Button variant="outlined" onClick={() => {setCart(a => [...a, {val}])}} > + </Button>


                    </div>
                    </Grid > 
                        
                        
                        
                    </Grid>
                    </li>
                    </Paper>
                    )  
                    
            } ) }
            
            </ol>

            <Paper > 
            <Grid className='carttotal' item xs={12}> Total Bill: ${TotalPrice} </Grid>     
            
            <div className='checkout' >    
            
  
            <Grid item xs={11}>   </Grid>   
            <Grid item xs={1}> <Button onClick = {() => {setCart([]); alert("Thanks for Shoping from here")}} > Check Out </Button>  </Grid>   
           

            </div>
           </Paper>

        </div>
    )
}

export default CartWindow
