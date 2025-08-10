// components/Projects.jsx
import React from 'react';
import Image from 'next/image';

const projects = [
    {
        id: 1,
        title: 'AppVotar',
        description: 'AppVotar es una plataforma independiente de encuestas electorales enfocada en Perú 2026. Garantiza la transparencia mediante votación anónima validada con DNI (sin almacenar datos personales). Surge como alternativa neutral y confiable frente a encuestadoras tradicionales, buscando convertirse en un referente ciudadano.',
        technologies: ['Next.js', 'React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
        img: "https://res.cloudinary.com/rlipac/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1743039674/votos_degbfu.png",
        link: 'https://app-votar-2025-orpin.vercel.app/', // Reemplaza con la URL de tu proyecto
    },
    {
        id: 2,
        title: 'VillaShop',
        description: 'Una pataforma web de compras oline.',
        technologies: ['React.js', 'Bootstrap'],
        img: "https://res.cloudinary.com/rlipac/image/upload/v1754788265/villashop_d43ugx.png",
        //technologies: ['Kotlin', 'Android Studio', 'SQLite'],
        link: 'https://villashop-react.vercel.app/categorias/Morrales', // Reemplaza con la URL de tu proyecto
    },
     {
        id: 3,
        title: 'App Foro',
        description: 'API ForoHub es una API RESTful construida con Java y Spring Boot, diseñada para gestionar tópicos en un sistema de foro. Implementa un sistema de autenticación y autorización robusto utilizando Spring Security 🍃 y JSON Web Tokens (JWT) 🔑 garantizando que solo los usuarios autenticados puedan interactuar con los recursos del foro, y persistencia de datos en MySQL 🗄️.',
        technologies: ['Java 17', 'Spring Boot and Spring Security, Spring Data JPA', 'Bean Validations (Jakarta)', 'Lombok', '(JWT) Json Web Tokens', 'Mysql'],
        img: "https://res.cloudinary.com/rlipac/image/upload/v1753304441/pantalla_login_na8x1p.png",
        //technologies: ['Kotlin', 'Android Studio', 'SQLite'],
        link: 'https://github.com/rlipac31/foro-hub', // Reemplaza con la URL de tu proyecto
    },
    {
        id: 4,
        title: 'MediVol',
        description: 'Medivol es una aplicación móvil desarrollada en Kotlin 📱 para la plataforma Android, diseñada para optimizar la gestión de citas y datos médicos. Esta aplicación se conecta a un potente servicio backend desarrollado con Java Spring Boot 🍃, ofreciendo un control de acceso robusto mediante JWT (JSON Web Tokens) 🔑 y persistencia de datos en MySQL 🗄️.',
        img: "https://res.cloudinary.com/rlipac/image/upload/v1753304441/pantalla_login_na8x1p.png",
        technologies: ['Kotlin', 'Api 33 android', 'Spring Boot and Spring Security', '(JWT) Json Web Tokens', 'Mysql', 'flayway'],
        link: 'https://github.com/rlipac31/app_medi_vol', // Reemplaza con la URL de tu proyecto
    },
   
    {
        id: 5,
        title: 'Buscador de Imagenes',
        description: 'Aplicación web para gestionar la información de clientes, ventas y reportes en tiempo real. Incluye autenticación de usuarios, roles y permisos, y una interfaz de usuario intuitiva.',
        technologies: ['Java', 'Spring Boot', 'MySQL', 'React.js', 'Bootstrap'],
        img: "https://res.cloudinary.com/rlipac/image/upload/v1753304441/pantalla_login_na8x1p.png",
        link: 'https://react-pixaby.vercel.app/', // Reemplaza con la URL de tu proyecto
    },
    {
        id: 6,
        title: 'Conversor de Modenas',
        description: 'Este proyecto es un simple conversor de monedas desarrollado en Java 17. Utiliza una API externa para obtener las tasas de cambio y la librería Gson para parsear la respuesta JSON a objetos Java..',
        technologies: ['Java 17', 'Spring Boot ', 'Gson', 'Api: https://www.exchangerate-api.com/'],
        img: "https://res.cloudinary.com/rlipac/image/upload/v1753304441/pantalla_login_na8x1p.png",
        link: 'https://github.com/rlipac31/conversor-monedas-javaWeb', // Reemplaza con la URL de tu proyecto
    }

];

export default function Projects() {
    return (
        <section className="bg-white py-20 lg:py-32" id="proyectos">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <h2 className="text-4xl font-extrabold text-center text-blue-900 mb-12">
                    Proyectos Realizados
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project) => (
                        <a
                            key={project.id}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block bg-gray-50 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6"
                        >
                            <h3 className="text-2xl font-bold text-blue-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                                {project.title}
                            </h3>
                          

                            <p className="text-gray-600 mb-4">{project.description}</p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <span className="inline-flex items-center text-blue-600 font-medium group-hover:underline">
                                Ver proyecto
                                <svg
                                    className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.5 12h-15M13 7l5 5-5 5" />
                                </svg>
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}