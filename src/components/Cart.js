import React, {useContext} from 'react'
import {CartContext} from './CartContext'

function Cart() {

    const [Cart, setCart] = useContext(CartContext);

    return (
        <div>
            total items added: {Cart.length} <br/>
            total price: $
        </div>
    )
}

export default Cart