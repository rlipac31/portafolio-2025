

import React from 'react';
import Image from 'next/image';

// components/Projects.jsx
import { ProjectCard } from './cards/ProjectCard';

// components/Projects.jsx



import { ProjectCardTopImage  } from './cards/card.js';


const getProjects= async () => {
 const  proyectos = [
    {
        id: 1,
        title: 'AppVotar',
        description: 'AppVotar es una plataforma independiente de encuestas electorales enfocada en Perú 2026. Garantiza la transparencia mediante votación anónima validada con DNI (sin almacenar datos personales). Surge como alternativa neutral y confiable frente a encuestadoras tradicionales, buscando convertirse en un referente ciudadano.',
        technologies: ['Next.js', 'React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
        img: "https://res.cloudinary.com/rlipac/image/upload/v1769630141/VOTOLIBRE_OK_rblqyt.png",
        link: 'https://app-votar-2025.vercel.app/', // Reemplaza con la URL de tu proyecto
        git:"https://github.com/rlipac31/AppVotar-2025"
    },
    {
        id: 2,
        title: 'Sentiment-APi',
        description: 'Analizador de de reseña de peliculas, puede analizar comentarios idividuales o de carga masiva atraves de una archivos(excel) .csv.',
        technologies: ['Next.js, tailwindCss', 'Java JPA sprin boot','mysql','python', ' jwt', 'falyway','flask' ],
        img: "https://res.cloudinary.com/rlipac/image/upload/v1768929795/Frontend_Home_jxgkle.png",
        //technologies: ['Kotlin', 'Android Studio', 'SQLite'],
        link: 'https://github.com/rlipac31/masi-abm-api', // Reemplaza con la URL de tu 
        git:"https://github.com/rlipac31/masi-abm-api"
    },
     {
        id: 3,
        title: 'Masi-Care',
        description: 'La plataforma líder en gestión de cuidados asistenciales. Conectamos tecnología de punta con la calidez humana que tu familia necesita.',
        technologies: ['Node.js',' Prisma', 'Next.js', ' PostgreSql'],
        img: "https://res.cloudinary.com/rlipac/image/upload/v1773702899/MASI_sklgk0.png",
        //technologies: ['Kotlin', 'Android Studio', 'SQLite'],
        link: 'https://github.com/rlipac31/masi-abm-api', // Reemplaza con la URL de tu proyecto
        git:"https://github.com/rlipac31/masi-abm-api"
    },
    {
        id: 4,
        title: 'MediVol',
        description: 'Medivol es una aplicación móvil desarrollada en Kotlin 📱 para la plataforma Android, diseñada para optimizar la gestión de citas y datos médicos. Esta aplicación se conecta a un potente servicio backend desarrollado con Java Spring Boot 🍃, ofreciendo un control de acceso robusto mediante JWT (JSON Web Tokens) 🔑 y persistencia de datos en MySQL 🗄️.',
        img: "https://res.cloudinary.com/rlipac/image/upload/v1753304441/pantalla_login_na8x1p.png",
        technologies: ['Kotlin', 'Api 33 android', 'Spring Boot and Spring Security', '(JWT) Json Web Tokens', 'Mysql', 'flayway'],
        link: 'https://github.com/rlipac31/app_medi_vol', // Reemplaza con la URL de tu proyecto
        git:"https://github.com/rlipac31/app_medi_vol"
    },
   
    {
        id: 5,
        title: 'sport-reservas',
        description: 'Es un servicio web SasS moulti negocio para gestionar reservas de campos deportivos, control de clientes, reporte de pagos y control de caja, cada negocio se maneja de manera independiente.',
        technologies: ['Node.js, express', 'MongoDB( mysql a futuro)','jwt','Next.js', 'TailwidCss'],
        img: "https://res.cloudinary.com/rlipac/image/upload/v1773695119/CAMPOS___vhrkpr.png",
        link: 'https://gold-reservas.netlify.app/login', // Reemplaza con la URL de tu proyecto
        git:"https://github.com/rlipac31/fron-reseras"
    }
    // {
    //     id: 6,
    //     title: 'Conversor de Modenas',
    //     description: 'Este proyecto es un simple conversor de monedas desarrollado en Java 17. Utiliza una API externa para obtener las tasas de cambio y la librería Gson para parsear la respuesta JSON a objetos Java..',
    //     technologies: ['Java 17', 'Spring Boot ', 'Gson', 'Api: https://www.exchangerate-api.com/'],
    //     img: "https://res.cloudinary.com/rlipac/image/upload/v1753304441/pantalla_login_na8x1p.png",
    //     link: 'https://github.com/rlipac31/conversor-monedas-javaWeb', // Reemplaza con la URL de tu proyecto
    //     git:""
    // }

];
return proyectos;


}



export default async function Projects() {
    const proyectos = await getProjects();

    return (
        <section className="relative overflow-hidden bg-slate-50 py-24 lg:py-32" id="proyectos">
            {/* Decoración de fondo opcional */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-40 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl" />
            </div>

            <div className="container relative mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="text-base font-semibold uppercase tracking-wider text-blue-600">
                        Portafolio
                    </h2>
                    <p className="mt-2 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                        Proyectos Destacados
                    </p>
                    <div className="mt-4 flex justify-center">
                        <span className="inline-block h-1 w-20 rounded-full bg-blue-600"></span>
                    </div>
                </div>

                {proyectos.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-slate-300">
                        <h3 className="text-xl text-slate-500">Próximamente más proyectos...</h3>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
                        {proyectos.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}