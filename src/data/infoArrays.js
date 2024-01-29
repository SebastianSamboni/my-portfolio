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

export const projects = [
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

export const jobs = [
    {
        timeWorked: 'Octubre 2022 - Agosto 2023',
        company: 'Mátrica Digital',
        jobTitle: 'Analista y Líder Técnico',
        responsibilities: [
            'Análisis de estructuras de datos.',
            'Manejo de bases de datos PL/SQL.',
            'Revisar requerimientos funcionales y modelos operativos.',
            'Realizar diagramas de componentes, secuencias y arquitectura de software.',
            'Planificación de tiempos para la implementafción y despliegue en ambientes de QA y Producción.'
        ]
    }, {
        timeWorked: 'Marzo 2018 - Septiembre 2018',
        company: 'COMFACAUCA',
        jobTitle: 'Analista pasante',
        responsibilities: [
            'Documentación de No conformidades.',
            'Pruebas de caja blanca y caja negra.',
            'Recolección de datos e información de diferentes áreas de la empresa.'
        ] 
    }, {
        timeWorked: 'Octubre 2016 - Abril 2017',
        company: 'Semillero SENNOVA SENA',
        jobTitle: 'Analista Desarrollador',
        responsibilities: [
            'Recolección de Información.',
            'Trabajo de campo.',
            'Documentación inicial del proyecto.'
        ]
    }
]