import React, { useEffect, useRef, useState } from "react";

// Propiedades del modal de eliminación de producto
interface RemoveProductModalProps {
  // Función que se ejecuta cuando el usuario cancela la acción
  onCancel: () => void;
  // Función que se ejecuta cuando el usuario confirma la eliminación del producto
  onConfirm: () => void;
}

// Componente de modal para eliminar un producto
const RemoveProductModal: React.FC<RemoveProductModalProps> = ({
  onCancel,
  onConfirm,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(false); // Estado de carga
  const [showSuccess, setShowSuccess] = useState(false); // Estado de éxito

  // Maneja la acción de presionar teclas
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onCancel();
    }
    if (e.key === "Enter") {
      handleConfirm();
    }
  };

  // Cierra el modal si el clic es fuera de la caja
  const handleOutsideClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onCancel();
    }
  };

  // Establece el foco cuando el modal se abre
  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.focus();
    }
  }, []);

  // Confirmación con carga
  const handleConfirm = () => {
    setIsLoading(true); // Empieza la carga
    onConfirm();
    setTimeout(() => {
      setIsLoading(false); // Finaliza la carga
      setShowSuccess(true); // Muestra el mensaje de éxito
      setTimeout(() => setShowSuccess(false), 2000); // Oculta el mensaje después de 2 segundos
    }, 1500); // Simulación de retraso
  };

  return (
    // Contenedor principal con fondo semitransparente y animaciones
    <div
      ref={modalRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300 ease-in-out"
      aria-labelledby="remove-product-modal"
      role="dialog"
      aria-hidden="false"
      onKeyDown={handleKeyDown}
      onClick={handleOutsideClick}
      tabIndex={-1}
      style={{ animation: 'fadeIn 0.3s ease-out' }} // Animación de aparición
    >
      <div
        className="bg-white rounded-lg shadow-2xl p-6 w-80 transition-transform transform"
        style={{ animation: 'slideUp 0.3s ease-out' }} // Animación de subida
      >
        {/* Título del modal */}
        <h3
          id="remove-product-modal"
          className="font-bold text-gray-800 text-lg mb-4 text-center"
        >
          Remove Product
        </h3>

        {/* Descripción o mensaje dentro del modal */}
        <p className="text-gray-600 mb-6 text-center">
          Are you sure you want to remove this product from your cart?
        </p>

        {/* Contenedor para los botones de acción */}
        <div className="flex justify-center space-x-4">
          {/* Botón para cancelar la acción */}
          <button
            onClick={onCancel}
            className="py-2 px-4 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600 transition duration-150 ease-in-out"
            aria-label="Cancel"
          >
            Cancel
          </button>

          {/* Botón para confirmar la eliminación */}
          <button
            onClick={handleConfirm}
            className="py-2 px-6 bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white rounded-lg hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-200 ease-in-out transform hover:scale-105"
            aria-label="Remove"
          >
            {isLoading ? (
              <div className="flex justify-center items-center">
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 1 1 16 0A8 8 0 0 1 4 12z" />
                </svg>
                Removing...
              </div>
            ) : (
              "Remove"
            )}
          </button>
        </div>
      </div>

      {/* Mensaje de éxito tras la confirmación */}
      {showSuccess && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-green-500 text-xl text-center">
          Product Removed Successfully!
        </div>
      )}
    </div>
  );
};

export default RemoveProductModal;
