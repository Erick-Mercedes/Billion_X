import React, { useState } from "react";
import { Product } from "@/components/Resources/Shop";
import { motion } from "framer-motion";

// Definición de las propiedades que espera el componente QuickViewModal.
interface QuickViewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  isOpen,
  onClose,
  onAddToCart
}) => {
  // Estado para gestionar la carga de la imagen.
  const [isImageLoading, setIsImageLoading] = useState(true);

  // Si el modal no está abierto o no hay producto, no renderizamos nada.
  if (!isOpen || !product) return null;

  // Maneja el evento de carga de la imagen, cambiando el estado cuando la imagen esté completamente cargada.
  const handleImageLoad = () => setIsImageLoading(false);

  // Cierra el modal si el click es fuera del área del contenido del modal.
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Formatea el precio del producto a dos decimales.
  const formattedPrice = product.price.toFixed(2);

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50"
      role="dialog"
      aria-labelledby="modal-title"
      aria-hidden={!isOpen}
      onClick={handleOverlayClick} // Cierra el modal si se hace clic fuera del contenido
    >
      <motion.div
        className="bg-white p-6 rounded-lg shadow-lg w-96"
        initial={{ opacity: 0, y: -50 }} // Animación de entrada más suave
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }} // Transición de salida (desvanecimiento)
        transition={{ duration: 0.5 }} // Suaviza la animación
        aria-describedby="modal-description"
      >
        <div className="text-center">
          {/* Placeholder de carga de la imagen */}
          {isImageLoading && (
            <div className="w-full h-64 bg-gray-200 mb-4 rounded animate-pulse" />
          )}
          {/* Imagen del producto */}
          <div className="w-full h-64 mb-4 flex justify-center items-center">
            <img
              src={product.imageUrl || "/images/product-placeholder.png"}
              alt={product.name}
              className="object-contain w-full h-full" // Se ajusta la imagen para que se vea completa
              onLoad={handleImageLoad}
              onError={(e) => e.currentTarget.src = "/images/product-placeholder.png"} // Fallback en caso de error
            />
          </div>
          {/* Nombre del producto */}
          <h3 id="modal-title" className="text-lg font-bold text-gray-800">{product.name}</h3>
          {/* Descripción del producto */}
          <p id="modal-description" className="text-sm text-gray-600">{product.description}</p>
          {/* Precio del producto */}
          <p className="mt-4 text-xl font-semibold text-gray-900">${formattedPrice}</p>
          {/* Botón para añadir al carrito */}
          <motion.button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            onClick={() => {
              onAddToCart(product);
              onClose();
            }}
            whileTap={{ scale: 0.95 }} // Efecto de reducción en el clic
            aria-label="Add product to cart"
          >
            Add to Cart
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default QuickViewModal;
