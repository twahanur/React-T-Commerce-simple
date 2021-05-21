import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import happyImage from '../../images/giphy.gif'
const Review = () => {

    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState([false]);

    const handlePlaceOrder = () =>{
        setCart([]);
        setOrderPlaced(true);
        processOrder();
    }

    const handleRemoveProduct = (productKey) => {
        const newCart = cart.filter ( pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey)
    }

    
    useEffect(() => {
        const saveCart = getDatabaseCart()
        const productKeys = Object.keys(saveCart);
        const cartProducts = productKeys.map(key =>{
            const product = fakeData.find( pd => pd.key === key );
            product.quantity = saveCart[key];
            return product;
        });
        setCart(cartProducts);
        
    },[]);
    let thankyou;
     if (orderPlaced === true){
       thankyou = <img src={happyImage} alt="Thank you for staying with Us" srcset="" />
     }
    
     
    return (
        <div className="container">
            {thankyou}
            <div className="product-container">
            {
                cart.map(pd=> <ReviewItem 
                    key = {pd.key} 
                    handleRemoveProduct = {handleRemoveProduct} 
                    product={pd}>
                    
                </ReviewItem>)
            }
            
            </div>
            <div className="card-container">
                <Cart cart={cart}>
                    <button onClick={handlePlaceOrder} className="add-to-cart-button">Place Order</button>
                </Cart>
            </div>
            
        </div>
    );
};

export default Review;
