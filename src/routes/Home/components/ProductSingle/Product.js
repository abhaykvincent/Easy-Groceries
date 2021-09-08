import React, { useEffect, useState } from 'react'

import {useDispatch,useSelector } from 'react-redux';
import { addToCart, localToCart, removeFromCart, selectCount } from '../../../../containers/features/counter/counterSlice';


export default function Product(props) {
    const dispatch = useDispatch();
    let cart = JSON.parse(localStorage.getItem('cart'))
    const [qty, setQty] = useState(0)

    let product={...props}
    product.qty=qty


    useEffect(() => {
        
        /* setQty(0)
        cart.forEach(item=>{
            if(item.id === product.id){
                product.qty=item.qty
                setQty(item.qty)
                console.log(`already is _local cart pack of ${product.qty}`)
            }
            else{
            }
        }) */
    },[props])

    const addToCartButton = () =>{
            setQty(product.qty+1)
            product.qty=product.qty+1
            console.log('addToCart reducer called')
            dispatch(addToCart(product))
            cart = JSON.parse(localStorage.getItem('cart'))
        
    }
    const RemoveFromCartButton = () =>{
        if(qty>0)
        {
            setQty(product.qty-1)
            product.qty=product.qty+1
            dispatch(removeFromCart(product))
        }
            /* setQty(product.qty-1)
            product.qty=product.qty-1
            console.log('addToCart reducer called')
            dispatch(addToCart(product))
            cart = JSON.parse(localStorage.getItem('cart')) */
        
    }

    const activeProduct = qty>0 ? 'picked': ''

    return (
        
        <div className={`product ${activeProduct}`}>
            <div className="product-panel">
            <img src={product.image} alt="" className="product-image"/>
            <div className="product-cart">
                <div onClick={RemoveFromCartButton} className="button-circle product-remove  red">-</div>
                <div className="button-circle product-qty     ">{qty}</div>
                <div onClick={addToCartButton}
                    className="button-circle product-add     green">+</div>
            </div>
            </div>
            <div className="product-details">
                <h2 className="product-name">{product.name}</h2>
                <p className="product-unit-price">{product.priceUnit}</p>
                <h2 className="product-price">{product.price}</h2>
            </div>
        </div> 
    )
}
