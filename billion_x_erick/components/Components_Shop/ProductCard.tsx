import React from "react";
import { Product } from "@/components/Resources/Shop";
import { motion } from "framer-motion"; // Importamos framer-motion para animaciones

// Definición de los tipos de props que el componente recibirá
interface ProductCardProps {
  product: Product; // Información del producto que se va a mostrar
  onAddToCart: (product: Product) => void; // Función para agregar el producto al carrito
  onQuickView: (product: Product) => void; // Función para vista rápida del producto
}

/**
 * Componente que muestra la tarjeta de un producto con información básica.
 * 
 * @param {ProductCardProps} props - Las propiedades que recibe el componente.
 * @returns JSX.Element
 */
const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, onQuickView }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden"
      whileHover={{ scale: 1.05 }} // Efecto hover que aumenta el tamaño
      transition={{ duration: 0.3 }} // Suaviza la animación
    >
      {/* Imagen del producto */}
      <img 
        src={product.imageUrl} 
        alt={product.name} 
        className="w-full h-56 object-contain" // Asegura que la imagen se ajuste sin perder proporción
      />
      
      {/* Contenedor de la información del producto */}
      <div className="p-4">
        {/* Nombre del producto */}
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        
        {/* Descripción del producto */}
        <p className="text-gray-600 text-sm">{product.description}</p>
        
        {/* Información de precio y botones */}
        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-bold text-gray-900">${product.price}</span>
        </div>
        
        {/* Botones para agregar al carrito y ver rápidamente */}
        <div className="mt-4 space-y-2"> {/* Añadimos espacio entre los botones */}
          <button
            onClick={() => onAddToCart(product)} // Agrega el producto al carrito
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Add to Cart
          </button>
          
          <button
            onClick={() => onQuickView(product)} // Muestra la vista rápida del producto
            className="w-full px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
          >
            Quick View
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
