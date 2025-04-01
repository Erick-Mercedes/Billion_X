import React from "react";
import Image from "next/image";

// Definimos el tipo para los elementos de los logos
interface Logo {
  src: string;
  alt: string;
}

// Componente funcional para mostrar los logos de los clientes
const Clients: React.FC = () => {
  // Lista de logos de empresas asociadas
  const logos: Logo[] = [
    { src: "/logo1.svg", alt: "Logo 1 - Trusted Partner" },
    { src: "/logo2.svg", alt: "Logo 2 - Trusted Partner" },
    { src: "/logo3.svg", alt: "Logo 3 - Trusted Partner" },
    { src: "/logo4.svg", alt: "Logo 4 - Trusted Partner" },
    { src: "/logo5.svg", alt: "Logo 5 - Trusted Partner" },
    { src: "/logo6.svg", alt: "Logo 6 - Trusted Partner" },
    { src: "/logo7.svg", alt: "Logo 7 - Trusted Partner" },
  ];

  return (
    <section className="bg-white py-16 px-4 lg:px-20">
      {/* Título y subtítulo de la sección */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Empowering Trading R&D Through Institutional Tech
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mt-4">
          Trusted by the best companies
        </p>
      </div>

      {/* Contenedor de los logos de los clientes */}
      <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
        {/* Mapeo de los logos y renderizado */}
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex justify-center transform transition-transform duration-300 hover:scale-105"
            // Se agrega un efecto de hover para incrementar la visibilidad del logo
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={60}
              className="object-contain h-auto max-h-16 sm:max-h-20"
              // 'object-contain' asegura que el logo no se distorsione y se ajuste correctamente
              // 'max-h-16' y 'sm:max-h-20' controlan la altura máxima del logo en diferentes tamaños de pantalla
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
