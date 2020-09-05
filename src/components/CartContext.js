import React, { useState, createContext } from 'react';

export const CartContext = createContext();

export const CartProvider = (props) => {

    const [Cart, setCart] = useState([])

return (
    <CartContext.Provider value = {[Cart, setCart]}>

    {props.children}

    </CartContext.Provider>
                                    )
} 