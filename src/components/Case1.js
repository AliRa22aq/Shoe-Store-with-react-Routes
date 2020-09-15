import React, {useContext} from 'react'
import {GlobalContext} from './CartContext';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import { Grid, Button } from '@material-ui/core';
import '../App.css';



function Case1() {

    const {products, addCart} = useContext(GlobalContext);
    const boys = products[0];         
    
    return (
        <div>
             <Grid className = 'detailhead' container> <h4> Boys Shoes </h4> </Grid>
            

            <Grid container>  
                       
            {boys.map((product, kye) => {
                                        
                return(

                    <Grid item xs={4}> 
                    <div className = 'card'>  
                    <Link to = {product.id}  > 
                    <Paper key={product.id} elevation= {0} > 
                            
                        <img src={product.img} alt={product.name} width={300} height={300} /> <br />
                        <Link to = {product.id} >   {product.name}  </Link> <br />
                        <div className= 'ShoePrice'> ${product.price} </div>

                    </Paper>
                    </Link> 
                    </div>
                    <div className='button'>                      <Button variant="outlined" onClick={()=> {addCart(product.id, 0)}} > Add to Cart  </Button>

                     </div>

                    </Grid>
                       
                )
                })}

        </Grid>
        </div>
)


}

export default Case1