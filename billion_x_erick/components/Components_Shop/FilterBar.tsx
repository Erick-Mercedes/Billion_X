import React, { useState } from "react";

// Definimos las propiedades del componente usando la interfaz FilterBarProps
interface FilterBarProps {
  /**
   * Función que se ejecuta cuando el usuario hace clic en el filtro.
   */
  onFilterClick: () => void;

  /**
   * Función que maneja el cambio de opción de ordenamiento.
   * @param value El valor seleccionado del ordenamiento.
   */
  onSortChange: (value: string) => void;

  /**
   * Función que maneja el cambio en el número de elementos mostrados.
   * @param value El valor seleccionado para el número de elementos.
   */
  onShowChange: (value: string) => void;

  /**
   * Longitud actual del carrito de compras, para mostrar el número de artículos.
   */
  cartLength: number;

  /**
   * Función que maneja el clic en el ícono del carrito.
   */
  onCartClick: () => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
  onFilterClick,
  onSortChange,
  onShowChange,
  cartLength,
  onCartClick,
}) => {
  // Estado local para controlar la búsqueda, carga y errores
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);  // Estado para mostrar la animación de carga
  const [view, setView] = useState<"grid" | "list">("grid");  // Control de vista (cuadrícula/lista)
  const [noResults, setNoResults] = useState<boolean>(false);  // Estado para mostrar mensaje de sin resultados

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setError(null); // Reiniciar errores al escribir
    setNoResults(false); // Reiniciar resultados al escribir
  };

  const handleSearchSubmit = () => {
    if (!searchTerm.trim()) {
      setError("Search term cannot be empty."); // Manejo de errores
      return;
    }

    setLoading(true);  // Iniciar carga
    setTimeout(() => {
      // Simulando búsqueda y procesamiento
      console.log("Searching for:", searchTerm);
      setLoading(false);  // Detener carga

      // Simulación de resultados
      if (searchTerm.toLowerCase() !== "example") {
        setNoResults(true);  // Mostrar mensaje si no hay resultados
      } else {
        setNoResults(false);  // Si encuentra productos, no mostrar mensaje
      }
    }, 2000);  // Simulación de carga por 2 segundos
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearchSubmit(); // Ejecuta la búsqueda cuando se presiona Enter
    }
  };

  const toggleView = (viewType: "grid" | "list") => {
    setView(viewType);  // Cambiar la vista
  };

  return (
    <div className="flex flex-wrap justify-between items-center bg-white shadow-md p-6 rounded-lg mb-4 w-full max-w-5xl mx-auto gap-4">
      {/* Sección de Filtros y Búsqueda (izquierda) */}
      <div className="flex items-center gap-4">
        {/* Botón de filtro */}
        <button
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 text-sm"
          onClick={onFilterClick}
        >
          {/* Icono de Filtro */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 text-gray-500"
          >
            <path d="M10 3h4v2h-4zM6 8h12v2H6zm-4 5h20v2H2zm8 5h4v2h-4z" />
          </svg>
          Filter
        </button>

        {/* Campo de búsqueda */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm} // Controlado por el estado local
            onChange={handleSearchChange} // Actualización del estado
            onKeyDown={handleKeyDown} // Detecta el Enter
            className={`border rounded px-4 py-2 text-sm w-64 ${
              error ? "border-red-500" : ""
            } text-gray-800`} // Añadido text-gray-800 para asegurar color visible
          />

          {/* Icono de Búsqueda */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 cursor-pointer"
            onClick={handleSearchSubmit} // Enviar búsqueda al hacer clic
          >
            <path d="M10 2a8 8 0 106.32 13.906l5.387 5.387-1.414 1.414-5.387-5.387A8 8 0 1010 2zm0 2a6 6 0 11-4.244 10.244A6 6 0 0110 4z" />
          </svg>
          {/* Mostrar error si existe */}
          {error && (
            <p className="absolute top-full left-0 text-red-500 text-xs mt-1">
              {error}
            </p>
          )}
          {/* Mostrar mensaje de "Sin productos encontrados" */}
          {noResults && (
            <p className="absolute top-full left-0 text-red-500 text-xs mt-1">
              No products found.
            </p>
          )}
        </div>
      </div>

      {/* Sección de Configuración de Orden y Vista (derecha) */}
      <div className="flex items-center gap-4">
        {/* Selector para mostrar cuántos productos */}
        <label className="flex items-center gap-2 text-sm">
          Show
          <select
            className="border rounded px-2 py-1 text-gray-600 text-sm"
            onChange={(e) => onShowChange(e.target.value)}
            defaultValue="4"
          >
            <option value="4">4</option>
            <option value="8">8</option>
            <option value="12">12</option>
          </select>
        </label>

        {/* Selector para ordenar productos */}
        <label className="flex items-center gap-2 text-sm">
          Sort by
          <select
            className="border rounded px-2 py-1 text-gray-600 text-sm"
            onChange={(e) => onSortChange(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="new-arrivals">New Arrivals</option>
          </select>
        </label>

        {/* Iconos de vista de productos */}
        <div className="flex gap-2">
          {/* Vista de cuadrícula */}
          <div
            className="p-2 bg-gray-100 rounded hover:bg-gray-200 cursor-pointer"
            onClick={() => toggleView("grid")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 text-gray-600"
            >
              <path d="M3 3h8v8H3zm10 0h8v8h-8zm-10 10h8v8H3zm10 0h8v8h-8z" />
            </svg>
          </div>

          {/* Vista de lista */}
          <div
            className="p-2 bg-gray-100 rounded hover:bg-gray-200 cursor-pointer"
            onClick={() => toggleView("list")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 text-gray-600"
            >
              <path d="M3 5h18v2H3zm0 6h18v2H3zm0 6h18v2H3z" />
            </svg>
          </div>
        </div>

        {/* Icono de carrito */}
        <div
          className="p-2 bg-gray-100 rounded hover:bg-gray-200 cursor-pointer relative"
          onClick={onCartClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 text-gray-600"
          >
            <path d="M7 4h2l2 6h6l2-6h2l-2.68 8.026c-.15.45-.64.974-1.14.974H8.82c-.5 0-.99-.524-1.14-.974L5 4z" />
            <circle cx="9" cy="20" r="2" />
            <circle cx="17" cy="20" r="2" />
          </svg>
          {/* Mostrar cantidad de productos en el carrito */}
          {cartLength > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartLength}
            </span>
          )}
        </div>
      </div>

      {/* Mostrar animación de carga cuando se está buscando */}
      {loading && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-16 text-blue-500"
            viewBox="0 0 50 50"
            fill="none"
          >
            <circle cx="6" cy="25" r="6" fill="currentColor">
              <animate
                attributeName="cy"
                values="25;10;25"
                dur="1s"
                keyTimes="0;0.5;1"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="25" cy="25" r="6" fill="currentColor">
              <animate
                attributeName="cy"
                values="25;10;25"
                dur="1s"
                keyTimes="0;0.5;1"
                repeatCount="indefinite"
                begin="0.2s"
              />
            </circle>
            <circle cx="44" cy="25" r="6" fill="currentColor">
              <animate
                attributeName="cy"
                values="25;10;25"
                dur="1s"
                keyTimes="0;0.5;1"
                repeatCount="indefinite"
                begin="0.4s"
              />
            </circle>
          </svg>
        </div>
      )}
    </div>
  );
};

export default FilterBar;
