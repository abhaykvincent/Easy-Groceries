import React from 'react'

import {
    Link
  } from "react-router-dom";
import './header.scss';

export default function Header() {
    return (
        <div  className="header">
            <div className="margin"></div>
            <div className="logo">Easy Groceries</div>
            <div className="header-cart">
                <Link
                    to={{
                        pathname: "/cart",
                        search: "",
                        hash: "",
                        state: { fromDashboard: true }
                    }}
                >
                Cart</Link>
            </div>
        </div>
    )
}
