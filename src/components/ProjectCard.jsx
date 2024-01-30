import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Chip,
    Stack,
    Typography
} from '@mui/material'
import React from 'react'

const ProjectCard = ({ name, description, type, stack, url_site, git_url, img }) => {

    return (
        <Card sx={{ width: '100%', marginTop: 5}}>
            <CardMedia
                sx={{ height: 140 }}
                component='img'
                image={img}
                title={name}
            />
            <CardContent>
                <Typography gutterBottom variant='h4' component='div'>
                    {name}
                </Typography>
                <Typography variant='h6'>
                    {type}
                </Typography>
                <Typography variant='body2' color='text.secondary' sx={{ marginTop: 1}}>
                    {description}
                </Typography>
                <Stack spacing={1}
                    direction='row'
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        marginTop: 1
                    }}
                >
                    {stack.map((element, index) => (
                        <Chip label={element}
                            key={index}
                            size='small'
                        />
                    ))}
                </Stack>
            </CardContent>
            <CardActions>
                <Button size='small'
                    href={url_site}
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Visitar
                </Button>
                <Button size='small'
                    href={git_url}
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    GitHub
                </Button>
            </CardActions>
        </Card>
    )
}

export default ProjectCard
