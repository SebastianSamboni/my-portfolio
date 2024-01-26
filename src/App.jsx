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

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/' element={<AboutMe />} />
                <Route path='/about-me' element={<Navigate to='/' />} />
                <Route path='/my-stack' element={<StackList />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/experience' element={<Experience />} />
                <Route path='/education' element={<Education />} />
                <Route path='/others' element={<Others />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
