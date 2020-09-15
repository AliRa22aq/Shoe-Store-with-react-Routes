import React, { useReducer, createContext } from 'react';
import CartReducer from './CartReducer';

const boys = [

    {   
        id: "B1",
        name: "Dunham 8000  Sneaker",
        img: "https://ak1.ostkcdn.com/images/products/30756882/Dunham-Mens-8000-Ubal-Waterproof-Lace-Up-Sneaker-Shoes-72fe64fd-778e-4e69-a9a8-ce3d254cfc42.jpg",
        detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        price: 100,
        count: 1
        },
    {
        id: "B2",
        name: "Lugz DX Oxford Sneaker",
        img: "https://ak1.ostkcdn.com/images/products/22897350/Zrocs-DX-42c19146-ec9d-4925-9868-abd8a0aa2bb3.jpg",
        detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        price: 100,
        count: 1

    },
    {
        id: "B3",
        name: "Vance Quick Lace Sneakers",
        img: "https://ak1.ostkcdn.com/images/products/17011753/Vance-Co.-Mens-Riggin-Athleisure-Elastic-Quick-Lace-Casual-Sneakers-03572354-28ed-4fab-a881-96fb6c35a8f6_600.jpg",
        detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        price: 100,
        count: 1

    },
    {
        id: "B4",
        name: "NFS Attack Squash Sneakers",
        img: "https://ak1.ostkcdn.com/images/products/19892982/Prince-Mens-NFS-Attack-Squash-Sneakers-493dd13e-19e3-427b-a07b-3313483d7570_600.jpg",
        detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        price: 100,
        count: 1

    },
    {
        id: "B5",
        name: "NFS Running Shoes",
        img: "https://images.evo.com/imgp/700/175733/702335/on-cloud-running-shoes-.jpg",
        detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        price: 100,
        count: 1

    },
    {
        id: "B6",
        name: "NFS Waterproof Sneakers",
        img: "data:image/jpeg;base64,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",
        detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        price: 100,
        count: 1

    }
]

const girls = [

   {
        id: "G1",
        name: "Lady Shoes Nike Air Max Ul ' Se Lady's Shoes",
        img: "https://lh3.googleusercontent.com/proxy/h3RcA3a3rctZE91nw1rLZTOUbNNk8Q1As4Y4sCXqfZ1InhVBY9ecHhOUrsX1D1TGeyTSU9JVMUtbqDfEm7Vhb22m04pR1QmOOfI1q9W-GaNQCNDfTL93eqen3d3ukDXI3e2w3jPCOqVEzilweysaK1vHY2sbfI0PvsdbOSx4NPS9leuGHsE94bU-i66xvW0xeZwkyrdKiIvhqVRvol-Unmq9kJkE5OMUW7SzQ8o",
        detail: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        price: 100,
        count: 1

    },
    {
        id: "G2",
        name: "Mesh (Air mesh) Insole Material:",
        img: "https://www.dhresource.com/0x0/f2/albu/g5/M00/4D/F3/rBVaJFm2OcGAXWLqAAFC-2Xl_p0695.jpg",
        detail: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        price: 100,
        count: 1

    },
    {
        id: "G3",
        name: "Siga Decorated Summer for Ladies",
        img: "https://www.unze.com.pk/media/catalog/product/cache/1/image/600x600/9df78eab33525d08d6e5fb8d27136e95/c/s/cs11396_19.jpg",
        detail: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        price: 100,
        count: 1

    },
    {
        id: "G4",
        name: "PU OutSole Rubber",
        img : "https://image.made-in-china.com/2f0j00aLlRhbMJhIcV/The-Cheapest-Summer-Pointed-Toe-Single-Shoes-Pretty-Slip-on-Flat-Girls-Shoes.jpg",
        detail: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        price: 100,
        count: 1

    }
]

const kids = [

    {
        id: "K1",
        name: "Sports Shoes 301 - Red",
        img: "https://cdn.shopify.com/s/files/1/0081/3504/9293/products/301_2_480x.jpg?v=1578487460",
        detail: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        price: 100,
        count: 1


    },
    {
        id: "K2",
        name: "Girls Sports Shoes 102 - Sea Green",
        img: "https://cdn.shopify.com/s/files/1/0081/3504/9293/products/102_1_650d757d-6059-4ffa-a128-92d83bfd9bcc_480x.jpg?v=1578487002",
        detail: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        price: 100,
        count: 1


    },
    {
        id: "K3",
        name: "Girls Sports Shoes 102 - Sky Blue",
        img: "https://cdn.shopify.com/s/files/1/0081/3504/9293/products/102_2_cb728a20-f611-4be2-bfa1-2c736ff843ae_480x.jpg?v=1578487200",
        detail: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        price: 100,
        count: 1


    },
    {
        id: "K4",
        name: "Comfortable Black Slippers For Kids",
        img: "https://d11zer3aoz69xt.cloudfront.net/media/catalog/product/cache/1/image/1200x/9df78eab33525d08d6e5fb8d27136e95/a/s/asaan_buy_comfortable_black_slippers_for_kids_to-0017-y_.jpg",
        detail: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        price: 100,
        count: 1


    },

]

