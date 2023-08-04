import { Theme } from '@mui/material'

const MContainerStyle = (theme: Theme) => ({
    container: {
        minHeight: '100vh',
        padding: {
            lg: theme.spacing(0, 15, 0, 15),
            md: theme.spacing(0, 3, 0, 3),
            sm: theme.spacing(0, 3, 5, 3),
            xs: theme.spacing(0, 1, 5, 1),
        },
        background: '#ffffff',
    }
})

export default MContainerStyle
