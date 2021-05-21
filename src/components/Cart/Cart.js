import React from 'react';


const Cart = (props) => {
    const cart = props.cart;
    // console.log(cart)

    //reduce method
    const totalPrice = cart.reduce((total, prd) =>  total + prd.price * prd.quantity, 0);
   
   //for loop method
    // let totalPrice = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const product = cart[i];
    //     totalPrice = totalPrice + product.price;
    // }


    // shippingCost calculation
    let shippingCost = 0
    if (totalPrice > 500) {
        shippingCost = 0;
    }
    else if (totalPrice > 300 ) {
        shippingCost = 20;
    }
    else if (totalPrice > 200 ){
        shippingCost = 30;
    }
    else if (totalPrice > 0 ){
        shippingCost = 40;
    }
    

    //tax cost calculation
    const tax = totalPrice / 10
    const grandTotal = totalPrice + shippingCost + (tax)


    //number converter function
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered:{cart.length} </p>
            <p>Product Price: {formatNumber(totalPrice)}</p>
            <p><small>Shipping Cost: ${formatNumber(shippingCost)}</small></p>
            <p><small>Tax : {formatNumber(tax)}</small></p>
            <h5>Total price: ${formatNumber(grandTotal)}</h5>
            {props.children}
        </div>
    );
};

export default Cart;