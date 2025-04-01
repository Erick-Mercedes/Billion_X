import React from "react";
import ProductCard from "@/components/Components_Shop/ProductCard";
import { Product } from "@/components/Resources/Shop";
import { motion } from "framer-motion"; // Importación de framer-motion para animaciones

// Definición de las propiedades que espera el componente ProductList
interface ProductListProps {
  // Lista de productos que se van a mostrar
  products: Product[];
  
  // Función que se ejecuta al añadir un producto al carrito
  onAddToCart: (product: Product) => void;
  
  // Función que se ejecuta al hacer una vista rápida del producto
  onQuickView: (product: Product) => void;
}

// Componente funcional ProductList que recibe las propiedades definidas en ProductListProps
const ProductList: React.FC<ProductListProps> = ({ products, onAddToCart, onQuickView }) => {
  return (
    // Contenedor principal con grid adaptable a diferentes tamaños de pantalla
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Itera sobre los productos y muestra un ProductCard por cada uno */}
      {products.map((product) => (
        <motion.div
          key={product.id}  // Clave única para cada producto
          
          // Animaciones de entrada al cargar el componente
          initial={{ opacity: 0, y: 20 }}  // Comienza con opacidad 0 y desplazado verticalmente
          animate={{ opacity: 1, y: 0 }}   // Se anima a opacidad 1 y sin desplazamiento
          transition={{ duration: 0.3 }}    // Duración de la animación (300ms)
          
          // Interacciones al pasar el mouse (hover) sobre el contenedor
          whileHover={{ scale: 1.05 }}  // Aumenta ligeramente el tamaño del producto al hacer hover
        >
          {/* Componente ProductCard que muestra la información de cada producto */}
          <ProductCard
            product={product}            // Información del producto
            onAddToCart={onAddToCart}    // Función para añadir al carrito
            onQuickView={onQuickView}    // Función para la vista rápida
          />
        </motion.div>
      ))}
    </div>
  );
};

// Exportación del componente para su uso en otras partes de la aplicación
export default ProductList;
