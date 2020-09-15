import React, {useContext} from 'react'
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import {GlobalContext} from './CartContext'

function Cart() {
    const {cart} = useContext(GlobalContext);

    return (
        <div style={{fontSize: 15}} >
            <LocalGroceryStoreIcon/> {cart.length}
        </div>
    )

}

export default Cart