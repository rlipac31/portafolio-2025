


// app/page.jsx

import About from "./componets/Home/About";
import Footer from "./componets/Home/Footer";
import Header from "./componets/Home/Header";
import Projects from "./componets/Home/Projects";
import Skills from "./componets/Home/Skills";

export default function Home() {
  return (

   <>
      {/* El header se mantiene fijo en la parte superior */}
      <Header/>

      {/* El main contiene todo el contenido de tu SPA */}
      <main className="">
        {/*
          Cada componente de sección de tu página se colocará aquí.
          El 'id' es crucial para la navegación de la barra de menú.
        */}
        <section id="inicio">
          {/* Aquí podrías tener una sección de bienvenida o hero */}
        </section>

        <section id="sobre-mi">
          <About/>
          
        </section>
         <section id="skills">
         
          <Skills/>
        </section>
        
        {/* Aquí puedes agregar más secciones con sus respectivos IDs */}
       <section id="projectos">
          <Projects/>
        </section> 
        {/* <section id="contacto"></section> */}
      </main>
      
       <section id="contacto">
         <Footer/>
        </section> 
    </>
    
  );
}




