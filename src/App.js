import React, { useEffect, useCallback, useState } from 'react';
import './App.scss';
import Product from './components/product/product';
import {defaultProducts} from './components/data/defaultProducts';
import {categoryList} from './components/data/categories';
import { useDispatch ,useSelector} from 'react-redux';
import {addToCart, setProducts} from './actions'
// Components


// APP
function App() {
  const carte = useSelector(state => state.carte)
  const dispatch=useDispatch();
  // 📦 States

  //currentProducts
  const [categories, setCategories] = useState(categoryList);
  //currentProductsHTML
  const [categoriesHTML, setCategoriesHTML] = useState();

  //currentProducts
  const [currentProducts, setCurrentProducts] = useState();
  //currentProductsHTML
  const [currentProductsHTML, setCurrentProductsHTML] = useState();

  //cart
  const [cart, setCart] = useState([]);
  const [cartHTML, setCartHTML] = useState();
  const [cartLength, setCartLength] = useState(0);

  // 🫀 Functions

  function assembleCategoriesHTML(){
    console.log('-- assembleCategoriesHTML starts')
    /* 
      Get products from currentProducts 
      and map with 🎲 Product component
      then store jsx in 📦 currentProductsHTML
    */

    // 1. map currentProducts with Product Component and store to currentProductsHTML_temp
    let categoriesHTML_temp = categories.map((category)=>{
      console.log(category)
      return <div className="category" onClick={()=>{
        
        dispatch(addToCart())
        categoryClickHandle(category)}}>
        <div className="image" style={{backgroundImage:`${category.image}`}}></div>
        {category.name}
      </div>
    })
    // 2. setState currentProductsHTML_temp  to currentProducts
    setCategoriesHTML(categoriesHTML_temp);
  }
  function categoryClickHandle(category){
    fetch(`https://us-central1-easy-groceries-online.cloudfunctions.net/api/easy/getProductsByCategory/${category.id}`)
    .then(response => response.json())
    .then(data => {
      debugger
      console.log(data)
      setCurrentProducts(data)
    });
  } 

  function assembleProductsHTML(){
    console.log('-- assembleProductsHTML starts')
    /* 
      Get products from currentProducts 
      and map with 🎲 Product component
      then store jsx in 📦 currentProductsHTML
    */

    // 1. map currentProducts with Product Component and store to currentProductsHTML_temp
    let currentProductsHTML_temp = currentProducts?[...currentProducts].map((product,index)=>{
     
      return (<Product product={product} cart={cart}  getCart={getCart} key={product.id}/>)
      //return <div className="product">{product.name}</div>
    }):"loading"
    // 2. setState currentProductsHTML_temp  to currentProducts
    setCurrentProductsHTML(currentProductsHTML_temp);

    console.log('-- assembleProductsHTML ends')
  }
  function assembleCartHTML(){
    console.log('-- assembleCartHTML starts')
    /* 
      Get products from currentProducts 
      and map with 🎲 Product component
      then store jsx in 📦 currentProductsHTML
    */

    // 1. map currentProducts with Product Component and store to currentProductsHTML_temp
    let cartHTML_temp = cart.map((item)=>{
      return <div className="item">
        {item.id}
      </div>
    })
    // 2. setState currentProductsHTML_temp  to currentProducts
    setCartHTML(cartHTML_temp);
  }
  const getCart = useCallback(items => {
    setCart(items);

    if(cart) assembleCartHTML()
  }, [setCart,cart]);

  useEffect(()=>{
    assembleCategoriesHTML()
    assembleCartHTML()
  },[]);
  useEffect(()=>{
    assembleProductsHTML();
  },[currentProducts]);





  return (
    <div className="App">
      {cartHTML}
      <div className="categories">{categoriesHTML}</div>  
      <div className="products">{currentProductsHTML
      }</div>  
      

    </div>
  );
}

export default App;

