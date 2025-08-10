import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
//compontest
 import { Inter } from 'next/font/google';
import { Roboto } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

// Carga la fuente Roboto con los estilos que necesites
const roboto = Roboto({
  weight: ['400', '700'], // Aquí puedes especificar los grosores (weights) que usarás
  subsets: ['latin'],
  display: 'swap', // 'swap' le dice al navegador que use una fuente del sistema mientras carga la de Roboto
});

export const metadata = {
  title: "Portafolio",
  description: "Mi Portafolio de proyectos Full Stack",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={roboto.className}>
      <body
        className={` antialiased flex flex-col min-h-screen`}
      >
        
        <main className="pt-16"> {/* Agrega un padding superior para evitar que el contenido quede debajo del header fijo */}
          {children}
        </main>
      </body>
    </html>
  );
}
