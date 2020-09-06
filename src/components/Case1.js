import React, {useContext} from 'react'
import {CartContext} from './CartContext';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import { Grid, Button } from '@material-ui/core';
import '../App.css';


const boys = {

    "Dunham-Mens-8000-Ubal-Waterproof-Shoes" : {
        name: "Dunham 8000  Sneaker",
        img: "https://ak1.ostkcdn.com/images/products/30756882/Dunham-Mens-8000-Ubal-Waterproof-Lace-Up-Sneaker-Shoes-72fe64fd-778e-4e69-a9a8-ce3d254cfc42.jpg",
        detail: "This is the detail of the product",
        price: 100
    },
    "Lugz-Men-Zrocs-DX-Oxford-Sneaker" : {
        name: "Lugz DX Oxford Sneaker",
        img: "https://ak1.ostkcdn.com/images/products/22897350/Zrocs-DX-42c19146-ec9d-4925-9868-abd8a0aa2bb3.jpg",
        detail: "This is the detail of the product",
        price: 100
    },
    "Vance-Co.-Men-Riggin-Athleisure-Elastic-Sneakers" : {
        name: "Vance Quick Lace Sneakers",
        img: "https://ak1.ostkcdn.com/images/products/17011753/Vance-Co.-Mens-Riggin-Athleisure-Elastic-Quick-Lace-Casual-Sneakers-03572354-28ed-4fab-a881-96fb6c35a8f6_600.jpg",
        detail: "This is the detail of the product",
        price: 100
    },
    "Prince-Mens-NFS-Attack-Squash-Sneakers" : {
        name: "NFS Attack Squash Sneakers",
        img: "https://ak1.ostkcdn.com/images/products/19892982/Prince-Mens-NFS-Attack-Squash-Sneakers-493dd13e-19e3-427b-a07b-3313483d7570_600.jpg",
        detail: "This is the detail of the product",
        price: 100
    },
    "Running-Shoes" : {
        name: "NFS Running Shoes",
        img: "https://images.evo.com/imgp/700/175733/702335/on-cloud-running-shoes-.jpg",
        detail: "This is the detail of the product",
        price: 100
    },
    "waterproof" : {
        name: "NFS Waterproof Sneakers",
        img: "data:image/jpeg;base64,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",
        detail: "This is the detail of the product",
        price: 100
    },
}


function Case1() {
    const setCart = useContext(CartContext);

    
    return (
        <div>
             <Grid className = 'detailhead' container> <h4> Boys Shoes </h4> </Grid>
            

            <Grid container>  
            
            {Object.entries(boys).map(([product1ID,{name, img, price}], kye) => {
                                        
                return(

                       
                    <Grid item xs={4}> 

                    <div className = 'card'>  
                    <Link to = {product1ID}  > 
                    <Paper key={product1ID} elevation= {0} > 
                            
                        <img src={img} alt={name} width={300} height={300} /> <br />
                        <Link to = {product1ID} >   {name}  </Link> <br />
                        <div className= 'ShoePrice'> ${price} </div>

                    </Paper>
                    </Link> 
                    </div>

                    <div className='button'> 
                     <Button variant="outlined" onClick = {() => {setCart(a => [...a, {"name": name, 'price': price, 'image': img}])}} > Add to Cart  </Button>

                     </div>

                    </Grid>
                )
            })}
            
            </Grid>
        </div>
    )
        

}

export default Case1
