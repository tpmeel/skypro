import React, { FC, useMemo } from 'react'
import { Box, Button, Grid, TextField } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

import CartCard from "../cards/CartCard/CartCard";
import CartStyle from "./styles";
import { useAppDispatch, useAppSelector } from "../../store";
import { clearCart } from "../../redux/Products/ProducstStore";
import ProductsStore from "../../redux/Products/ProducstStore";
import { formatPrice } from "../../utils/format";

const textFields = [
    {
        id: 1,
        placeholder: 'Имя Фамилия'
    },
    {
        id: 2,
        placeholder: '+ 7 904 000 80 80'
    },
    {
        id: 3,
        placeholder: 'Адрес доставки'
    }
]

const Cart: FC =() => {
    const navigate = useNavigate();
    const theme = useTheme()
    const styles = CartStyle(theme)
    const dispatch = useAppDispatch()

    const products = useAppSelector(({
        [ProductsStore.name]: {
            products,
        },
    }) => products)

    const handleButtonClear = () => {
        dispatch(
            clearCart({})
        )
    }

    const handleButtonBack = () => {
        navigate('/')
    }

    const totalPrice = useMemo(() => {
        if (Object.values(products.cart).length === 0) {
            return 0
        } else {
            return Object.values(products.cart).reduce((acc, curr) => {
                return acc + (curr.price*curr.count)}, 0)
        }
    },[products])

    return(
        <Box sx={styles.cart}>
            <Grid container spacing={4}>
                <Grid item lg={8} md={12} sm={12} xs={12}>
                    <Box sx={styles.titleWrapper}>
                        <Box>
                            Товар
                        </Box>
                        <Box>
                            К-во
                        </Box>
                    </Box>
                    {Object.values(products.cart).map((product) => (
                        <CartCard product={product} key={product.id} />
                    ))}
                    <Box sx={styles.cartButtons}>
                        <Button
                            sx={styles.cartButton}
                            variant="outlined"
                            onClick={handleButtonClear}
                        >
                            Очистить корзину
                        </Button>
                        <Button
                            sx={styles.cartButton}
                            disableElevation
                            variant="contained"
                            onClick={handleButtonBack}
                        >
                            Продолжить покупки
                        </Button>
                    </Box>
                </Grid>
                <Grid item lg={4} md={6} sm={12} xs={12}>
                    <Box sx={styles.order}>
                        <Box sx={styles.orderTitle}>
                            Оформление заказа
                        </Box>
                        {textFields.map((field) => (
                            <Box sx={styles.textField} key={field.id}>
                                <TextField
                                    fullWidth
                                    placeholder={field.placeholder}
                                    variant="standard"
                                    sx={{
                                        '.MuiInputBase-input':  {
                                            borderRadius: '6px',
                                            background: '#F7F6F6'
                                        }
                                    }}
                                />
                            </Box>
                        ))}
                        <Box sx={styles.totalPriceWrapper}>
                            <Box component="span" sx={styles.priceText}>
                                Итого:&nbsp;
                            </Box>
                            <Box component="span" sx={styles.priceNumber}>
                                {formatPrice(totalPrice)}
                            </Box>
                        </Box>
                        <Box sx={styles.makeOrder}>
                            <Button
                                sx={styles.makeOrderButton}
                                variant="outlined"
                            >
                                Оформить заказ
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Cart

