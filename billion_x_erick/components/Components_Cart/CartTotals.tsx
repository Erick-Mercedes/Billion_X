import React from "react";
import Link from "next/link";
import { Product } from "@/components/Resources/Cart";

// Definición de las propiedades del componente CartTotals
interface CartTotalsProps {
  /**
   * Lista de productos en el carrito.
   */
  products: Product[];

  /**
   * Función para calcular el total del carrito.
   * @returns El total calculado de los productos.
   */
  calculateTotal: () => number;

  /**
   * Función para formatear un valor numérico a formato de moneda.
   * @param value Valor numérico a formatear.
   * @returns El valor formateado como cadena.
   */
  formatCurrency: (value: number) => string;

  /**
   * Función que maneja la acción de proceder al checkout.
   */
  handleCheckout: () => void;

  /**
   * Estado de carga, indica si se está procesando el checkout.
   */
  isLoading: boolean;
}

/**
 * Componente que muestra los totales del carrito y el botón de checkout.
 * @param products Lista de productos en el carrito.
 * @param calculateTotal Función para calcular el total.
 * @param formatCurrency Función para formatear el valor total.
 * @param handleCheckout Función para manejar el proceso de checkout.
 * @param isLoading Estado de carga para deshabilitar el botón de checkout.
 * @returns JSX que representa el total del carrito y el botón de checkout.
 */
const CartTotals: React.FC<CartTotalsProps> = ({
  products,
  calculateTotal,
  formatCurrency,
  handleCheckout,
  isLoading,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
      {/* Título de la sección de totales con animación */}
      <h2 className="text-lg sm:text-xl font-semibold text-gray-800 transition-all ease-in-out duration-300">
        Cart Totals
      </h2>

      <div className="mt-4">
        {/* Subtotal con animación */}
        <div className="flex justify-between text-gray-600 mb-4 transition-all ease-in-out duration-300">
          <span>Subtotal</span>
          <span>Rs. {formatCurrency(calculateTotal())}</span>
        </div>

        {/* Total con animación */}
        <div className="flex justify-between font-medium text-gray-800 mb-4 transition-all ease-in-out duration-300">
          <span>Total</span>
          <span>Rs. {formatCurrency(calculateTotal())}</span>
        </div>

        {/* Botón de Checkout */}
        <Link href="/Resources/Checkout">
          <button
            onClick={handleCheckout}
            className={`w-full py-2 rounded-md ${
              isLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-black text-white hover:bg-gray-800 transition-all duration-300 ease-in-out transform hover:scale-105"
            }`}
            disabled={products.length === 0 || isLoading} // Deshabilitar el botón si no hay productos o si está en carga
          >
            {/* Mostrar animación de carga o texto dependiendo del estado */}
            {isLoading ? (
              <div className="flex justify-center items-center">
                <div className="w-6 h-6 border-t-2 border-white border-solid rounded-full animate-spin"></div>
              </div>
            ) : products.length === 0 ? (
              "Cart is Empty" // Texto si el carrito está vacío
            ) : (
              "Check Out" // Texto si el carrito tiene productos
            )}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartTotals;
