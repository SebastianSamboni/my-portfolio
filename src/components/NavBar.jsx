import {
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    Toolbar,
    Typography
} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { sections } from '../data/infoArrays'

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
            <List sx={{ marginTop: '100px'}}>
                {sections.map(section => (
                    <ListItem key={section.id}>
                        <Link to={section.dir}>
                            <ListItemButton>
                                {section.text_dir}
                            </ListItemButton>
                        </Link>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List sx={{marginTop: '80px'}}>
                <ListItem>
                    <ListItemButton>
                        Descargar CV
                    </ListItemButton>
                </ListItem>
            </List>
        </Drawer>
    )
}

export default NavBar