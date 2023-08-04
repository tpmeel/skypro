import { Theme } from '@mui/material'

const CartStyle = (theme: Theme) => ({
    cart: {
        paddingTop: '32px',
        paddingBottom: '80px'
    },
    titleWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: theme.spacing(0,4,2,0)
    },
    cartButtons: {
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        paddingTop: '26px',
        gap: '7px',
    },
    cartButton: {
        width: '200px',
        borderRadius: '20px'
    },
    order: {
        background: '#F7F6F6',
        borderRadius: '20px',
        padding: theme.spacing(5,3,19,3),
        textAlign: 'center',
    },
    textField: {
        paddingTop: '40px',
    },
    orderTitle: {
        fontSize: '24px',
        fontWeight: 600,
    },
    totalPriceWrapper: {
        paddingTop: '64px',
        fontSize: '24px'
    },
    priceText: {
        fontWeight: 400
    },
    priceNumber: {
        fontWeight: 700
    },
    makeOrder: {
        paddingTop: '18px',
    },
    makeOrderButton: {
        width: '290px',
        height: '41px',
        borderRadius: '20px'
    },
})

export default CartStyle
