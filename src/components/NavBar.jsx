import { Divider, Drawer, List, ListItem, ListItemButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const drawerWidth = 200

const NavBar = () => {
    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box'
                }
            }}
            variant='permanent'
            anchor='left'
        >
            <Toolbar>
                <Typography sx={{ fontFamily: 'Montserrat'}}>
                    Sebastian Samboni
                </Typography>
            </Toolbar>
            <Divider />
            <List>
                <ListItem>
                    <ListItemButton>
                        <Link to='/'>Sobre Mí</Link>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <Link to='/my-stack'>Mi Stack</Link>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <Link to='/projects'>Proyectos</Link>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <Link to='/experience'>Experiencia</Link>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <Link to='/education'>Educación</Link>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <Link to='/others'>Otros</Link>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <Link to='/contact'>Contacto</Link>
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider />
            <List sx={{marginTop: '80px'}}>
                <ListItem>
                    <ListItemButton>Descargar CV</ListItemButton>
                </ListItem>
            </List>
        </Drawer>
    )
}

export default NavBar