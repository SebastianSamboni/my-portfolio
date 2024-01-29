import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Chip,
    Grid,
    Stack,
    Typography
} from '@mui/material'
import React from 'react'

const ProjectCard = ({ name, description, type, stack, site, git, image }) => {

    return (
        <Card sx={{ width: 400}}>
            <CardMedia
                sx={{ height: 140 }}
                component='img'
                image={image}
                title={name}
            />
            <CardContent>
                <Grid container spacing={12}>
                    <Grid item xs={6}>
                        <Typography gutterBottom variant='h5' component='div'>
                            {name}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Chip label={type} size='small' />
                    </Grid>
                </Grid>
                <Typography variant='body2' color='text.secondary'>
                    {description}
                </Typography>
                <Stack spacing={1}
                    direction='row'
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap'
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
                    href={site}
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Visitar
                </Button>
                <Button size='small'
                    href={git}
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
