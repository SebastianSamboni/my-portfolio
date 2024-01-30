import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { jobs } from '../data/infoArrays'
import InfoCard from '../components/InfoCard'

const Experience = () => {
    return (
        <Container id='experience'>
            <Typography variant='h4' textAlign='center'>
                Experiencia Laboral
            </Typography>
            <Grid container spacing={2} alignContent='center'>
                {jobs.map((job, index) => (
                    <Grid item xs={12} key={index}>
                        <InfoCard {...job} index={index} />
                    </Grid> 
                ))}
            </Grid>
        </Container>
    )
}

export default Experience