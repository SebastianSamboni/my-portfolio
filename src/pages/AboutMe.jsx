import { Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ProfileImg from '../assets/profile_img.jpeg'

const AboutMe = () => {
    const [currentText, setCurrentText] = useState(0)
    const titles = [
        'Desarrollador Web',
        'Analista de Sistemas',
        'Diseñador amateur'
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentText((oldValue) => (oldValue + 1) % titles.length)
        }, 3000)

        return () => {
            clearInterval(interval)
        }
    }, [titles.length])
    
    return (
        <Grid container spacing={2}>
            <Grid item>
                <Typography variant='h3'>
                    Juan Sebastián Samboni
                </Typography>
                <Typography variant='h4'>
                    {titles[currentText]}
                </Typography>
            </Grid>
            <Grid item>
                <img src={ProfileImg} alt='profile_photo' style={{ width: '100px', height: '100px', borderRadius: '50%'}} />
            </Grid>
            <Typography variant='subtitle1'>
                ¡Hola! Soy Juan Sebastián, desarrollador web y analista de 24 años apasionado por la creación de interfaces dinámicas y la robustez del back-end.
            </Typography>
        </Grid>
    )
}

export default AboutMe