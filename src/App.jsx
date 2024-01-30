import './App.css'
import AboutMe from './pages/AboutMe'
import StackList from './pages/StackList'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Contact from './pages/Contact'
import NavBar from './components/NavBar'
import { Box, CssBaseline } from '@mui/material'
import Footer from './components/Footer'
import { Container } from '@mui/system'

function App() {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <NavBar />
            <Box component="main" sx={{ flexGrow: 1, p: 10 }}>
                <Container>
                    <AboutMe />
                    <StackList />
                    <Projects />
                    <Experience />
                    <Contact />
                    <Footer />
                </Container>
            </Box>
        </Box>
    )
}

export default App;
