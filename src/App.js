import React, { /* useEffect, useRef, */ useState } from 'react';
import './App.scss';
// Components
import Header from './components/header/header'


/* function disableScrolling(){
  var x=window.scrollX;
  var y=window.scrollY;
  window.onscroll=function(){window.scrollTo(x, y);};
} */

// APP
function App() {

  // 📦 States

  //currentProducts
  const [currentProducts, setCurrentProducts] = useState();
  //currentProductsHTML
  const [currentProductsHTML, setCurrentProductsHTML] = useState();


  function assembleProductsHTML(){
    //
  }
  return (
    <div className="App">Easy Groceries</div>
  );
}

export default App;

