
    import React, {useState, useContext} from 'react'
    import {CartContext} from './CartContext';
    import { useParams } from 'react-router-dom'
    import { Card } from '@material-ui/core';
    import { Grid, Button } from '@material-ui/core';
    import '../App.css';
    import Typography from '@material-ui/core/Typography';
    
    function ProductsDetail4() {
    
        const [Cart, setCart] = useContext(CartContext);
    
        const Socks = {

            "Men-Nike-Lightweight" : {
                name: "Men Nike Lightweight",
                img: "https://www.aeelectricalinc.com/images/large/Fashion_Style/Men%20Nike%20Lightweight%203%20Pack%20Sock%20Black%20White%20Grey%20-%20Nike%20Men%20Socks%20Sale%20C33b3409%20138_LRG.jpg",
                detail: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                price: 100

            },
            "Woowan-DX-Oxfor-Socks" : {
                name: "Woowan DX Oxford Socks",
                img: "https://ae01.alicdn.com/kf/HTB1lGKFOpXXXXaZaXXXq6xXFXXXz/Men-Sock-10-pieces-5-Pairs-lot-Package-Male-Summer-Light-Socks-Stripe-Cotton-Short-Sock.jpg_480x480xz.jpg",
                detail: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                price: 100

            },
            "Nik-Trainings-most-basic" : {
                name: "Nike Training's most basic",
                img: "https://cache.mrporter.com/variants/images/5983760398201134/in/w2000_q80.jpg",
                detail: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                price: 100
            },

        }
    
        const {product4ID} = useParams();
    
        const product = Socks[product4ID];
        const {name, img, price, detail} = product;
        
    
        return (
            <div>
    
    <Card >
    
        <Grid container >  
    
                       <Grid className = 'detailhead' container> <h4> {name} </h4> </Grid>
                     
    
                       <Grid className='detalphoto' item xs = {6}> <img src={img} alt={name} style={{height: 500, width: 500}}/></Grid>
    
    
                       <Grid  item xs = {6} > 
    
                        
                       
                       <Grid item xs = {12}> 
                       <Typography className='detail' variant="subtitle1" gutterBottom>
                           
                         {detail}    
    
                        </Typography>
                        <div className = 'ShoePrice'>  
                                ${price}
                        </div>
    
                        <div className = 'button'> 
                        <Button variant="outlined" onClick = {() => {setCart(a => [...a, {"name": name, 'price': price}])}} > 
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
    
    export default ProductsDetail4
      