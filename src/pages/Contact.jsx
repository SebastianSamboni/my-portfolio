import {
    Container,
    Grid,
    TextField,
    TextareaAutosize,
    Typography
} from '@mui/material'
import React from 'react'

const Contact = () => {
    return (
        <Container>
            <Typography variant='h4' textAlign='center'>
                Ponte en Contacto!
            </Typography>
            <form>
                <Grid container spacing={2}>
                    <Grid item md={6}>
                        <TextField id='name'
                            label='Nombre'
                            variant='outlined' 
                            required
                        />
                    </Grid>
                    <Grid item md={6}>
                        <TextField id='surname'
                            label='Apellidos'
                            variant='outlined'
                            required
                        />
                    </Grid>
                    <Grid item md={6}>
                        <TextField id='email'
                            label='Correo'
                            variant='outlined'
                            required
                        />
                    </Grid>
                    <Grid item md={6}>
                        <TextField id='phone'
                            label='Celular/Teléfono'
                            variant='outlined'
                            required
                        />
                    </Grid>
                    <Grid item md={12}>
                        <TextareaAutosize
                            minRows={3}
                            maxRows={10}
                            placeholder='Escribe tu pregunta!'
                            style={{ resize: 'none', height:''}}
                            required
                        />
                    </Grid>
                </Grid>
            </form>
        </Container>
    )
}

export default Contact