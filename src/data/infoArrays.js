import ReactLogo from '../assets/react_logo.png'
import ExpressLogo from '../assets/express_logo.svg'

export const sections = [
    {
        id: 1,
        dir: '/',
        text_dir: 'Sobre Mí'
    }, {
        id: 2,
        dir: '/my-stack',
        text_dir: 'Mi Stack'
    }, {
        id: 3,
        dir: '/projects',
        text_dir: 'Proyectos'
    }, {
        id: 4,
        dir: '/experience',
        text_dir: 'Experiencia'
    }, {
        id: 5,
        dir: '/contact',
        text_dir: 'Contacto'
    }
]

export const skills = [
    {
        skillName: 'React',
        skillLogo: ReactLogo,
        percentage: 50
    }, {
        skillName: 'Express',
        skillLogo: ExpressLogo,
        percentage: 70
    }
]