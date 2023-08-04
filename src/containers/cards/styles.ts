import { Theme } from '@mui/material'

const imgBase = {
    width: '100%',
    objectFit: 'cover',
}

const titleBase = {
    fontSize: '24px',
    fontWeight: 500
}

const descriptionBase = {
    color: '#888888',
    fontSize: '14px',
}

const priceBase = {
    fontSize: '24px',
    fontWeight: 500
}

const CardStyle = (theme: Theme) => ({
    card: {
        position: 'relative',
    },
    img: {
        ...imgBase,
        height: '250px',
    },
    imgCart: {
        ...imgBase,
        height: '176px',
    },
    buttonsWrapper: {
        position: 'absolute',
        top: '10px',
        width: '100%',
        display: 'flex',
        justifyContent: 'end',
        alignItems: 'center',
    },
    icon: {
        color: '#C4C4C4'
    },
    title: {
        ...titleBase,
        paddingTop: '10px',
    },
    titleCart: {
        ...titleBase,
    },
    description: {
        ...descriptionBase,
        paddingTop: '8px',
    },
    descriptionCart: {
        ...descriptionBase,
        paddingTop: '10px',
    },
    price: {
        ...priceBase,
        paddingTop: '12px',
    },
    priceCart: {
        ...priceBase,
        paddingTop: '14px',
    },
    cardContainer: {
        padding: theme.spacing(3,0,3,0)
    },
    textWrapper: {
        maxWidth: '276px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'space-between'
    },
    cartInner: {
        height: '173px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'start'
    },
    buttons: {
        display: 'flex',
        justifyContent: 'start',
        gap: '30px',
    },
    button: {
        textDecoration: 'underline',
        cursor: 'pointer',
    },
})

export default CardStyle
