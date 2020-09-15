import React, {useContext} from 'react'
import { Button, Grid, Paper } from '@material-ui/core';
import '../App.css';
import {GlobalContext} from './CartContext';


function CartWindow() {

    const {cart, decrease, increase, total, removeProduct} = useContext(GlobalContext);
    console.log(cart)

    return (
        <div>
            <Grid className='detailhead' container> <h4> Cart </h4> </Grid>
            
                {cart.map((product) => {
                    return (
                        <Paper elevation = {3} >
                                <Grid container>
                                
                                <Grid item xs={1}>
                                </Grid>
                            
                                    <Grid item xs={5} className='carttext'>
                                        <Grid container>
                                                <Grid item xs={12}> <img src={product.img} alt={product.name} width={300} height={300} /> </Grid>
                                                <Grid item xs={12}>  {product.name} </Grid>
                                        </Grid>
                                    </Grid>

                                    
                                    <Grid item xs={3}>
                                            <div className='cartx'> x {product.count} </div>  
                                            <div className='cartbutton'>
                                           <Button variant="outlined" onClick ={()=> {decrease(product.id)}}> - </Button>
                                           <Button variant="outlined" onClick ={()=> {increase(product.id)}} > + </Button>
                                           </div>
                                           
                                           <div className='cartDeletebutton'>
                                           <Button variant="outlined" onClick ={()=> {removeProduct(product.id)}}> Delete from Cart </Button> 
                                           </div>
                                           </Grid>
                                    

                                    <Grid item xs={3}>
                                        <Grid container >
                                            <div className='cartprice'>   Amount: ${product.price * product.count}  </div>
                                            
                                        </Grid>
                                    </Grid >
                                </Grid>
                       
                        </Paper>
                    )

                })}

            

            <Paper >
                <Grid className='carttotal' item xs={12}> Total Bill: ${total} </Grid>

                <div className='checkout' >


                    <Grid item xs={11}>   </Grid>
                    <Grid item xs={1}> <Button > Check Out </Button>  </Grid>


                </div>
            </Paper>

        </div>
    )
}

export default CartWindow