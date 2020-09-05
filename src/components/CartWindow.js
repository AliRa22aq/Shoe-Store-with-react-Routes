import React, {useState, useContext} from 'react'
import {CartContext} from './CartContext';
import { Button } from '@material-ui/core';



function CartWindow() {
    const [Cart, setCart] = useContext(CartContext);
    const [num, setnum] = useState({})

    var priceData = Cart.map((item) => {return( item.price)})
    var TotalPrice = priceData.reduce((acc, curr) => acc+curr, 0);
    
        
    return (
        <div>
            <h4> Products added into Cart</h4>
            <ul> 
            {Cart.map((val) => {
                return (
                    
                    <li> {val.name} | |{val.price}    <br />

                    
                    <Button variant="outlined" onClick={() => {setCart(Cart.filter((a) => {return ( a.name!=val.name)} ))}} > 
                    Delete from Cart 
                    </Button>
                        
                        
                        
                        
                    </li> 
                    )  
                    
            } ) }
         Total Bill: {TotalPrice}
            </ul>
            

            

        </div>
    )
}

export default CartWindow
