import React from 'react'
import { Outlet } from 'react-router-dom'
import '../App.css';


function Products() {


    return (
        <div>
                    <h1 className='heading'> Products that will Amaze you!</h1>
                        <Outlet />

        </div>
    )
}

export default Products
