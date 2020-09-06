import React, {useContext} from 'react'
import {CartContext} from './CartContext';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import { Grid, Button } from '@material-ui/core';
import '../App.css';

const Kids = {

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

function Case3() {
    const [Cart, setCart] = useContext(CartContext);
    setCart(Cart)


    
    return (
        <div>
             <Grid className = 'detailhead' container> <h4> Kids Shoes </h4> </Grid>
            

            <Grid container>  
            
            {Object.entries(Kids).map(([product3ID,{name, img, price}], kye) => {
                                        
                return(

                       
                    <Grid item xs={4}> 

                    <div className = 'card'>  
                    <Link to = {product3ID}  > 
                    <Paper key={product3ID} elevation= {0} > 
                            
                        <img src={img} alt={name} width={300} height={300} /> <br />
                        <Link to = {product3ID} >   {name}  </Link> <br />
                        <div className= 'ShoePrice'> ${price} </div>

                    </Paper>
                    </Link> 
                    </div>

                    <div className='button'> 
                     <Button variant="outlined" onClick = {() => {setCart(a => [...a, {"name": name, 'price': price, 'image': img}])}} > 
                     Add to Cart
                     </Button>
                     </div>

                    </Grid>
                )
            })}
            
            </Grid>
        </div>
    )
        

}

export default Case3
