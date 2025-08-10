// components/Header.jsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-blue-600 font-mono">
             <span className="text-4xl text-blue-900"> &#123;</span> Richard Lipa   <span className="text-4xl text-blue-900"> &#125;</span>
            </Link>
          </div>

          {/* Menú de escritorio */}
          <div className="hidden md:flex space-x-8 font-semibold">
            <Link href="/#inicio" className="text-blue-900 hover:text-blue-600">
              Inicio
            </Link>
           
            <Link href="/#sobre-mi" className="text-blue-900 hover:text-blue-600">
              Acerca de
            </Link>
             <Link href="/#skills" className="text-blue-900 hover:text-blue-600">
              Skills
            </Link>
             <Link href="/#projectos" className="text-blue-900 hover:text-blue-600">
             Projectos
            </Link>
            <Link href="/#contacto" className="text-blue-900 hover:text-blue-600">
              Contacto
            </Link>
          </div>

          {/* Botón de menú para móviles */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Menú desplegable para móviles */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              onClick={toggleMenu}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-gray-700"
            >
              Inicio
            </Link>
            <Link
              href="/servicios"
              onClick={toggleMenu}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-gray-700"
            >
              Servicios
            </Link>
            <Link
              href="/acerca"
              onClick={toggleMenu}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-gray-700"
            >
              Acerca de
            </Link>
            <Link
              href="/contacto"
              onClick={toggleMenu}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-gray-700"
            >
              Contacto
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}