import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';import {
    selectCount,
  } from '../../../../containers/features/counter/counterSlice';
import './Admin.scss'
export default function Cart() {
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
      const CategoryListHTML= categories.map(category=>{
        let PagesNoHtml = [];
        for(let i=0;i< category.pages;i++){
            PagesNoHtml.push(<div className="page">{i+1}</div>)
        }
        return <div className="category">
            <div className="name">{category.name}</div>
            <div className="pages">{PagesNoHtml}
            </div>

        </div>
      })
    return (
        <div className="admin">
            <div className="admin-label">Admin</div>
            <div className="category-list">
                {CategoryListHTML}
            </div>
        </div>
    )
}
