import React from 'react'

import Case1 from './Case1';
import { Link, Routes, Route } from 'react-router-dom';



function ProductsIndex() {



    return (
        <div>

                   <h1> Products </h1>
            
            <Link to='Case1'> Case1 </Link> <br />
            <Link to='Case2'> Case2 </Link> <br />
            <Link to='Case3'> Case3 </Link> <br />
            <Link to='Case4'> Case4 </Link> 
                       
                    


        </div>
    )
}

export default ProductsIndex
