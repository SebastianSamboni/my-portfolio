import { Container, Grid, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <Container component='footer'>
            <Grid>
                <Grid item md={12}>
                    <Typography variant='h6' textAlign='center'>
                        &#169; Sebastián Samboni. Desarrollador. 2024.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Footer
