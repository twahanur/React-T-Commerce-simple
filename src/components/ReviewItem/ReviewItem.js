import React from 'react';

const ReviewItem = (props) => {
    const {name,seller,shipping, price, quantity,key} = props.product;
    const reviewStyle = {
        borderBottom: '1px solid lightgray',
        marginBottom:'5px',
        marginLeft:'300px',
        paddingBottom:'5px',
    }
    const itemPrice = price * quantity;
    return (
        <div style={reviewStyle}>
            <h3>{name}</h3>
            <p>seller: {seller}</p>
            <p><small>Quantity:{quantity}</small></p>
            <h5>price: {itemPrice}</h5>
             <h5>Shipping: {shipping}</h5>
             <br />
             <button 
                className="add-to-cart-button"
                onClick={()=>props.handleRemoveProduct(key)}
            >Remove</button>

            
        </div>
    );
};

export default ReviewItem;