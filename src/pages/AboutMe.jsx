import { Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ProfileImg from '../assets/profile_img.jpeg'
import { Link } from 'react-scroll'

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
        }, 2000)

        return () => {
            clearInterval(interval)
        }
    }, [titles.length])
    
    return (
        <Grid container
            spacing={2}
            id='about-me'
            sx={{
                marginTop: 3
            }}
        >
            <Grid item xs={8}>
                <Typography variant='h3' sx={{ marginTop:  6 }}>
                    Juan Sebastián Samboni
                </Typography>
                <Typography variant='h4'>
                    {titles[currentText]}
                </Typography>
                <Typography variant='subtitle1'
                    sx={{ marginTop: 4}}
                >
                    ¡Hola! Soy Juan Sebastián, desarrollador web y analista de 24 años, apasionado por la creación de interfaces dinámicas y la robustez del back-end.
                    <Link to='my-stack'
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
                    >
                        Conoce más.
                    </Link>
                </Typography>
            </Grid>
            <Grid item xs={4}>
                <img src={ProfileImg} alt='profile_photo' style={{ width: '250px', height: '250px', borderRadius: '50%'}} />
            </Grid>
        </Grid>
    )
}

export default AboutMe