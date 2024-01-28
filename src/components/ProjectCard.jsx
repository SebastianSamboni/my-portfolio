import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography
} from '@mui/material'
import React from 'react'

const ProjectCard = ({ name, description, type, site, git, image }) => {

    return (
        <Card sx={{ maxWidth: 345}}>
            <CardMedia
                sx={{ height: 140 }}
                component='img'
                image={image}
                title={name}
            />
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                    {name}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size='small' href={site} target='_blank' rel='noopener noreferrer'>Visitar</Button>
                <Button size='small' href={git} target='_blank' rel='noopener noreferrer'>GitHub</Button>
            </CardActions>
        </Card>
    )
}

export default ProjectCard
