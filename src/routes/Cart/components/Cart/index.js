import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';import {
    selectCount,
  } from '../../../../containers/features/counter/counterSlice';
import './Cart.scss'
export default function Cart() {
    
    const cart = JSON.parse(localStorage.getItem('cart'))
    const [total,setTotal] =useState(123.45)
    let cartItemsHTML=[];
        cartItemsHTML = cart.map((item,i) => 
            {
                let dollar = parseFloat(item.price.slice(1,6))
                let cent = parseFloat(item.price.slice(0,item.price.length))/100
                let price = item.price[0]=='$' ? dollar : cent
                let totalPrice =Math.round(((price  * item.qty) + Number.EPSILON) * 100) / 100;
                console.log(item.qty,item.price,totalPrice)
                return <div className="order-item">
                            <div className="item-no">{i+1}</div>
                            <div className="item-image" style={{backgroundImage:  `url(${item.image})`}}></div>
                            <div className="item-details">{item.name}</div>
                            <div className="item-qty-crtl">{item.qty}</div>
                            <div className="item-unit-price">${price}x {item.qty}</div>
                            <div className="item-total">${Math.round(((price  * item.qty) + Number.EPSILON) * 100) / 100}</div>
                        </div>
            });
        console.log(cartItemsHTML)
    return (
        <div className="cart">
            <div className="cart-label">Cart</div>
            <div className="order-list">
                {cartItemsHTML}
            </div>
            <div className="checkout">
                <div className="checkout__left">
                    <div className="checkout-price-details">
                        <div className="sub-total left">Sub Total</div>
                        <div className="sub-total right">$55.49</div>
                        <div className="left">HST</div>
                        <div className="right">$5.49</div>

                        <div className="grant-total">Total</div>
                        <div className="grant-total right">$59.49</div>
                    </div>
                    <div className="checkout-button">Checkout</div>
                </div>
                <div className="continue__right">
                    <div className="continue-button">Continue Shopping</div>
                </div>
            </div>
        </div>
    )
}
