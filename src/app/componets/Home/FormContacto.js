// components/ContactForm.jsx
'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    
    // URL de tu formulario en Formspree. Reemplaza "YOUR_FORMSPREE_ENDPOINT"
    // con el endpoint que obtuviste en el paso 1.
    const url = 'https://formspree.io/f/mpwlkdrg';

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section className="bg-white py-6  rounded-md" id="contacto">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8  ">
        <h2 className="text-4xl font-extrabold text-center text-blue-900 mb-4">
          Contacto
        </h2>
        <p className="text-center text-lg text-blue-600 mb-6">
          ¿Tienes una idea o un proyecto en mente? ¡Hablemos!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 ">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="text-gray-800 mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
                className="text-gray-800 mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              className="text-gray-800 mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            ></textarea>
          </div>

          {status === 'success' && (
            <p className="text-green-600 text-center font-medium">
              ¡Mensaje enviado con éxito! Te responderé pronto.
            </p>
          )}

          {status === 'error' && (
            <p className="text-red-600 text-center font-medium">
              Ocurrió un error. Por favor, inténtalo de nuevo más tarde.
            </p>
          )}

          <div className="text-center">
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300"
            >
              Enviar Mensaje
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}