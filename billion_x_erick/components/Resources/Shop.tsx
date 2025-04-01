"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "../Footers";
import ProductList from "@/components/Components_Shop/ProductList";
import CartModal from "@/components/Components_Shop/CartModal";
import QuickViewModal from "@/components/Components_Shop/QuickViewModal";
import Pagination from "@/components/Components_Shop/Pagination";
import FilterBar from "@/components/Components_Shop/FilterBar";
import GradientBackground from "@/components/GradientBackground";
import { motion } from "framer-motion"; // Importación de Framer Motion para animaciones

/**
 * Interfaz que define la estructura de un producto.
 */
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

// Lista de productos de ejemplo, en un caso real estos datos provendrían de una API.
const products: Product[] = [
  { id: 1, name: "Product 1", description: "Description for Product 1", price: 19.99, imageUrl: "/images/product-placeholder.png" },
  { id: 2, name: "Product 2", description: "Description for Product 2", price: 29.99, imageUrl: "/images/product-placeholder.png" },
  { id: 3, name: "Product 3", description: "Description for Product 3", price: 39.99, imageUrl: "/images/product-placeholder.png" },
  { id: 4, name: "Product 4", description: "Description for Product 4", price: 49.99, imageUrl: "/images/product-placeholder.png" },
  { id: 5, name: "Product 5", description: "Description for Product 5", price: 99.99, imageUrl: "/images/product-placeholder.png" },
  { id: 6, name: "Product 6", description: "Description for Product 6", price: 95.99, imageUrl: "/images/product-placeholder.png" },
  { id: 7, name: "Product 7", description: "Description for Product 7", price: 99.99, imageUrl: "/images/product-placeholder.png" },
  { id: 8, name: "Product 8", description: "Description for Product 8", price: 91.99, imageUrl: "/images/product-placeholder.png" },
];

const Shop = () => {
  // Estado del carrito y notificaciones
  const [cart, setCart] = useState<Product[]>([]);
  const [notification, setNotification] = useState<string | null>(null);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [sortedProducts, setSortedProducts] = useState<Product[]>(products);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(4);
  const [searchQuery, setSearchQuery] = useState("");

  // Calcular el total de páginas según los productos mostrados por página.
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  /**
   * Agregar un producto al carrito y mostrar una notificación.
   * 
   * @param product Producto a agregar al carrito
   */
  const handleAddToCart = (product: Product) => {
    setCart((prevCart) => {
      const newCart = [...prevCart, product];
      console.log(newCart); // Verificar que el producto se agrega correctamente al carrito
      return newCart;
    });
    showNotification(`Added "${product.name}" to your cart!`);
  };

  /**
   * Mostrar una notificación emergente que desaparece después de 3 segundos.
   * 
   * @param message Mensaje a mostrar en la notificación
   */
  const showNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 3000); // Eliminar notificación después de 3 segundos
  };

  /**
   * Manejar el cambio de orden de los productos por precio (ascendente o descendente).
   * 
   * @param value Valor que define el orden (ascendente o descendente)
   */
  const handleSortChange = (value: string) => {
    const sorted = [...sortedProducts].sort((a, b) =>
      value === "price-asc" ? a.price - b.price : b.price - a.price
    );
    setSortedProducts(sorted);
  };

  /**
   * Manejar el cambio de la barra de búsqueda.
   * 
   * @param query Término de búsqueda
   */
  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setSortedProducts(filtered);
  };

  /**
   * Cambiar la página actual.
   * 
   * @param page Número de la página actual
   */
  const handlePageChange = (page: number) => setCurrentPage(page);

  // Calcular los productos a mostrar según la página actual y los productos por página.
  const startIndex = (currentPage - 1) * productsPerPage;
  const displayedProducts = sortedProducts.slice(startIndex, startIndex + productsPerPage);

  // Abrir el modal del carrito.
  const handleCartClick = () => setIsCartModalOpen(true);

  return (
    <>
      <Navbar showLogin={true} />
      
      <GradientBackground className="py-20">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold text-gray-800 tracking-tight">Shop</h1>
          <p className="mb-8 text-lg text-gray-600">Home &gt; Shop</p>

          {/* Notificación emergente */}
          {notification && (
            <motion.div
              className="fixed top-4 right-4 bg-blue-500 text-white p-3 rounded shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {notification}
            </motion.div>
          )}

          {/* Filtros y productos */}
          <div className="max-w-5xl mx-auto flex flex-col gap-4">
            <FilterBar
              onSortChange={handleSortChange}
              onShowChange={(value) => setProductsPerPage(parseInt(value))}
              onFilterClick={() => {}}
              cartLength={cart.length}
              onCartClick={handleCartClick}
            />

            <ProductList
              products={displayedProducts}
              onAddToCart={handleAddToCart}
              onQuickView={(product) => {
                setSelectedProduct(product);
                setIsQuickViewOpen(true);
              }}
            />

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>

          {/* Sección de Beneficios */}
          <section className="w-full bg-gradient-to-b from-gray-100 to-gray-200 mt-14">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 py-12 max-w-6xl mx-auto text-center">
              {["Free Delivery", "90 Days Return", "Secure Payment"].map((benefit, idx) => (
                <div
                  key={idx}
                  className="hover:scale-110 transition-transform duration-300 bg-white shadow-md rounded-lg p-6"
                >
                  <h3 className="text-2xl font-semibold text-gray-800">{benefit}</h3>
                  <p className="text-lg text-gray-600 mt-4">
                    {idx === 0 && "For all orders over $50, consectetur adipiscing elit."}
                    {idx === 1 && "If goods have problems, consectetur adipiscing elit."}
                    {idx === 2 && "100% secure payment, consectetur adipiscing elit."}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </GradientBackground>

      <Footer />
      <CartModal
        cart={cart}
        isOpen={isCartModalOpen}
        onClose={() => setIsCartModalOpen(false)}
      />

      <QuickViewModal
        product={selectedProduct}
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
        onAddToCart={handleAddToCart}
      />
    </>
  );
};

export default Shop;
