import React from "react";

// Componente Hero, sección principal destacada de la página con imagen de fondo, título y llamada a la acción.
const Hero: React.FC = () => {
  return (
    // Sección Hero principal, con fondo negro y texto blanco.
    // Uso de `relative` para superponer los elementos y `overflow-hidden` para evitar desbordes.
    <section className="relative bg-black text-white overflow-hidden">
      
      {/* Imagen de fondo con opacidad reducida para mejorar la legibilidad del texto */}
      <img
        src="/hero.svg" // Ruta de la imagen de fondo.
        alt="PhD traders working with financial data" // Descripción accesible para la imagen.
        className="absolute inset-0 w-full h-full object-cover opacity-50" // Ocupa todo el contenedor y tiene opacidad del 50%.
        loading="lazy" // Carga perezosa para mejorar el rendimiento.
      />

      {/* Contenedor para el contenido de la sección Hero, con flexbox para alineación */}
      <div className="relative z-10 flex flex-col items-start justify-center min-h-screen px-6 lg:px-20 max-w-full">
        
        {/* Título principal con un tamaño de fuente grande y animación de desvanecimiento */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 max-w-2xl animate-fade-in">
          FIND OUT HOW PhD's TRADE SMARTER
        </h1>

        {/* Descripción debajo del título, con color gris claro para contraste */}
        <p className="text-base sm:text-lg md:text-xl mb-8 max-w-lg text-gray-300 animate-fade-in">
          Remove the Institutional Edge with PhD Quant Finance Expertise.
        </p>

        {/* Contenedor de los botones, con alineación flexible que se adapta a diferentes tamaños de pantalla */}
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          
          {/* Botón principal de acción con un diseño limpio, sombra y transición de color al pasar el ratón */}
          <button
            className="bg-black text-white px-6 py-3 rounded-full shadow-md hover:bg-gray-800 transition-all duration-300 focus:outline-none"
            aria-label="Find out how PhDs trade smarter" // Descripción accesible para mejorar la accesibilidad.
          >
            FIND OUT HOW PhDs TRADE SMARTER
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
