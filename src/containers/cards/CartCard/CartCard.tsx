import React, { FC } from 'react'
import { Box, Divider, Grid, TextField, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { useAppDispatch, useAppSelector } from "../../../store";
import ProductsStore, { addToCart, setFavorite, removeFromCart } from "../../../redux/Products/ProducstStore";
import { ICard } from "../ShopCard/ShopCard";
import { formatPrice } from "../../../utils/format";

import CardStyle from '../styles'

// NOTE: задаем числа как описано в задаче
const MIN = 4
const MAX = 10

const CartCard: FC<ICard> = ({
    product
}) => {
    const theme = useTheme()
    const styles = CardStyle(theme)
    const dispatch = useAppDispatch()

    const products = useAppSelector(({
        [ProductsStore.name]: {
            products,
        },
    }) => products)

    const handleClickChangeCount = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (Number(event.target.value) > products.cart[product.id].count) {
            dispatch(
                addToCart({ product, countValue: event.target.value  })
            )
        } else {
            dispatch(
                removeFromCart({ product })
            )
        }
    }

    const handleClickDelete = () => {
        dispatch(
            removeFromCart({ product, isDelete: true })
        )
    }

    const handleClickFavorite = () => {
        dispatch(
            setFavorite({ product })
        )
    }

    return(
        <Box sx={styles.card}>
            <Divider/>
            <Grid container spacing={3} sx={styles.cardContainer}>
                <Grid item xs={4}>
                    <Box
                        component="img"
                        alt=''
                        src={require(`../../../assets/${product.img}.png`)}
                        sx={styles.imgCart}
                    />
                </Grid>
                <Grid item xs={8}>
                    <Box sx={styles.cartInner}>
                        <Box sx={styles.textWrapper}>
                            <Box>
                                <Box sx={styles.titleCart}>
                                    {product.title}
                                </Box>
                                <Box sx={styles.descriptionCart}>
                                    {product.description}
                                </Box>
                                <Box sx={styles.priceCart}>
                                    {formatPrice(product.price)}
                                </Box>
                            </Box>
                            <Box sx={styles.buttons}>
                                {product.id in products.favorite && (
                                        <Box sx={styles.button} onClick={handleClickFavorite}>
                                            Избранные
                                        </Box>
                                    )
                                }
                                <Box sx={styles.button} onClick={handleClickDelete}>
                                    Удалить
                                </Box>
                            </Box>
                        </Box>
                        <Box>
                            <TextField
                                type="number"
                                variant="standard"
                                value={products.cart[product.id].count}
                                onChange={handleClickChangeCount}
                                sx={{
                                    '.MuiInputBase-input':  {
                                        borderRadius: '6px',
                                        background: '#F7F6F6'
                                    }
                                }}
                                InputProps={{
                                    disableUnderline: true,
                                    inputProps: {
                                        max: MAX, min: MIN
                                    }
                                }}
                            />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default CartCard

