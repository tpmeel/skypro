import React, { FC, useState, useEffect } from 'react'
import {
    Box,
    Grid,
    Select,
    MenuItem,
    SelectChangeEvent,
    InputLabel,
    FormControl
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import sortBy from "lodash.sortby";
import orderBy from 'lodash.orderby'

import ShopCard from "../cards/ShopCard/ShopCard";
import ShopStyle from './styles'
import {IProductItem} from "../../redux/Products/ProducstStore";

enum SortType {
    cheaperAtFirst = 'cheaperAtFirst',
    moreExpensiveAtFirst = "moreExpensiveAtFirst"
}

const products = [
    {
        id: 1,
        title: 'Кровать TATRAN',
        description: 'Основание из полированной нержавеющей стали, придает оригинальный парящий эффект.',
        price: 120000,
        img: '1'
    },
    {
        id: 2,
        title: 'Кресло VILORA',
        description: 'Мягкое и уютное, аккуратное и стильное. Упругие подушки сиденья и приятная на ощупь ткань. ',
        price: 21000,
        img: '2'
    },
    {
        id: 3,
        title: 'Стол MENU',
        description: 'Европейский дуб - отличается особой прочностью и стабильностью.',
        price: 34000,
        img: '3'
    },
    {
        id: 4,
        title: 'Диван ASKESTA',
        description: 'Благодаря защелкивающемуся механизму диван легко раскладывается в комфортную кровать',
        price: 68000,
        img: '4'
    },
    {
        id: 5,
        title: 'Кресло LUNAR',
        description: 'Прекрасно переносит солнечные лучи, перепады влажности и любые осадки',
        price: 40000,
        img: '5'
    },
    {
        id: 6,
        title: 'Шкаф Nastan',
        description: 'Мебель может быть оснащена разнообразными системами подсветки.',
        price: 80000,
        img: '6'
    }
]

const Shop: FC = () => {
    const theme = useTheme()
    const styles = ShopStyle(theme)

    const [sortType, setSortType] = useState<SortType | ''>('');
    const [sortedProducts, setSortedProducts] = useState<IProductItem[]>([])

    useEffect(() => {
        if (sortType === '') {
            setSortedProducts([...products])
        } else if (sortType === SortType.cheaperAtFirst) {
            setSortedProducts(sortBy(
                products,
                'price',
            ))
        } else if (sortType === SortType.moreExpensiveAtFirst) {
            setSortedProducts(orderBy(
                products,
                ['price'],
                ['desc']
            ))
        }
    },[sortType])

    const handleChange = (event: SelectChangeEvent) => {
        setSortType(event.target.value as SortType);
    };

    return(
        <Box sx={styles.cards}>
            <Box sx={styles.formWrapper}>
                <FormControl size="small" sx={styles.formControl}>
                    <InputLabel id="select">Сортировать</InputLabel>
                    <Select
                        labelId="select"
                        id="select"
                        size='small'
                        value={sortType}
                        onChange={handleChange}
                        sx={styles.select}
                    >
                        <MenuItem value="">Сбросить сортировку</MenuItem>
                        <MenuItem value={SortType.cheaperAtFirst}>Сначала дешевле</MenuItem>
                        <MenuItem value={SortType.moreExpensiveAtFirst}>Сначала дороже</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Grid container spacing={3}>
                {sortedProducts.map((product) => {
                    return(
                        <Grid item lg={4} md={6} xs={12} key={product.id}>
                            <ShopCard product={product} />
                        </Grid>
                    )
                })}
            </Grid>
        </Box>
    )
}

export default Shop

