import React, {FC} from 'react'
import { Box, IconButton} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

import { useAppDispatch, useAppSelector } from "../../../store";
import ProductsStore, { setFavorite, addToCart } from "../../../redux/Products/ProducstStore";
import { IProductItem } from "../../../redux/Products/ProducstStore";
import { formatPrice } from "../../../utils/format";

import CardStyle from '../styles'

export interface ICard {
    product: IProductItem
}

const ShopCard: FC<ICard> = ({
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

    const handleClickFavorite = () => {
        dispatch(
            setFavorite({ product })
        )
    }

    const handleClickAddToCart = () => {
        dispatch(
            addToCart({ product } )
        )
    }

    return(
        <Box sx={styles.card}>
            <Box
                component="img"
                alt=''
                src={require(`../../../assets/${product.img}.png`)}
                sx={styles.img}
            />
            <Box sx={styles.buttonsWrapper}>
                <IconButton onClick={handleClickAddToCart}>
                    {product.id in products.cart
                        ? <ShoppingBagIcon sx={styles.icon} />
                        : <ShoppingBagOutlinedIcon sx={styles.icon} />
                    }
                </IconButton>
                <IconButton onClick={handleClickFavorite}>
                    {product.id in products.favorite
                        ? <FavoriteIcon sx={styles.icon} />
                        : <FavoriteBorderIcon sx={styles.icon} />}
                </IconButton>
            </Box>
            <Box sx={styles.title}>
                {product.title}
            </Box>
            <Box sx={styles.description}>
                {product.description}
            </Box>
            <Box sx={styles.price}>
                {formatPrice(product.price)}
            </Box>
        </Box>
    )
}

export default ShopCard

