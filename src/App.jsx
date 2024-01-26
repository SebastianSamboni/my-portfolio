import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import AboutMe from './pages/AboutMe';
import StackList from './pages/StackList';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Others from './pages/Others';
import Contact from './pages/Contact';
import NavBar from './components/NavBar';
import { Box, CssBaseline } from '@mui/material';

function App() {
    return (
        <BrowserRouter>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <NavBar />
                <Box component="main" sx={{flexGrow: 1, p: 3}}>
                    <AboutMe />
                    <StackList />
                    <Projects />
                    <Experience />
                    <Education />
                    <Others />
                    <Contact />
                </Box>
                </Box>
        </BrowserRouter>
    )
}

export default App;
