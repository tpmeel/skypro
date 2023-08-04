import { createSlice } from '@reduxjs/toolkit'

export interface IProductItem {
    id: number
    title: string
    description: string
    price: number
    img: string
}

export interface IProductInCartItem extends IProductItem {
    count: number
}

export interface IProducts {
    products: {
        favorite: Record<string, IProductItem>
        cart: Record<string, IProductInCartItem>
    }
}

const makeInitialState = (): IProducts => ({
    products: {
        favorite: {
            1: {
                id: 1,
                title: 'Кровать TATRAN',
                description: 'Основание из полированной нержавеющей стали, придает оригинальный парящий эффект.',
                price: 120000,
                img: '1',
                count: 1
            },
        },
        cart: {
            1: {
                id: 1,
                title: 'Кровать TATRAN',
                description: 'Основание из полированной нержавеющей стали, придает оригинальный парящий эффект.',
                price: 120000,
                img: '1',
                count: 1
            },
            2: {
                id: 2,
                title: 'Кресло VILORA',
                description: 'Мягкое и уютное, аккуратное и стильное. Упругие подушки сиденья и приятная на ощупь ткань. ',
                price: 21000,
                img: '2',
                count: 1
            },
        },
    },
} as any)

export const ProductsStore = createSlice({
    name: 'ProductsStore',
    initialState: makeInitialState(),
    reducers: {
        setFavorite: ({ products }, action) => {
            if (action.payload.product.id in products.favorite) {
                delete products.favorite[action.payload.product.id]
            } else {
                products.favorite[action.payload.product.id] = action.payload.product
            }
        },
        addToCart: ({ products }, action) => {
            if (action.payload.product.id in products.cart) {
                if (action.payload.countValue) {
                    products.cart[action.payload.product.id].count = action.payload.countValue
                } else {
                    products.cart[action.payload.product.id].count += 1
                }
            } else {
                products.cart[action.payload.product.id] = {
                    ...action.payload.product,
                    count: 1
                }
            }
        },
        removeFromCart: ({ products }, action) => {
            if (action.payload.product.id in products.cart) {
                if (products.cart[action.payload.product.id].count === 1 || action.payload.isDelete) {
                    delete products.cart[action.payload.product.id]
                } else {
                    products.cart[action.payload.product.id].count -= 1
                }
            }
        },
        clearCart: ({ products }, action) => {
            products.cart = {}
        }
    },
})

export const {
    setFavorite,
    addToCart,
    removeFromCart,
    clearCart,
} = ProductsStore.actions
export default ProductsStore
