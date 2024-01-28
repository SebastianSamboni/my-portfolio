import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography
} from '@mui/material'
import React from 'react'

const ProjectCard = ({ name, description, type, }) => {
    return (
        <Card sx={{ maxWidth: 345}}>
            <CardMedia
                sx={{ height: 140 }}
                image='https://res.cloudinary.com/dn6aqyrih/image/upload/v1706464999/projects/ncd7jfyg5wz7kdpo7myn.png'
                title={name}
            />
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                    {name}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size='small'>Visitar</Button>
                <Button size='small'>GitHub</Button>
            </CardActions>
        </Card>
    )
}

export default ProjectCard
