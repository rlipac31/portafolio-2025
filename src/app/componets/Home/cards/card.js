export const ProjectCardTopImage = ({project} ) => {
    const { title, description, img,   technologies, link  } = project;
    return (
      <div className="flex flex-col h-full rounded-xl shadow-lg overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300">
        {/* Imagen del proyecto en la parte superior */}
        <div className="relative w-full h-48 overflow-hidden">
          <img 
            src={img} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
  
        {/* Contenido del proyecto */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-700 text-sm mb-4 flex-grow">
            {description}
          </p>
  
          {/* Tecnologías */}
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tag, index) => (
              <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                {tag}
              </span>
            ))}
          </div>
  
          {/* Botones */}
          <div className="flex gap-3 mt-auto"> {/* mt-auto empuja los botones al final */}
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 text-center py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Ver Demo
            </a>
            <a 
              href={'#'} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 text-center py-2 px-4 border border-gray-300 text-gray-800 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    );
  };