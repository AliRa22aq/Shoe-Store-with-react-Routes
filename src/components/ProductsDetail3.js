
    import React, {useContext} from 'react'
    import {CartContext} from './CartContext';
    import { useParams } from 'react-router-dom'
    import { Card } from '@material-ui/core';
    import { Grid, Button } from '@material-ui/core';
    import '../App.css';
    import Typography from '@material-ui/core/Typography';
    
    function ProductsDetail3() {
    
        const setCart = useContext(CartContext);
    
        const Kshoes = {

            "Girls-Sports-Shoe-301-Red" : {
                name: "Sports Shoes 301 - Red",
                img: "https://cdn.shopify.com/s/files/1/0081/3504/9293/products/301_2_480x.jpg?v=1578487460",
                detail: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                price: 100
        
            },
            "Sports-Shoes-102-Green" : {
                name: "Girls Sports Shoes 102 - Sea Green",
                img: "https://cdn.shopify.com/s/files/1/0081/3504/9293/products/102_1_650d757d-6059-4ffa-a128-92d83bfd9bcc_480x.jpg?v=1578487002",
                detail: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                price: 100
        
            },
            "Girls-Sports-Shoes-102-Sky-Blue" : {
                name: "Girls Sports Shoes 102 - Sky Blue",
                img: "https://cdn.shopify.com/s/files/1/0081/3504/9293/products/102_2_cb728a20-f611-4be2-bfa1-2c736ff843ae_480x.jpg?v=1578487200",
                detail: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                price: 100
        
            },
            "Comfortable-Black-Slippers-For-Kids" : {
                name: "Comfortable Black Slippers For Kids",
                img: "https://d11zer3aoz69xt.cloudfront.net/media/catalog/product/cache/1/image/1200x/9df78eab33525d08d6e5fb8d27136e95/a/s/asaan_buy_comfortable_black_slippers_for_kids_to-0017-y_.jpg",
                detail: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                price: 100
        
            },
        
        }
        

        const {product3ID} = useParams();
    
        const product = Kshoes[product3ID];
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
    
    export default ProductsDetail3
    