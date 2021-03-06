import React, {useContext} from 'react'
import {GlobalContext} from './CartContext';
import { useParams } from 'react-router-dom'
import { Grid, Button, Card } from '@material-ui/core';
import '../App.css';
import Typography from '@material-ui/core/Typography';
import ReactImageMagnify from 'react-image-magnify';


function ProductsDetail3() {

    const {products, addCart} = useContext(GlobalContext);
    const kids = products[2]

    const {product3ID} = useParams();

    var product = kids.filter((x) => {
        return x.id === product3ID;
    });

    product = product[0]
    
    return (
        <div>
            <Card >
                <Grid container >
                    <Grid className='detailhead' container> <h4> {product.name} </h4> </Grid>
                    <Grid className='detalphoto' item xs={6}> 
                    
                    <ReactImageMagnify {...{
                        smallImage: {
                                alt: 'Wristwatch by Ted Baker London',
                                isFluidWidth: true,
                                src: product.img
                            },
                            largeImage: {
                                src: product.img,
                                width: 1200,
                                height: 1200
                            }
                        }} />  
                        
                    
                    </Grid>
                    <Grid item xs={6} >
                        <Grid item xs={12}>
                            <Typography className='detail' variant="subtitle1" gutterBottom>
                                {product.detail}
                            </Typography>
                            <div className='ShoePrice'>
                                ${product.price}
                            </div>
                            <div className='button'>
                                <Button variant="outlined" onClick={()=> {addCart(product.id, 2)}} >
                                    Add to Cart
                            </Button>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Card>
        </div>

    )


}

export default ProductsDetail3