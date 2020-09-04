import React, { useState, createContext } from 'react';

export const CartContext = createContext();

export const CartProvider = (props) => {

    const [C, setC] = useState([])

return (
    <CartContext.Provider value = {[C, setC]}>

    {props.children}

    </CartContext.Provider>
                                    )
} 