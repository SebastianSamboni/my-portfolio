import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { jobs } from '../data/infoArrays'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
    return (
        <Container>
            <Typography variant='h4' textAlign='center'>
                Mi Stack de Tecnologías
            </Typography>
            <Grid container spacing={2}>
                {jobs.map((job, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4}>
                        <ProjectCard
                            name={job.name}
                            description={job.description}
                            stack={job.stack}
                            site={job.url_site}
                            git={job.git_url}
                            image={job.img}
                        />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default Projects