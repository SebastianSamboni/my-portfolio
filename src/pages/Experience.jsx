import { Container, Typography } from '@mui/material'
import React from 'react'
import { jobs } from '../data/infoArrays'
import InfoCard from '../components/InfoCard'

const Experience = () => {
    return (
        <Container>
            <Typography variant='h4' textAlign='center'>
                Experiencia Laboral
            </Typography>
            {jobs.map((job, index) => (
                <InfoCard key={index} {...job} index={index} />
            ))}
        </Container>
    )
}

export default Experience