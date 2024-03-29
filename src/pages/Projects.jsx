import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { projects } from '../data/infoArrays'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
    return (
        <Container>
            <Typography variant='h4' textAlign='center'>
                Mi Stack de Tecnologías
            </Typography>
            <Grid container spacing={2}>
                {projects.map((project, index) => (
                    <Grid item key={index} xs={12} md={6}>
                        <ProjectCard {...project} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default Projects