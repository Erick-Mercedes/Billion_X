"use client";

import React, { useState, useCallback, useEffect, useRef } from "react";
import Link from "next/link";

// Definimos las propiedades que recibirá el componente Navbar
interface NavbarProps {
  showLogin?: boolean; // Propiedad opcional para mostrar el botón Login
}

const Navbar: React.FC<NavbarProps> = ({ showLogin = false }) => {
  // Estado para gestionar la visibilidad del menú móvil
  const [isOpen, setIsOpen] = useState(false);

  // Estado para gestionar la visibilidad del dropdown de "RESOURCES"
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  // Referencia para el contenedor del dropdown de "RESOURCES"
  const resourcesRef = useRef<HTMLDivElement | null>(null);

  // Función para alternar el estado del menú móvil (abierto/cerrado)
  const toggleMenu = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, []);

  // Función para alternar el estado del dropdown "RESOURCES" (abierto/cerrado)
  const toggleResourcesDropdown = useCallback(() => {
    setIsResourcesOpen((prevState) => !prevState);
  }, []);

  // Efecto que maneja el redimensionamiento de la ventana
  useEffect(() => {
    const handleResize = () => {
      // Si el ancho de la ventana es mayor o igual a 768px (pantallas de escritorio), cerramos el menú móvil y el dropdown
      if (window.innerWidth >= 768) {
        setIsOpen(false);
        setIsResourcesOpen(false);
      }
    };

    // Añadimos un evento para escuchar el redimensionamiento de la ventana
    window.addEventListener("resize", handleResize);

    // Limpiamos el evento al desmontar el componente
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Efecto para manejar clics fuera del dropdown de "RESOURCES" y cerrarlo si es necesario
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Verificamos si el clic fue fuera del dropdown
      if (
        resourcesRef.current &&
        !resourcesRef.current.contains(event.target as Node)
      ) {
        setIsResourcesOpen(false); // Cerramos el dropdown si el clic es fuera del mismo
      }
    };

    // Añadimos el evento para manejar clics fuera
    document.addEventListener("mousedown", handleClickOutside);

    // Limpiamos el evento al desmontar el componente
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="relative flex items-center justify-between px-4 py-4 bg-white shadow-md z-50">
      {/* Logo y Nombre de la Empresa */}
      <div className="flex items-center">
        <img src="/icons/logo.svg" alt="Logo" className="h-16 w-auto mr-2" />
        <span className="hidden md:block text-lg font-bold">BillionX</span>
      </div>

      {/* Menú de escritorio (visible solo en pantallas grandes) */}
      <div className="hidden md:flex space-x-6 text-gray-800 font-medium">
        <Link href="/" className="hover:text-gray-500" role="link" aria-label="Ir a Home">
          HOME
        </Link>
        <Link href="/Resources/About" className="hover:text-gray-500" role="link" aria-label="Ir a About">
          ABOUT
        </Link>

        {/* Dropdown "RESOURCES" */}
        <div className="relative flex items-center" ref={resourcesRef}>
          <button
            onClick={toggleResourcesDropdown}
            className="flex items-center hover:text-gray-500 focus:outline-none"
            aria-expanded={isResourcesOpen}
            aria-label="Alternar dropdown de Recursos"
          >
            RESOURCES
            <img
              src="/icons/dropdown-icon.svg"
              alt="Ícono de dropdown"
              className={`ml-1 w-4 h-4 transform transition-transform ${isResourcesOpen ? "rotate-180" : ""}`}
            />
          </button>

          {/* Contenido del Dropdown, solo visible si isResourcesOpen es true */}
          {isResourcesOpen && (
            <div className="absolute top-full mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
              <ul className="py-2">
                <li>
                  <Link
                    href="/Resources/Shop"
                    className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                    onClick={() => setIsResourcesOpen(false)}
                  >
                    Shop
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Resources/Cart"
                    className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                    onClick={() => setIsResourcesOpen(false)}
                  >
                    Cart
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Resources/Checkout"
                    className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                    onClick={() => setIsResourcesOpen(false)}
                  >
                    Checkout
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        <Link href="/Resources/Contact_Us" className="hover:text-gray-500" role="link" aria-label="Ir a Contact_Us">
          CONTACT US
        </Link>
      </div>

      {/* Botones de la barra de navegación (para pantallas grandes) */}
      <div className="hidden md:flex items-center space-x-4">
        {showLogin && (
          <Link
            href="/login"
            className="bg-blue-500 text-white px-4 py-2 rounded-full transition-colors duration-300 hover:bg-blue-600"
            aria-label="Login"
          >
            LOGIN
          </Link>
        )}
        <Link
          href="/account/Header_Account"
          className="bg-black text-white px-4 py-2 rounded-full transition-colors duration-300 hover:bg-gray-600"
          aria-label="Ir a Cuenta"
        >
          GET STARTED
        </Link>
      </div>

      {/* Menú móvil (ícono de menú, solo visible en pantallas pequeñas) */}
      <button
        onClick={toggleMenu}
        className="md:hidden focus:outline-none"
        aria-expanded={isOpen}
        aria-label="Alternar menú móvil"
      >
        <img src="/icons/menu.svg" alt="Menú" className="h-6 w-6" />
      </button>

      {/* Menú móvil, se muestra cuando isOpen es true */}
      {isOpen && (
        <div className="absolute top-[calc(100%+10px)] right-0 w-56 bg-white shadow-lg rounded-lg p-3 z-50">
          <ul className="space-y-3">
            <li>
              <Link href="/" className="text-gray-800 hover:text-gray-500">
                HOME
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-800 hover:text-gray-500">
                ABOUT
              </Link>
            </li>

            {/* Dropdown "RESOURCES" para el menú móvil */}
            <li>
              <div className="relative" ref={resourcesRef}>
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Evita que el clic afecte el cierre del menú
                    toggleResourcesDropdown();
                  }}
                  className="flex items-center text-gray-800 hover:text-gray-500"
                  aria-expanded={isResourcesOpen}
                  aria-label="Alternar dropdown de Recursos"
                >
                  RESOURCES
                  <img
                    src="/icons/dropdown-icon.svg"
                    alt="Ícono de dropdown"
                    className={`ml-1 w-4 h-4 transform transition-transform ${isResourcesOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isResourcesOpen && (
                  <div className="absolute left-[-12rem] top-0 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                    <ul className="py-2">
                      <li>
                        <Link
                          href="/Resources/Cart"
                          className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                          onClick={() => setIsResourcesOpen(false)}
                        >
                          Cart
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/Resources/Checkout"
                          className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                          onClick={() => setIsResourcesOpen(false)}
                        >
                          Checkout
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/Resources/Shop"
                          className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                          onClick={() => setIsResourcesOpen(false)}
                        >
                          Shop
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </li>

            <li>
              <Link href="/contact" className="text-gray-800 hover:text-gray-500">
                CONTACT
              </Link>
            </li>

            <li>
              <Link
                href="/account/Header_Account"
                className="block bg-black text-white text-center py-2 rounded-md transition-colors duration-300 hover:bg-gray-600"
              >
                GET STARTED
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
