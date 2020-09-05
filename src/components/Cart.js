import React, {useContext} from 'react'
import {CartContext} from './CartContext'
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';


function Cart() {

    const [Cart, setCart] = useContext(CartContext);


    var priceData = Cart.map((item) => {
        return( item.price)
    })

    const totalPrice = priceData.reduce((acc, curr) => acc+curr, 0);

    return (
        <div style={{fontSize: 15}} >
            <LocalGroceryStoreIcon/> {'('} {Cart.length} {')'} | ${totalPrice}
        </div>
    )

}

export default Cart