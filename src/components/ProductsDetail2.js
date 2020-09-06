        import React, {useContext} from 'react'
        import {CartContext} from './CartContext';
        import { useParams } from 'react-router-dom'
        import { Card } from '@material-ui/core';
        import { Grid, Button } from '@material-ui/core';
        import '../App.css';
        import Typography from '@material-ui/core/Typography';
        
        function ProductsDetail2() {
        
            const setCart = useContext(CartContext);
        

const Gshoes = {

            "Canvas Type: Casual Shoes Waterproof:" : {
                name: "Canvas Type: Casual Shoes Waterproof:",
                img: "https://image.made-in-china.com/2f0j00EQYRoUkHvdqv/Classic-Design-MID-Upper-Canvas-Shoes-Children-Casual-Shoes-Girls-Shoes.jpg",
                detail: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                price: 100
            },
            "Mesh (Air mesh) Insole Material:" : {
                name: "Mesh (Air mesh) Insole Material:",
                img: "https://www.dhresource.com/0x0/f2/albu/g5/M00/4D/F3/rBVaJFm2OcGAXWLqAAFC-2Xl_p0695.jpg",
                detail: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                price: 100
            },
            "Siga-Decorated-Summer" : {
                name: "Siga Decorated Summer for Ladies",
                img: "https://www.unze.com.pk/media/catalog/product/cache/1/image/600x600/9df78eab33525d08d6e5fb8d27136e95/c/s/cs11396_19.jpg",
                detail: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                price: 100
            },
            " PU-OutSole-Rubber" : {
                name: "PU OutSole Rubber",
                img : "https://image.made-in-china.com/2f0j00aLlRhbMJhIcV/The-Cheapest-Summer-Pointed-Toe-Single-Shoes-Pretty-Slip-on-Flat-Girls-Shoes.jpg",
                detail: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                price: 100
            },
    
        }
        
            const {product2ID} = useParams();
        
            const product = Gshoes[product2ID];
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
        
        export default ProductsDetail2
        