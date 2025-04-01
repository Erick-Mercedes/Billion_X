import React from "react";

// Definición de las propiedades del componente GradientBackground
interface GradientBackgroundProps {
  /**
   * Los elementos hijos que se renderizarán dentro del fondo con gradiente.
   */
  children: React.ReactNode;
  
  /**
   * Clase opcional para personalizar estilos adicionales en el contenedor.
   * Permite la flexibilidad de añadir clases CSS adicionales.
   */
  className?: string;
}

/**
 * Componente de fondo con gradiente, permite envolver contenido con un fondo que
 * tiene un degradado de colores definidos.
 * 
 * @param {GradientBackgroundProps} props - Las propiedades del componente.
 * @returns {JSX.Element} El componente con el fondo degradado.
 */
const GradientBackground: React.FC<GradientBackgroundProps> = ({ children, className }) => {
  return (
    // El contenedor tiene un fondo con gradiente y se puede personalizar con clases adicionales
    <div
      className={`bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 ${className}`}
    >
      {children}
    </div>
  );
};

export default GradientBackground;
