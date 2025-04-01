import React, { useEffect, useRef } from "react";
import { Product } from "@/components/Resources/Cart";

// Definición de las propiedades del componente CartTable
interface CartTableProps {
  // Lista de productos que se mostrarán en la tabla
  products: Product[];

  // Función para formatear la moneda a un formato de string
  formatCurrency: (value: number) => string;

  // Función para manejar los cambios de cantidad de los productos
  handleQuantityChange: (
    id: number, // ID del producto
    event: React.ChangeEvent<HTMLInputElement> // Evento de cambio en el input
  ) => void;

  // Función que abre el modal de confirmación para eliminar un producto
  openRemoveModal: (product: Product) => void;
}

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

  // Animación de entrada y salida (transiciones CSS)
  useEffect(() => {
    const modalElement = modalRef.current;
    if (modalElement) {
      modalElement.classList.add("opacity-0", "transition-opacity", "duration-300");
      setTimeout(() => {
        modalElement.classList.remove("opacity-0");
        modalElement.classList.add("opacity-100");
      }, 10);
    }
  }, []);

  // Manejo de foco
  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.focus(); // Coloca el foco en el modal al abrir
    }
  }, []);

  // Función para manejar teclas de acceso rápido (Esc para cerrar y Enter para confirmar)
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onCancel();
    }
    if (e.key === "Enter") {
      onConfirm();
    }
  };

  // Cerrar el modal si se hace clic fuera de él
  const handleOutsideClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onCancel();
    }
  };

  return (
    // Contenedor principal con fondo semitransparente y animación de entrada
    <div
      ref={modalRef}
      onClick={handleOutsideClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out"
      aria-labelledby="remove-product-modal"
      role="dialog"
      aria-hidden="false"
      onKeyDown={handleKeyDown}
      tabIndex={-1} // Permite la interactividad del modal con teclado
    >
      <div className="bg-white rounded-lg shadow-lg p-6 w-80 opacity-0">
        {/* Título del modal */}
        <h3
          id="remove-product-modal"
          className="font-bold text-gray-800 text-lg mb-4"
        >
          Remove Product
        </h3>

        {/* Descripción o mensaje dentro del modal */}
        <p className="text-gray-600 mb-6">
          Are you sure you want to remove this product from your cart?
        </p>

        {/* Contenedor para los botones de acción */}
        <div className="flex justify-end space-x-4">
          {/* Botón para cancelar la acción */}
          <button
            onClick={onCancel}
            className="py-2 px-4 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600"
            aria-label="Cancel"
          >
            Cancel
          </button>

          {/* Botón para confirmar la eliminación */}
          <button
            onClick={onConfirm}
            className="py-2 px-4 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            aria-label="Remove"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

// Componente funcional que renderiza la tabla del carrito de compras
const CartTable: React.FC<CartTableProps> = ({
  products,
  formatCurrency,
  handleQuantityChange,
  openRemoveModal,
}) => {
  return (
    <div className="lg:col-span-2 bg-white rounded-lg shadow-md">
      {/* Verifica si hay productos en el carrito */}
      {products.length > 0 ? (
        <div className="overflow-x-auto">
          {/* Tabla para mostrar los productos */}
          <table className="min-w-full border-collapse border border-gray-200 text-sm sm:text-base">
            <thead className="bg-gray-100">
              <tr>
                {/* Encabezado de la columna de producto */}
                <th className="py-3 px-4 text-left font-medium text-gray-600">
                  Product
                </th>

                {/* Encabezado de la columna de precio */}
                <th className="py-3 px-4 text-left font-medium text-gray-600">
                  Price
                </th>

                {/* Encabezado de la columna de cantidad */}
                <th className="py-3 px-4 text-center font-medium text-gray-600">
                  Quantity
                </th>

                {/* Encabezado de la columna de subtotal */}
                <th className="py-3 px-4 text-right font-medium text-gray-600">
                  Subtotal
                </th>

                {/* Encabezado de la columna para el botón de eliminar */}
                <th className="py-3 px-4"></th>
              </tr>
            </thead>
            <tbody>
              {/* Mapeo de los productos en la lista */}
              {products.map((product) => (
                <tr
                  key={product.id}
                  className="transition-all duration-300 ease-in-out hover:bg-gray-50"
                >
                  <td className="py-4 px-4 flex items-center">
                    {/* Imagen del producto */}
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-md mr-4"
                    />
                    {/* Nombre del producto */}
                    <span className="text-gray-800 font-medium">
                      {product.name}
                    </span>
                  </td>

                  <td className="py-4 px-4 text-gray-600">
                    {/* Precio del producto */}
                    Rs. {formatCurrency(product.price)}
                  </td>

                  <td className="py-4 px-4 text-center">
                    {/* Campo de entrada para cambiar la cantidad */}
                    <input
                      type="number"
                      min="1"
                      value={product.quantity}
                      onChange={(event) => handleQuantityChange(product.id, event)}
                      className="w-20 h-10 text-center border border-gray-400 rounded-md bg-white text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
                      // Validación para asegurarse que la cantidad no sea menor que 1
                      onInput={(e) => e.preventDefault()}
                    />
                  </td>

                  <td className="py-4 px-4 text-right text-gray-600">
                    {/* Subtotal basado en el precio y la cantidad */}
                    Rs. {formatCurrency(product.price * product.quantity)}
                  </td>

                  <td className="py-4 px-4 text-center">
                    {/* Botón para abrir el modal de eliminación */}
                    <button
                      onClick={() => openRemoveModal(product)}
                      className="text-red-500 hover:text-red-700 transition-transform transform hover:scale-105"
                    >
                      🗑️
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        // Mensaje cuando el carrito está vacío
        <div className="p-6 text-center text-gray-600">
          Your cart is empty.
        </div>
      )}
    </div>
  );
};

export default CartTable;
