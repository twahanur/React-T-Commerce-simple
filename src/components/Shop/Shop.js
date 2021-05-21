import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../product/Product';
import './Shop.css'
import {addToDatabaseCart, getDatabaseCart} from '../../utilities/databaseManager'

const Shop = () => {
    const fake20 = fakeData.slice(0,20);
    const [products]= useState(fake20);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        const saveCart = getDatabaseCart()
        const productKeys = Object.keys(saveCart);
        const previousCart = productKeys.map(existingKey=> {
            const product =fakeData.find(pd => pd.key === existingKey);
            product.quantity = saveCart[existingKey];
            return product;
        })
        setCart(previousCart);

    },[]
    
    )

    const handleAddProduct = (product) =>{
        const toBeAdded = product.key;
        const sameProuduct = cart.find(pd => pd.key === toBeAdded)
        let count = 1;
        let newCart;
        if (sameProuduct){
            count = sameProuduct.quantity + 1;
            sameProuduct.quantity = count;
            const others = cart.filter(pd => pd.key !== toBeAdded );
            newCart = [...others, sameProuduct]
        }
        else{
            product.quantity = 1;
            newCart = [...cart, product];
        }
    setCart(newCart);    
    addToDatabaseCart(product.key, count)   
}

    return (
        <div className="container">
            <div className="product-container">
            
                {
                products.map(data => <Product key = {data.key}
                    showAddToCart = {true}
                    handleAddProduct = {handleAddProduct} 
                    product={data}> </Product>)
                }

            </div>
            <div className="card-container">
                <Cart cart={cart}>
                    <Link to="/review"><button className="add-to-cart-button">Review Order</button></Link>
                </Cart>
            </div>
            
        </div>
    );
};

export default Shop;