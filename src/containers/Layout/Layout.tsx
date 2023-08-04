import React, { FC } from 'react'
import { Outlet, Link } from "react-router-dom";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AppsIcon from '@mui/icons-material/Apps';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import MContainer from "../../components/MUI/MContainer/MContainer";
import LayoutStyle from "./styles";

const Layout: FC =() => {
    const theme = useTheme()
    const styles = LayoutStyle(theme)
    return(
        <Box>
            <MContainer>
                <Box sx={styles.header}>
                    <Box sx={styles.title}>
                        Интерьер.
                    </Box>
                    <Box sx={styles.buttonsWrapper}>
                        <Link to={'/'} style={styles.link as any}>
                            <Box sx={styles.text}>
                                Каталог
                            </Box>
                            <Box sx={styles.icon}>
                                <AppsIcon />
                            </Box>
                        </Link>
                        <Link to={'/cart'} style={styles.link as any}>
                            <Box sx={styles.text}>
                                Корзина
                            </Box>
                            <Box sx={styles.icon}>
                                <ShoppingCartOutlinedIcon />
                            </Box>
                        </Link>
                    </Box>
                </Box>
                <Outlet />
            </MContainer>
        </Box>
    )
}

export default Layout

