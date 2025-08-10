// components/Footer.jsx
import React from 'react';
import Link from 'next/link';
import { FaLinkedin, FaGithub, FaFacebookF, FaDiscord } from "react-icons/fa";

//coponent
import FormContacto from './FormContacto'

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" text-gray-200 py-16 mt-auto flex flex-col md:flex-row gap-4 px-10">
      <div className="container mx-auto py-8 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl ">
        <div className="flex flex-col justify-between items-start text-center md:text-left gap-4">
          
          {/* Copyright y Nombre */}
          <div className="mb-4 md:mb-0">
            <p className="text-base">
              &copy; {currentYear} Richard Lipa. Todos los derechos reservados.
            </p>
       
          </div>
          
          {/* Enlaces de Redes Sociales */}
          <h2>Redes:</h2>
          <div className="flex flex-col space-x-6 gap-2">
            <Link href="https://github.com/rlipac31" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              {/* Ícono de GitHub */}
              <div className='flex flex-row gap-1'>
                     <FaGithub  className='text-2xl' /><span>GiHub</span>
              </div>
            
            </Link>
            
            {/* Agrega más íconos si lo necesitas */}
            <Link href="https://www.linkedin.com/in/richard-lipa-394140b8/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              {/* Ícono de LinkedIn */}
                <div className='flex flex-row gap-1'>
                <FaLinkedin className='text-2xl' /><span>Linkedin</span>
              </div>
            </Link>
             <Link href="https://www.facebook.com/ricardolopezayala2" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              {/* Ícono de GitHub */}
               <div className='flex flex-row gap-1'>
             <FaFacebookF  className='text-2xl' /><span>Faceboock</span>
             </div>
            </Link>
            
            {/* Agrega más íconos si lo necesitas */}
            <Link href="https://discord.com/users/767828554024222771" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              {/* Ícono de LinkedIn */}
               <div className='flex flex-row gap-1'>
              <FaDiscord className='text-2xl' /><span>Discord</span>
              </div>
            </Link>
           
          </div>
        </div>
      </div>
      <div className='flex'>
           <FormContacto/>
      </div>
    </footer>
  );
}