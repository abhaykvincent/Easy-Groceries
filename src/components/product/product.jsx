import React, { useEffect, useState } from 'react'

function Product(props) {
    //props
    let cart= props.cart;
    let getCart= props.getCart;

    // 📦 States
    const [product, setProduct] = useState(props.product)
    const [qty, setQty] = useState(0)
    const [cartTemp, setCartTemp] = useState()
    const [key, setKey] = useState(props.key)

    // 🫀 Functions
    function incrementQty() {
        setQty(qty+1)
        updateCart()
    }
    function decrementQty() {
        if(qty>0){
            setQty(qty-1)
            updateCart()
        }
    }
    function updateCart() {
       
    }

    useEffect(()=>{
        getCart(cartTemp)
    },[cartTemp]);
    useEffect(()=>{
        let currentCart = cart;

        let isNew=!currentCart.find(item => item.id  == product.id)
        console.log('isZero:'+qty)
        if(isNew)
        {
            currentCart.push(product)
            setCartTemp(currentCart)
        }
        console.log('QTY : '+qty)
        console.log(cart)
        if(qty==0)
        {
            let currentCart =cart.filter(item => !(item.id  == product.id))
            console.log(currentCart)
            debugger
            setCartTemp(currentCart)
        }

    },[qty]);
    
    return (
        <div className={`product`} key={props.key}>
            <div className="image" style={{backgroundImage:`url(${product.image})`}}></div>
            <div className="details">
                {product.name.slice(0,24)}
            </div>
            <div className="qty">
                <div className="decrement" onClick={decrementQty}>-</div>
                    {qty}
                <div className="increment" onClick={incrementQty}>+</div>
                <br />
            </div>
        </div>
    )
}

export default Product
