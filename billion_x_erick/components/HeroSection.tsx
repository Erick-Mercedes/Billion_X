// Importamos los componentes necesarios de Next.js para trabajar con imágenes y enlaces
import Image from "next/image";
import Link from "next/link";

// Definimos las clases CSS reutilizables para los estilos de texto y botones
// Estas clases se utilizan para mantener un diseño consistente en toda la aplicación

// Estilos para el título principal (usado en Hero y Solution)
const textStyles = "text-gray-800 text-4xl font-bold mb-4"; 

// Estilos para los subtítulos
const subtitleStyles = "text-gray-900 text-3xl font-bold mb-4"; 

// Estilos para los párrafos, con un color gris claro y un tamaño de fuente adecuado
const paragraphStyles = "text-gray-600 text-lg mb-6"; 

// Estilos para los botones, con efectos de hover, transiciones y enfoque para mejorar la accesibilidad
const buttonStyles =
  "bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800";

// Componente principal HeroAndSolution que renderiza las secciones Hero y Solution
const HeroAndSolution = () => {
  return (
    <main>
      {/* Sección Hero: Introduce el problema y presenta el reto al usuario */}
      <section
        className="flex flex-col md:flex-row items-center bg-white p-6 sm:p-10"
        aria-labelledby="hero-title" // Mejora la accesibilidad con un id para el título
      >
        {/* Imagen ilustrativa del reto que enfrentan los traders */}
        <div className="flex-1 relative">
          <Image
            src="/trading.svg" // Ruta de la imagen que ilustra los desafíos en el trading
            alt="Illustration showing trading challenges faced by retail traders" // Texto alternativo descriptivo para accesibilidad
            width={700} // Definición del ancho de la imagen
            height={400} // Definición de la altura de la imagen
            priority // Prioriza la carga de esta imagen
            className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105" // Efecto de hover y transición en la imagen
          />
        </div>
        
        {/* Texto explicativo en la sección Hero */}
        <div className="flex-1 mt-6 md:mt-0 md:ml-10">
          <h2 id="hero-title" className={textStyles}>
            PROBLEM {/* Título que introduce el problema principal */}
          </h2>
          <h3 className={subtitleStyles}>
            90% Of Traders Fail Their Prop Firm Challenge. {/* Subtítulo que define el reto */}
          </h3>
          <p className={paragraphStyles}>
            Trading without industry-standard risk controls often exposes traders
            to unnecessary losses due to market noise. {/* Descripción breve del problema */}
          </p>
          
          {/* Botón que redirige al usuario a la página de precios */}
          <Link href="/pricing">
            <button className={buttonStyles} aria-label="View our pricing">
              VIEW OUR PRICING {/* Texto del botón */}
            </button>
          </Link>
        </div>
      </section>

      {/* Sección Solution: Presenta la solución que ofrecemos para mitigar el problema */}
      <section
        className="flex flex-col md:flex-row-reverse items-center bg-gray-100 p-6 sm:p-10"
        aria-labelledby="solution-title" // Mejora la accesibilidad con un id para el título de la solución
      >
        {/* Imagen ilustrativa de la solución propuesta */}
        <div className="flex-1 relative">
          <Image
            src="/solution.svg" // Ruta de la imagen que ilustra la solución
            alt="Illustration showing solutions for effective trading risk management" // Texto alternativo descriptivo para accesibilidad
            width={700} // Definición del ancho de la imagen
            height={400} // Definición de la altura de la imagen
            priority // Prioriza la carga de esta imagen
            className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105" // Efecto de hover y transición en la imagen
          />
        </div>

        {/* Texto explicativo en la sección Solution */}
        <div className="flex-1 mt-6 md:mt-0 md:mr-10">
          <h2 id="solution-title" className={textStyles}>
            CONTROL YOUR RISK {/* Título principal de la sección que introduce la solución */}
          </h2>
          <h3 className={subtitleStyles}>
            Our PhD-Level Quants Achieve Risk-Robust Returns {/* Subtítulo que describe la ventaja de la solución */}
          </h3>
          <p className={paragraphStyles}>
            Without advanced quantitative models or PhD-level risk management,
            these algorithms leave retail traders vulnerable to volatile losses and
            increased risk. {/* Descripción de la solución ofrecida */}
          </p>
          
          {/* Botón para redirigir a la página de precios, promoviendo la acción */}
          <Link href="/pricing">
            <button className={buttonStyles} aria-label="View our pricing">
              VIEW OUR PRICING {/* Texto del botón */}
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default HeroAndSolution;