const socks = [

    {
        id: "S1",
        name: "Men Nike Lightweight",
        img: "https://www.aeelectricalinc.com/images/large/Fashion_Style/Men%20Nike%20Lightweight%203%20Pack%20Sock%20Black%20White%20Grey%20-%20Nike%20Men%20Socks%20Sale%20C33b3409%20138_LRG.jpg",
        detail: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        price: 100,
        count: 1


    },
    {
        id: "K2",
        name: "Woowan DX Oxford Socks",
        img: "https://ae01.alicdn.com/kf/HTB1lGKFOpXXXXaZaXXXq6xXFXXXz/Men-Sock-10-pieces-5-Pairs-lot-Package-Male-Summer-Light-Socks-Stripe-Cotton-Short-Sock.jpg_480x480xz.jpg",
        detail: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        price: 100,
        count: 1


    },
    {
        id: "K3",
        name: "Nike Training's most basic",
        img: "https://cache.mrporter.com/variants/images/5983760398201134/in/w2000_q80.jpg",
        detail: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        price: 100,
        count: 1

    },

]

const initialState = {
    products: [boys, girls, kids, socks],
    total: 0,
    cart: [],
} 

///////
// create context
export const GlobalContext = createContext(initialState);

// create provider
export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(CartReducer, initialState);

    // Actions

    // function for adding the product to the cart
    function addCart(productId, code) {
        const { products, cart } = state;

        // check that the item should not be already added to cart
        const check = cart.every(product => {
            return product.id !== productId;
        });


        if (check) {

            const data = products[code].filter((x) => {
                return x.id === productId;
            });

            dispatch({
                type: 'ADD_TO_CART',
                payload: data,
            });

            getTotal()
        }
        else {
            alert('This product is already added to the cart');
        }
    };

    // function for decreasing the product quantity
    function decrease(productId) {
        const { cart } = state;

        // iterating the array to find the product that matches the argument(productId) and decrementing it's count
        cart.forEach((product, index) => {
            if (product.id === productId) {
                product.count === 1 ? product.count = 1 : product.count -= 1;
            }
        });


        // The filter() method creates an array filled with all array elements that pass a test
        // filtering(building the obj) the obj in which we decreased the count through forEach
        const filterCart = cart.filter((product) => (product.id === productId));

        dispatch({
            type: 'DECREASE',
            payload: filterCart
        });

        getTotal()
    }

    // function for increasing the product quantity
    function increase(productId) {
        const { cart } = state;

        // iterating the array to find the product that matches the argument(productId) and incrementing it's count
        cart.forEach((product) => {
            if (product.id === productId) {
                product.count += 1;
            }
        });

        // The filter() method creates an array filled with all array elements that pass a test
        // filtering(building the obj) the obj in which we increased the count through forEach
        const filterCart = cart.filter((product) => (product.id === productId));

        dispatch({
            type: 'INCREASE',
            payload: filterCart
        });

        getTotal();
    }

    // function for removing the product from the cart
    function removeProduct(productId) {
        if (window.confirm("Do you want to delete this product")) {

            const { cart } = state;

            // iterating the array to find the product that matches the argument(productId) and incrementing it's count
            cart.forEach((product, index) => {
                if (product.id === productId) {
                    cart.splice(index, 1);
                }
            });

            // The filter() method creates an array filled with all array elements that pass a test
            // filtering(building the obj) the obj in which we increased the count through forEach
            const filterCart = cart.filter((product) => (product.id === productId));

            dispatch({
                type: 'REMOVE_PRODUCT',
                payload: filterCart
            });

            getTotal()
        }
    }

    // function for getting the total amount according to product price
    function getTotal() {
        const { cart } = state;

        const res = cart.reduce((prev, product) => {
            return (prev + (product.price * product.count));
        }, 0);

        dispatch({
            type: 'TOTAL',
            payload: res
        });
    }


    return (
        <GlobalContext.Provider value={{
            products: state.products,
            cart: state.cart,
            total: state.total,
            addCart,
            increase,
            decrease,
            removeProduct,
            getTotal
        }}>
            {children}
        </GlobalContext.Provider>
    );
};