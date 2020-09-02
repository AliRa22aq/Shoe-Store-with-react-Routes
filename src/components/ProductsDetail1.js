import React,{useState} from 'react'
import { useParams } from 'react-router-dom'
import { Card } from '@material-ui/core';
import '../App.css';


function ProductsDetail1() {

    const Bshoes = {

        "Dunham-Mens-8000-Ubal-Waterproof-Shoes" : {
            name: "Dunham Mens 8000 Ubal Waterproof Lace Up Sneaker Shoes",
            img: "https://ak1.ostkcdn.com/images/products/30756882/Dunham-Mens-8000-Ubal-Waterproof-Lace-Up-Sneaker-Shoes-72fe64fd-778e-4e69-a9a8-ce3d254cfc42.jpg",
            detail: "This is the detail of the product  11111"
        },
        "Lugz-Men-Zrocs-DX-Oxford-Sneaker" : {
            name: "Lugz Men's Zrocs DX Oxford Sneaker",
            img: "https://ak1.ostkcdn.com/images/products/22897350/Zrocs-DX-42c19146-ec9d-4925-9868-abd8a0aa2bb3.jpg",
            detail: "This is the detail of the product    2222"
        },
        "Vance-Co.-Men-Riggin-Athleisure-Elastic-Sneakers" : {
            name: "Vance Co. Men's 'Riggin' Athleisure Elastic Quick Lace Casual Sneakers",
            img: "https://ak1.ostkcdn.com/images/products/17011753/Vance-Co.-Mens-Riggin-Athleisure-Elastic-Quick-Lace-Casual-Sneakers-03572354-28ed-4fab-a881-96fb6c35a8f6_600.jpg",
            detail: "This is the detail of the product   3333"
        },
        "Prince-Mens-NFS-Attack-Squash-Sneakers" : {
            name: "Prince Mens NFS Attack Squash Sneakers",
            img: "https://ak1.ostkcdn.com/images/products/19892982/Prince-Mens-NFS-Attack-Squash-Sneakers-493dd13e-19e3-427b-a07b-3313483d7570_600.jpg",
            detail: "This is the detail of the product 44444"
        },

    }
    



    const {product1ID} = useParams();

    const product = Bshoes[product1ID];
    const {name, img, detail} = product;
    

    return (
        <div>
            <ul> 
            <li>  
            <Card >
                    <h4> {name} </h4>
                    <p> {detail}</p>
                    <img src={img} alt={name} style={{height: 200, width: '200px'}}/>
                    </Card> 
                   
            </li>
            </ul>
            </div>

    )
}

export default ProductsDetail1