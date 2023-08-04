import React, { ReactNode } from 'react'
import { Box, SxProps, Theme } from '@mui/material'

interface IImage {
    alt: string
    src: string
    style: SxProps<Theme>
    children?: ReactNode
}

const Image: React.FC<IImage> = ({
    alt,
    src,
    style,
    children
}) => {
    return (
        <Box
            component="img"
            alt={alt}
            src={src}
            sx={style}
        >
            {children}
        </Box>
    )
}

export default Image
