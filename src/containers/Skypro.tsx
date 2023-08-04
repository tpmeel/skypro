import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from 'react-router-dom'

import Shop from './Shop/Shop'
import Cart from "./Cart/Cart";
import Layout from "./Layout/Layout";

const Skypro: React.FC = () => {
    return(
        <Router basename={process.env.REACT_APP_URI}>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route index element={<Shop />} />
                    <Route path="cart" element={<Cart />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default Skypro
