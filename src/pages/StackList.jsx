import React from 'react'
import { skills } from '../data/infoArrays'
import SkillItem from '../components/SkillItem'
import { Container, Grid, Typography } from '@mui/material'

const StackList = () => {
    return (
        <Container>
            <Typography variant='h4' textAlign='center'>
                Mi Stack de Tecnologías
            </Typography>
            <Grid container spacing={2}>
                {skills.map((skill, index) => (
                    <Grid item key={index} xs={12} sm={6} md={3}>
                        <SkillItem {...skill} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default StackList