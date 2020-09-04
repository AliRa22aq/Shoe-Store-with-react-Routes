import React, {useState, useContext} from 'react'
import {CartContext} from './CartContext';

function AddtoCart(x) {
    const [C, setC] = useContext(CartContext);

    () => {
        setC(a => [...a, x])
    }

    console.log(C)


console.log(x)
    

}

export default AddtoCart

