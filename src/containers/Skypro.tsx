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
        <Router>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route index element={<Shop />} />
                    <Route path="cart" element={<Cart />} />
                </Route>
            </Routes>
        </Router>
        // <MContainer>
        //     <Grid
        //         container
        //         spacing={3}
        //         justifyContent='center'
        //     >
        //         <Grid
        //             item
        //             container
        //             justifyContent='center'
        //             alignItems='center'
        //             xs={12}
        //         >
        //             <Image
        //                 alt='logo'
        //                 src='https://thumbs.dreamstime.com/b/%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D1%81%D0%B0%D0%BC%D0%BE-%D0%B5%D1%82%D0%B0-%D1%83-%D1%8C%D1%82%D1%80%D0%B0%D0%BC%D0%BE-%D0%BD%D1%8B%D0%B9-%D1%81%D0%B0%D0%BC%D0%BE-%D0%B5%D1%82-%D0%BD%D0%B0-%D0%B3%D0%BE-%D1%83%D0%B1%D0%BE%D0%BC-%D0%BA%D1%80%D1%83%D0%B3%D0%B5-%D0%BF-%D0%BE%D1%81%D0%BA%D0%B8%D0%B9-%D1%81%D1%82%D0%B8-%D1%8C-95288775.jpg'
        //                 style={styles.logo}
        //             />
        //         </Grid>
        //         <Grid item md={3} sm={12} xs={12}>
        //             <Filters />
        //         </Grid>
        //         <Grid item md={8} sm={12} xs={12}>
        //             <Tickets />
        //         </Grid>
        //     </Grid>
        // </MContainer>
    )
}

export default Skypro
