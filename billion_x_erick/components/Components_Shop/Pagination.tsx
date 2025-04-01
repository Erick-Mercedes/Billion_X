import React from "react";
import { motion } from "framer-motion";

// Definición de tipos para las propiedades que recibe el componente
interface PaginationProps {
  currentPage: number; // Página actual de la paginación
  totalPages: number; // Total de páginas disponibles
  onPageChange: (page: number) => void; // Función para manejar el cambio de página
}

/**
 * Componente de paginación profesional y animado que permite navegar entre páginas.
 * Utiliza la librería framer-motion para animaciones suaves.
 * 
 * @param currentPage - Página actual en la paginación.
 * @param totalPages - Total de páginas disponibles para navegar.
 * @param onPageChange - Función de callback que se ejecuta al cambiar de página.
 */
const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {

  /**
   * Función para manejar los clics en los botones de la paginación.
   * Solo permite cambiar a una página válida (entre 1 y totalPages).
   * 
   * @param page - Número de la página a la que se desea navegar.
   */
  const handlePageClick = (page: number) => {
    // Comprobamos que la página esté dentro del rango válido
    if (page >= 1 && page <= totalPages) {
      onPageChange(page); // Llamamos a la función de callback para cambiar de página
    }
  };

  return (
    <motion.div
      className="flex justify-center items-center gap-2 mt-6"
      initial={{ opacity: 0 }} // Animación inicial
      animate={{ opacity: 1 }} // Animación cuando el componente está visible
      exit={{ opacity: 0 }} // Animación al salir del componente
      transition={{ duration: 0.5 }} // Duración de la animación
    >
      {/* Botón de "Previous" (Página anterior) */}
      <motion.button
        className="px-4 py-2 text-sm bg-gradient-to-r from-gray-300 to-gray-500 hover:bg-gradient-to-r hover:from-gray-400 hover:to-gray-600 text-white rounded-full shadow-md"
        onClick={() => handlePageClick(currentPage - 1)} // Llama a handlePageClick con la página anterior
        disabled={currentPage === 1} // Deshabilitar si estamos en la primera página
        whileHover={{ scale: 1.1 }} // Efecto al pasar el ratón sobre el botón
        transition={{ type: "spring", stiffness: 300 }} // Transición del botón
      >
        Previous
      </motion.button>

      {/* Botones de las páginas numeradas */}
      {[...Array(totalPages)].map((_, index) => (
        <motion.button
          key={index}
          className={`px-4 py-2 text-sm rounded-full ${
            currentPage === index + 1
              ? "bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow-md"
              : "bg-gradient-to-r from-gray-200 to-gray-400 hover:bg-gradient-to-r hover:from-gray-300 hover:to-gray-500 text-gray-800"
          }`}
          onClick={() => handlePageClick(index + 1)} // Llama a handlePageClick con la página actual
          whileHover={{ scale: 1.1 }} // Efecto al pasar el ratón sobre el botón
          transition={{ type: "spring", stiffness: 300 }} // Transición del botón
        >
          {index + 1} {/* Muestra el número de la página */}
        </motion.button>
      ))}

      {/* Botón de "Next" (Página siguiente) */}
      <motion.button
        className="px-4 py-2 text-sm bg-gradient-to-r from-gray-300 to-gray-500 hover:bg-gradient-to-r hover:from-gray-400 hover:to-gray-600 text-white rounded-full shadow-md"
        onClick={() => handlePageClick(currentPage + 1)} // Llama a handlePageClick con la página siguiente
        disabled={currentPage === totalPages} // Deshabilitar si estamos en la última página
        whileHover={{ scale: 1.1 }} // Efecto al pasar el ratón sobre el botón
        transition={{ type: "spring", stiffness: 300 }} // Transición del botón
      >
        Next
      </motion.button>
    </motion.div>
  );
};

export default Pagination;
