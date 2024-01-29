import {
    Button,
    Container,
    Grid,
    TextField,
    TextareaAutosize,
    Typography
} from '@mui/material'
import React from 'react'

const Contact = () => {
    const clearForm = () => {
        document.getElementById('name').value = ''
        document.getElementById('surname').value = ''
        document.getElementById('email').value = ''
        document.getElementById('phone').value = ''
        document.getElementById('description').value = ''
    }

    const handleSubmit = e => {
        e.preventDefault()
        clearForm()
    }

    return (
        <Container>
            <Typography variant='h4' textAlign='center'>
                Ponte en Contacto!
            </Typography>
            <form method='POST'
                action='https://formspree.io/f/xayrqkbr'
                onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item md={6}>
                        <TextField id='name'
                            name='name'
                            label='Nombre'
                            variant='outlined' 
                            required
                            style={{ width: '100%'}}
                        />
                    </Grid>
                    <Grid item md={6}>
                        <TextField id='surname'
                            name='surname'
                            label='Apellidos'
                            variant='outlined'
                            required
                            style={{ width: '100%'}}
                        />
                    </Grid>
                    <Grid item md={6}>
                        <TextField id='email'
                            name='email'
                            label='Correo'
                            variant='outlined'
                            required
                            style={{ width: '100%'}}
                        />
                    </Grid>
                    <Grid item md={6}>
                        <TextField id='phone'
                            name='phone'
                            label='Celular/Teléfono'
                            variant='outlined'
                            required
                            style={{ width: '100%'}}
                        />
                    </Grid>
                    <Grid item md={12}>
                        <TextareaAutosize
                            minRows={3}
                            name='description'
                            maxRows={10}
                            placeholder='Escribe tu pregunta!'
                            style={{ resize: 'none', width: '100%', height: '150px'}}
                            required
                        />
                    </Grid>
                    <Grid item md={12}>
                        <Button type='submit'
                            variant='contained'
                            fullWidth
                        >
                            Enviar
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    )
}

export default Contact