import JavascriptLogo from '../assets/javascript_logo.svg'
import JavaLogo from '../assets/java_logo.svg'
import ReactLogo from '../assets/react_logo.svg'
import VueLogo from '../assets/vue_logo.svg'
import ExpressLogo from '../assets/express_logo.svg'
import NodeLogo from '../assets/node_logo.svg'
import MongoLogo from '../assets/mongo_logo.svg'
import PostgresLogo from '../assets/postgres_logo.svg'

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
        skillName: 'Javascript',
        skillLogo: JavascriptLogo,
        percentage: 60
    }, {
        skillName: 'Java',
        skillLogo: JavaLogo,
        percentage: 50
    },{
        skillName: 'React',
        skillLogo: ReactLogo,
        percentage: 40
    }, {
        skillName: 'Vue',
        skillLogo: VueLogo,
        percentage: 20
    }, {
        skillName: 'Node',
        skillLogo: NodeLogo,
        percentage: 55
    }, {
        skillName: 'Express',
        skillLogo: ExpressLogo,
        percentage: 70
    }, {
        skillName: 'MongoDB',
        skillLogo: MongoLogo,
        percentage: 40
    }, {
        skillName: 'PostgreSQL',
        skillLogo: PostgresLogo,
        percentage: 50
    }
]

export const jobs = [
    {
        name: 'Dingo Shop',
        description: 'Aplicación Web dedicada al e-commerce de productos para mascotas.',
        type: 'Bootcamp Project',
        stack: [
            'React',
            'NodeJS',
            'Express',
            'Sequelize',
            'PostgreSQL'
        ],
        url_site: 'http://dingo-shop.vercel.app',
        git_url: 'https://github.com/Yefer1892/project-PeaxU',
        img: 'https://res.cloudinary.com/dn6aqyrih/image/upload/v1706464999/projects/ncd7jfyg5wz7kdpo7myn.png'
    }
]