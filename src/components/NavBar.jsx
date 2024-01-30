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
import { Link } from 'react-scroll'
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
                    boxSizing: 'border-box',
                    backgroundColor: '#009688',
                    color: '#fff'
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
                {sections.map((section, index) => (
                    <ListItem key={index}>
                        <Link to={section.id}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500}
                        >
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
                    <a href={`${process.env.PUBLIC_URL}/CV_mine.pdf`} download
                        style={{
                            textDecoration: 'none'
                        }}
                    >
                        <ListItemButton>
                            Descargar CV
                        </ListItemButton>
                    </a>
                </ListItem>
            </List>
        </Drawer>
    )
}

export default NavBar