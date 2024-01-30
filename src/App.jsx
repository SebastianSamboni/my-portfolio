import './App.css'
import AboutMe from './pages/AboutMe'
import StackList from './pages/StackList'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Contact from './pages/Contact'
import NavBar from './components/NavBar'
import { Box, CssBaseline, Divider } from '@mui/material'
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
                    <Divider sx={{ 
                        marginTop: 18, 
                        marginBottom: 18, 
                        backgroundColor: '#009688'
                    }}/>
                    <StackList />
                    <Divider sx={{ 
                        marginTop: 18, 
                        marginBottom: 18, 
                        backgroundColor: '#009688'
                    }}/>
                    <Projects />
                    <Divider sx={{ 
                        marginTop: 18, 
                        marginBottom: 18, 
                        backgroundColor: '#009688'
                    }}/>
                    <Experience />
                    <Divider sx={{ 
                        marginTop: 18, 
                        marginBottom: 18, 
                        backgroundColor: '#009688'
                    }}/>
                    <Contact />
                    <Divider sx={{ 
                        marginTop: 18, 
                        marginBottom: 5, 
                        backgroundColor: '#009688'
                    }}/>
                    <Footer />
                </Container>
            </Box>
        </Box>
    )
}

export default App;
