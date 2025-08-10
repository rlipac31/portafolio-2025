// components/Skills.jsx
import React from 'react';
import { VscVscode } from "react-icons/vsc";
import {FaJava, FaNodeJs, FaAndroid, FaCss3Alt, FaReact, FaDocker, FaGitAlt, FaServer, FaDatabase    } from 'react-icons/fa';
import {SiHyperskill, SiSpringboot, SiSpringsecurity,  SiKotlin, SiPhp, SiMysql,  SiFigma, SiJquery,SiIntellijidea, SiSublimetext, SiPostman, SiInsomnia    } from "react-icons/si";
import { DiMsqlServer, DiHtml5 } from "react-icons/di";
import { BiLogoPostgresql, BiLogoMongodb } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { SlScreenSmartphone } from "react-icons/sl";

export default function Skills() {
  return (
    <section className="bg-white py-10 lg:py-20" id="habilidades">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <h2 className="text-3xl font-bold text-blue-800 mb-16 flex items-center font-mono">
         <SiHyperskill className='text-blue-800 mr-2 ' /> Habilidades
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-gray-700">
          
          {/* Bloque de Backend */}
          <div>
            <h3 className="flex flex-wrap gap-x-4 gap-y-2 font-bold text-gray-900 mb-4 "><FaServer className="text-xl " /> Backend</h3>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-base">
              <span className="flex items-center gap-1"><FaJava className="text-xl text-blue-700" /> Java </span>
               <span className="flex items-center gap-1"><SiSpringboot className="text-xl text-gray-800" /> Spring Boot</span>
                <span className="flex items-center gap-1"><SiSpringsecurity className="text-xl text-gray-800" /> Spring Boot Securyty</span>
              <span className="flex items-center gap-1"><SiKotlin className="text-xl text-purple-600" /> Kotlin</span>
              <span className="flex items-center gap-1"><SiPhp className="text-xl text-blue-400" /> PHP</span>
              <span className="flex items-center gap-1"><FaNodeJs className="text-xl text-green-500" /> Node.js (Express.js)</span>
            </div>
          </div>

          {/* Bloque de Bases de datos */}
          <div>
                <h3 className="flex flex-wrap gap-x-4 gap-y-2 font-bold text-gray-900 mb-4 "> <FaDatabase/> Bases de datos</h3>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-base">
              <span className="flex items-center gap-1"><DiMsqlServer    className="text-xl text-red-500" /> SQL Server</span>
              <span className="flex items-center gap-1"><SiMysql className="text-xl text-blue-500" /> MySQL</span>
              <span className="flex items-center gap-1"><BiLogoPostgresql className="text-xl text-blue-700" /> PostgreSQL</span>
              <span className="flex items-center gap-1"><BiLogoMongodb   className="text-xl text-green-500" /> MongoDB</span>
            </div>
          </div>

          {/* Bloque de Frontend */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">🌐 Frontend</h3>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-base">
              <span className="flex items-center gap-1"><SiFigma className="text-xl text-purple-600" /> Figma</span>
              <span className="flex items-center gap-1"><DiHtml5 className="text-xl text-orange-600" /> HTML</span>
              <span className="flex items-center gap-1"><FaCss3Alt className="text-xl text-blue-600" /> CSS</span>
              <span className="flex items-center gap-1"><SiJquery className="text-xl text-blue-700" /> Jquery</span>
              <span className="flex items-center gap-1"><FaReact  className="text-xl text-blue-400" /> React.js</span>
              <span className="flex items-center gap-1"><RiNextjsFill  className="text-xl text-gray-900" /> Next.js</span>
            </div>
          </div>

          {/* Bloque de Móvil */}
          <div>
            <h3 className="flex flex-wrap gap-x-4 gap-y-2 font-bold text-gray-900 mb-4"> <SlScreenSmartphone className='text-xl' /> Móvil</h3>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-base">
              <span className="flex items-center gap-1"><SiKotlin className="text-xl text-purple-600" /> Kotlin</span>
              <span className="flex items-center gap-1"><FaAndroid className="text-xl text-green-600" /> Android</span>
            </div>
          </div>

          {/* Bloque de DevOps */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">🐳 DevOps</h3>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-base">
              <span className="flex items-center gap-1"><FaDocker  className="text-xl text-blue-500" /> Docker</span>
              <span className="flex items-center gap-1"><FaGitAlt className="text-xl text-orange-600" /> Git</span>
            </div>
          </div>

          {/* Bloque de Herramientas */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">🛠️ Herramientas</h3>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-base">
              <span className="flex items-center gap-1"><SiIntellijidea className="text-xl text-purple-700" /> IntelliJ</span>
          {/*     <span className="flex items-center gap-1"><SiVisualstudiocode className="text-xl text-blue-500" /> VSCode</span> */}
          <span className="flex items-center gap-1"> <VscVscode className="text-xl text-blue-500" /> VSCode</span>

         
              <span className="flex items-center gap-1"><SiSublimetext className="text-xl text-orange-500" /> Sublime Text</span>
              <span className="flex items-center gap-1"><SiPostman className="text-xl text-orange-600" /> Postman</span>
              <span className="flex items-center gap-1"><SiInsomnia className="text-xl text-purple-600" /> Insomnia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}