import { Theme } from '@mui/material'

const LayoutStyle = (theme: Theme) => ({
    header: {
        paddingTop: { sm: '0px', xs: '13px' },
        background: '#CCC',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '76px',
        width: '100%',
        color: theme.palette.primary.contrastText
    },
    title: {
        fontSize: '36px',
        fontWeight: 600
    },
    buttonsWrapper: {
        display: 'flex',
        alignItems: 'center',
        gap: '32px',
        textDecoration: 'none',
        marginRight: { sm: '0px', xs: '16px' }
    },
    link: {
        textDecoration: 'none',
        color: theme.palette.primary.contrastText
    },
    text: {
        display: { sm: 'block', xs: 'none' },
    },
    icon: {
        paddingTop: '10px',
        display: { sm: 'none', xs: 'block' },
    }
})

export default LayoutStyle
