import React from 'react';
import { Link } from 'react-router-dom';



const Accessories = {

    "Dunham-Mens-8000-Ubal-Waterproof-Shoes" : {
        name: "Dunham Mens 8000 Ubal Waterproof Lace Up Sneaker Shoes",
        img: "https://ak1.ostkcdn.com/images/products/30756882/Dunham-Mens-8000-Ubal-Waterproof-Lace-Up-Sneaker-Shoes-72fe64fd-778e-4e69-a9a8-ce3d254cfc42.jpg",
        detail: "This is the detail of the product"
    },
    "Lugz-Men-Zrocs-DX-Oxford-Sneaker" : {
        name: "Lugz Men's Zrocs DX Oxford Sneaker",
        img: "https://ak1.ostkcdn.com/images/products/22897350/Zrocs-DX-42c19146-ec9d-4925-9868-abd8a0aa2bb3.jpg",
        detail: "This is the detail of the product"
    },
    "Vance-Co.-Men-Riggin-Athleisure-Elastic-Sneakers" : {
        name: "Vance Co. Men's 'Riggin' Athleisure Elastic Quick Lace Casual Sneakers",
        img: "https://ak1.ostkcdn.com/images/products/17011753/Vance-Co.-Mens-Riggin-Athleisure-Elastic-Quick-Lace-Casual-Sneakers-03572354-28ed-4fab-a881-96fb6c35a8f6_600.jpg",
        detail: "This is the detail of the product"
    },
    "Prince-Mens-NFS-Attack-Squash-Sneakers" : {
        name: "Prince Mens NFS Attack Squash Sneakers",
        img: "https://ak1.ostkcdn.com/images/products/19892982/Prince-Mens-NFS-Attack-Squash-Sneakers-493dd13e-19e3-427b-a07b-3313483d7570_600.jpg",
        detail: "This is the detail of the product"
    },

}

function Case4() {
    return (
        <div>
            Accessories
            <ul> 
            {Object.entries(Accessories).map(([product4ID,{name, img}]) => {
                return(

                    <li key={product4ID}> 
                                <Link to = {product4ID} > {name} </Link> 
                        <img src={img} alt={name} width={200} height={200} /> 
                    </li>

                )
            })}
            </ul>

        </div>
    )
}

export default Case4
