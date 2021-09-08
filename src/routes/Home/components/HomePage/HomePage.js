import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AD1 from '../../../../statics/ad-1.jpg'
import {useDispatch,useSelector } from 'react-redux';
import {
  addToCart,
  localToCart,
  selectCount,
} from '../../../../containers/features/counter/counterSlice';

import './Home.scss'
import { createPopper } from '@popperjs/core';
import Product from '../ProductSingle/Product';



// Pass the button, the tooltip, and some options, and Popper will do the
// magic positioning for you:

function HomePage() {
  const history = useHistory();

  const dispatch = useDispatch();
  const [activeCategory, setActiveCategory] = useState('Fruits & Vegetables')
  const [categories, setCount] = useState([
    {
        "name": "Fruits & Vegetables",
        "image": "url(\"//i.walmartimages.ca/img/category/grocery/tiles/2019/Week14/CT/CT155x155/CT_WMS_OG-Fruits-Vegetables_20190425_E.jpg\")",
        "id": "N-3799",
        "pages":5

    },
    {
        "name": "Dairy & eggs",
        "image": "url(\"//i.walmartimages.ca/img/category/grocery/tiles/2019/Week14/CT/CT155x155/CT_WMS_OG-Dairy-Eggs_20190425_E.jpg\")",
        "id": "N-3798",
        "pages":13
    },
    {
        "name": "Meat, seafood & alternatives",
        "image": "url(\"//i.walmartimages.ca/img/category/grocery/tiles/2019/Week14/CT/CT155x155/CT_WMS_OG-Meat-Seafood_20190425_E.jpg\")",
        "id": "N-3793",
        "pages":4
    },
    {
        "name": "Pantry food",
        "image": "url(\"//i.walmartimages.ca/img/category/grocery/tiles/2020/Week40/CT_WMS_OG-Pantry_20201029_E.jpg\")",
        "id": "N-3794",
        "pages":50
    },
    {
        "name": "Bakery",
        "image": "url(\"//i.walmartimages.ca/img/category/grocery/tiles/2019/Week14/CT/CT155x155/CT_WMS_OG-Bakery_20190425_E.jpg\")",
        "id": "N-3796",
        "pages":6
    },
    {
        "name": "Frozen food",
        "image": "url(\"//i.walmartimages.ca/img/category/grocery/tiles/2019/Week14/CT/CT155x155/CT_WMS_OG-Frozen-Food_20190425_E.jpg\")",
        "id": "N-3795",
        "pages":22
    },
    {
        "name": "Drinks",
        "image": "url(\"//i.walmartimages.ca/img/category/grocery/tiles/2019/Week14/CT/CT155x155/CT_WMS_OG-Drinks_20190425_E.jpg\")",
        "id": "N-3791",
        "pages":25
    },
    {
        "name": "International foods",
        "image": "url(\"//i.walmartimages.ca/img/category/grocery/tiles/2019/Week14/CT/CT155x155/CT_WMS_OG-International-Foods_20190425_E.jpg\")",
        "id": "N-4356",
        "pages":0
    },
    {
        "name": "Deli & fresh prepared meals",
        "image": "url(\"//i.walmartimages.ca/img/category/grocery/tiles/2020/Week31/CT_WMS_OG-Deli-Fresh-Meals_20200827_E.jpg\")",
        "id": "N-3792",
        "pages":0
    },
    {
        "name": "Natural & organic",
        "image": "url(\"//i.walmartimages.ca/img/category/grocery/tiles/2019/Week14/CT/CT155x155/CT_WMS_OG-Natural-Organic_20190425_E.jpg\")",
        "id": "N-3992",
        "pages":0
    },
    {
        "name": "Chips and snacks",
        "image": "url(\"//i.walmartimages.ca/img/category/grocery/tiles/2019/Week14/CT/CT155x155/CT_WMS_OG-Snacks-Candy_20190425_E.jpg\")",
        "id": "N-3842",
        "pages":0
    },
    {
        "name": "Pasta, rice & beans",
        "image": "url(\"//i.walmartimages.ca/img/category/grocery/tiles/2019/Week14/CT/CT155x155/CT_WMS_OG-Pasta-Beans-Rice_20190425_E.jpg\")",
        "id": "pasta-rice-beans",
        "pages":0
    },
    {
        "name": "Household & cleaning supplies",
        "image": "url(\"//i.walmartimages.ca/img/category/grocery/tiles/2019/Week14/CT/CT155x155/CT_WMS_OG-Household-Supplies_20190425_E.jpg\")",
        "id": "N-3803",
        "pages":0
    },
    {
        "name": "Personal care",
        "image": "url(\"//i.walmartimages.ca/img/category/grocery/tiles/2020/Week24/CT-L1/CT_WMS_OG-Personal-Care_20200709_E.jpg\")",
        "id": "N-4287",
        "pages":0
    },
    {
        "name": "Health",
        "image": "url(\"//i.walmartimages.ca/img/category/grocery/tiles/2020/Week24/CT-L1/CT_WMS_OG-Health_20200709_E.jpg\")",
        "id": "N-3800",
        "pages":0
    },
    {
        "name": "Beauty",
        "image": "url(\"//i.walmartimages.ca/img/category/grocery/tiles/2020/Week24/CT-L1/CT_WMS_OG-Beauty_20200709_E.jpg\")",
        "id": "N-9570",
        "pages":0
    },
    {
        "name": "Pets",
        "image": "url(\"//i.walmartimages.ca/img/category/grocery/tiles/2019/Week14/CT/CT_WMS_OG-Pet-Essentials_20190425_E.jpg\")",
        "id": "N-3797",
        "pages":0
    },
    {
        "name": "Baby",
        "image": "url(\"//i.walmartimages.ca/img/category/grocery/tiles/2019/Week14/CT/CT155x155/CT_WMS_OG-Baby-Essentials_20190425_E.jpg\")",
        "id": "N-3789",
        "pages":0
    },
    {
        "name": "Home, kitchen & outdoor",
        "image": "url(\"//i.walmartimages.ca/img/category/grocery/tiles/2020/Week21/L1-CT/CT_WMS_OG-Home-Kitchen-Outdoor_20200618_E.jpg\")",
        "id": "N-8584",
        "pages":0
    },
    {
        "name": "Electronics & entertainment",
        "image": "url(\"//i.walmartimages.ca/img/category/grocery/tiles/2020/Week21/L1-CT/CT_WMS_OG-Electronics-Entertainment_20200618_E.jpg\")",
        "id": "N-9438",
        "pages":0
    },
    {
        "name": "Toys & sports",
        "image": "url(\"//i.walmartimages.ca/img/category/grocery/tiles/2020/Week21/L1-CT/CT_WMS_OG-Toys-Sports_20200618_E.jpg\")",
        "id": "N-8607",
        "pages":0
    },
    {
        "name": "Crafts & office supplies",
        "image": "url(\"//i.walmartimages.ca/img/category/grocery/tiles/2020/Week21/L2-CT-Home-Kitchen-Outdoor/CT_WMS_OG-Home-Crafts-Office_20200618_E.jpg\")",
        "id": "crafts-office-supplies",
        "pages":0
    },
    {
        "name": "Household appliances",
        "image": "url(\"//i.walmartimages.ca/img/category/grocery/tiles/2020/Week21/L2-CT-Home-Kitchen-Outdoor/CT_WMS_OG-Home-Appliances_20200618_E.jpg\")",
        "id": "household-appliances",
        "pages":0
    },
    {
        "name": "Ice cream & treats",
        "image": "url(\"//i.walmartimages.ca/img/category/grocery/tiles/2020/Week21/L1-CT/CT_WMS_OG-Ice-Cream-Treats_FoodX_20200618_E.jpg\")",
        "id": "ice-cream-treats",
        "pages":0
    }
  ])
  const [products, setProducts] = useState([
    {
        "price": "$2.47",
        "id": "6000016950304",
        "image": "//i5.walmartimages.ca/images/Thumbnails/094/505/6000200094505.jpg?odnBound=200",
        "priceUnit": "",
        "name": "Broccoli Stalks",
        "unit": "Sold in singles",
        "category": " Fruits & Vegetables"
    },
    {
        "name": "Fresh Attitude Spring Mix Salad Kit",
        "image": "//i5.walmartimages.ca/images/Thumbnails/469/9_r/10294699_R.jpg?odnBound=200",
        "price": "$3.47",
        "category": " Fruits & Vegetables",
        "priceUnit": "",
        "unit": "155g, Single Serving",
        "id": "6000143007830"
    },
    {
        "priceUnit": "",
        "unit": "454 g",
        "price": "$5.97",
        "category": " Fruits & Vegetables",
        "id": "6000143007974",
        "image": "//i5.walmartimages.ca/images/Thumbnails/484/6_r/10294846_R.jpg?odnBound=200",
        "name": "Fresh Attitude Spring Mix"
    },
    {
        "category": " Fruits & Vegetables",
        "name": "Fresh Attitude Prewashed Arugula",
        "id": "6000143008002",
        "priceUnit": "",
        "image": "//i5.walmartimages.ca/images/Thumbnails/000/097/999999-888048000097.jpg?odnBound=200",
        "unit": "142 g",
        "price": "$3.47"
    },
    {
        "category": " Fruits & Vegetables",
        "priceUnit": "",
        "price": "$3.47",
        "unit": "Minced Garlic 250 g",
        "name": "Minced Garlic",
        "image": "//i5.walmartimages.ca/images/Thumbnails/100/028/999999-6939100028.jpg?odnBound=200",
        "id": "6000148205400"
    },
    {
        "price": "$6.77",
        "image": "//i5.walmartimages.ca/images/Thumbnails/192/928/192928.jpg?odnBound=200",
        "category": " Fruits & Vegetables",
        "id": "6000148205471",
        "priceUnit": "",
        "unit": "Minced Garlic 1 Kg",
        "name": "Minced Garlic"
    },
    {
        "priceUnit": "$4.35/kg",
        "price": "87¢",
        "name": "Pears, Bartlett",
        "category": " Fruits & Vegetables",
        "id": "6000187833002",
        "image": "//i5.walmartimages.ca/images/Thumbnails/-40/242/999999-40242.jpg?odnBound=200",
        "unit": "Sold in singles"
    },
    {
        "priceUnit": "",
        "id": "6000188920591",
        "image": "//i5.walmartimages.ca/images/Thumbnails/094/566/6000200094566.jpg?odnBound=200",
        "unit": "Sold in singles",
        "price": "$1.67",
        "name": "Cucumber, Seedless",
        "category": " Fruits & Vegetables"
    },
    {
        "name": "Pomegranate",
        "image": "//i5.walmartimages.ca/images/Thumbnails/-31/271/999999-31271.jpg?odnBound=200",
        "category": " Fruits & Vegetables",
        "price": "$2.47",
        "priceUnit": "",
        "unit": "Sold in singles",
        "id": "6000188960731"
    },
    {
        "name": "Apple, Golden Delicious",
        "image": "//i5.walmartimages.ca/images/Thumbnails/094/499/6000200094499.jpg?odnBound=200",
        "unit": "Sold in singles",
        "price": "79¢",
        "id": "6000189882597",
        "category": " Fruits & Vegetables",
        "priceUnit": "$4.34/kg"
    },
    {
        "priceUnit": "$6.56/kg",
        "image": "//i5.walmartimages.ca/images/Thumbnails/lu4/853/999999-PLU4853.jpg?odnBound=200",
        "category": " Fruits & Vegetables",
        "name": "Tomato, Beefsteak",
        "id": "6000190008474",
        "price": "$1.85",
        "unit": "Sold in singles"
    },
    {
        "category": " Fruits & Vegetables",
        "name": "Sweet Potato",
        "price": "$1.40",
        "image": "//i5.walmartimages.ca/images/Thumbnails/-40/747/999999-40747.jpg?odnBound=200",
        "priceUnit": "$2.14/kg",
        "id": "6000190025745",
        "unit": "Sold in singles"
    }
  ])

  const categoriesHTML = categories.map((category) => 
    <div className="category" onClick={()=>{
      console.log(category.name)
      setActiveCategory(category.name)
      fetch(`http://localhost:5001/easy-groceries-online/us-central1/api/easy/getProductsByCategory/${category.id}`)
        .then(response => response.json())
        .then(data=>{
          setProducts(data)
          console.log(data)
        }
          );
      }}>
      <div className="category-image" style={{backgroundImage: category.image}}></div>
      <div className="category-name">{category.name}</div>
    </div>
  );
  const productsHTML = products.map((product) => {
    return  <Product 
    id={product.id}  
    name={product.name}  
    priceUnit={product.priceUnit} 
    price={product.price} 
    image={product.image}/>
  }
    
  );
  
  useEffect(() => {
    const productsImageHTML  =  document.querySelectorAll(".product-image")
    productsImageHTML.forEach((product,i)=>{
      product.style.animationDelay  = `${0.5+0.1*i}s`;
    })

    const productsDetailsHTML  =  document.querySelectorAll(".product-details")
    productsDetailsHTML.forEach((product,i)=>{
      product.style.animationDelay  = `${0.9+0.1*i}s`;
    })

  });
  return (
    <div className="App">

      <div className="ad coke">
        <img src={AD1} alt="" srcset=""/>
      </div>
      <div className="category-list">
        <div className="section-head">
          <h2>Category</h2>
        </div>
        <div className="categories">
          {categoriesHTML}
        </div>
        
      </div>
      <div className="product-list">
        <div className="search">
          <input type="text" 
          name="search" 
          id="product-search-home" 
          className="product-search"
          placeholder="Search... Coke, Lettuice, Oreo, Heinz"
          />
        </div>
        <div className="product-category-name">{activeCategory}</div>
        <div className="products">
          {productsHTML}
        </div>
        <div className="pagination">
          <div className="left"></div>
          <div className="main">
            <p className="page_no active">1</p>
            <p className="page_no">2</p>
            <p className="page_no">3</p>
            <p className="page_no">4</p>
            <p className="page_no">5</p>
          </div>
          <div className="right">  </div>
        </div>
        
      </div>
      
      <div className="ad coke">
        <img src={AD1} alt="" srcset=""/>

      </div>
    </div>
  );
}

export default HomePage;
