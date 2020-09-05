import React, {useContext} from 'react'
import {CartContext} from './CartContext'


export default function Window() {
    const [Cart, setCart] = useContext(CartContext);
    console.log(Cart)

    return (
        <div>
            
        </div>
    )
}

