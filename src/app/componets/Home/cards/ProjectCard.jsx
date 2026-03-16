// components/cards/ProjectCard.jsx
import Image from 'next/image';
import { Globe, Github, Layers } from 'lucide-react'; // Opcional: usa iconos para más nivel

export const ProjectCard = ({ project }) => {
  const { title, description, img, technologies, link } = project;

  return (
    <div className="group relative flex flex-col h-full rounded-2xl border border-slate-200 bg-white p-2 transition-all duration-300 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10">
      
      {/* Contenedor de Imagen con Overlay al hacer hover */}
      <div className="relative h-52 w-full overflow-hidden rounded-xl">
        <img
          src={img}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Contenido */}
      <div className="flex flex-grow flex-col p-5">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-xl font-bold tracking-tight text-slate-800 transition-colors group-hover:text-blue-600">
            {title}
          </h3>
          <Layers className="h-5 w-5 text-slate-400" />
        </div>

        <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-slate-600">
          {description}
        </p>

        {/* Tecnologías con estilo minimalista */}
        <div className="mb-6 flex flex-wrap gap-1.5">
          {technologies.slice(0, 5).map((tag, index) => (
            <span 
              key={index} 
              className="rounded-md bg-slate-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-600 border border-slate-200 transition-colors group-hover:bg-blue-50 group-hover:text-blue-700 group-hover:border-blue-100"
            >
              {tag}
            </span>
          ))}
          {technologies.length > 5 && (
            <span className="text-[10px] text-slate-400 self-center">+{technologies.length - 5}</span>
          )}
        </div>

        {/* Botones de Acción */}
        <div className="mt-auto flex items-center gap-4 border-t border-slate-100 pt-5">
          <a
            href={link}
            target="_blank"
            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-slate-900 py-2.5 text-sm font-medium text-white transition-all hover:bg-blue-600 active:scale-95"
          >
            Ver Proyecto
          </a>
          <a
            href="#"
            target="_blank"
            className="flex items-center justify-center rounded-lg border border-slate-200 p-2.5 text-slate-600 transition-all hover:bg-slate-50 hover:text-blue-600"
            aria-label="GitHub Repository"
          >
            <Github className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};