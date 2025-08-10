// components/Presentation.jsx
import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <section className="bg-white py-10 lg:py-24" id="presentacion">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

          {/* Columna de texto */}
          <div className="lg:w-1/2">
            {/*  <h1 className="text-4xl font-extrabold text-blue-700 mb-6">
              👋 ¡Hola, soy Richard Lipa!
            </h1> */}
            <h1 className="text-4xl font-extrabold text-blue-800 mb-6 font-mono">
              ¡Hola, soy Richard Lipa!
            </h1>
            <p className="text-lg text-gray-500 mb-2 leading-relaxed ">
              Soy programador  <strong className="font-semibold text-blue-700">Full Stack</strong>  con más de 4 años de experiencia en proyectos propios y empresas de software. Me apasiona crear soluciones funcionales y atractivas, siempre con enfoque en el usuario.

            </p>
            <p className="text-lg text-gray-500  leading-relaxed  ">

              Soy curioso, responsable y colaborativo. Me gusta aprender nuevas tecnologías y tengo conocimientos en electrónica, redes y hardware, lo que complementa mi perfil técnico.

              Fuera del código, disfruto del cine, los viajes y explorar cómo la tecnología impacta nuestro día a día.
            </p>
          </div>

          {/* Columna de imagen */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-72 h-64 sm:w-80 sm:h-80 lg:w-130 lg:h-80 rounded-br-4xl rounded-bl-sm rounded-tl-4xl rounded-tr-sm overflow-hidden shadow-2xl">
              <Image
                src="https://res.cloudinary.com/rlipac/image/upload/v1754768794/yoEnArequipa_uqjchw.jpg"
                alt="Imagen de Richard Lipa"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}