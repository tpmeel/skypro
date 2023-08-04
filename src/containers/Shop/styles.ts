import { Theme } from '@mui/material'

const ShopStyle = (theme: Theme) => ({
    cards: {
        paddingBottom: '120px'
    },
    formWrapper: {
        width: '100%',
        display: 'flex',
        justifyContent: 'end',
    },
    formControl: {
        margin: theme.spacing('32px', 0, '32px', 0)
    },
    select: {
        border: '1px solid #C4C4C4',
        borderRadius: '20px',
        color: theme.palette.common.black,
        width: '288px'
    },
})

export default ShopStyle
