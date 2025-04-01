"use client";

import React, { useState } from "react";
import Link from "next/link";

/**
 * Componente para mostrar la sección de precios con opciones de planes mensuales y anuales.
 * Permite al usuario elegir entre tres planes: Básico, Growth y Enterprise.
 */
const PricingSection = () => {
  // Estado para manejar el tipo de plan seleccionado (mensual o anual)
  const [isAnnual, setIsAnnual] = useState(false);

  // Estado para manejar la animación de carga en los botones
  const [loading, setLoading] = useState(false);

  // Precios de los planes, dependiendo de si el usuario selecciona anual o mensual
  const prices = {
    basic: isAnnual ? 990 : 99,  // Precio para el plan básico
    growth: isAnnual ? 1990 : 199, // Precio para el plan growth
    enterprise: isAnnual ? 3990 : 399, // Precio para el plan enterprise
  };

  /**
   * Función que maneja el evento de clic en los botones de "Get Started".
   * Activará una animación de carga de 1.5 segundos.
   */
  const handleClick = () => {
    setLoading(true); // Activamos el estado de carga
    setTimeout(() => {
      setLoading(false); // Desactivamos la carga después de 1.5 segundos
    }, 1500);
  };

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900">Affordable Pricing Plans</h2>
        <p className="text-lg text-gray-600 mt-4">
          Choose a plan that fits your needs. Enjoy all the features and great support.
        </p>

        {/* Contenedor de los botones de selección de plan mensual o anual */}
        <div className="flex justify-center space-x-4 mt-8" role="tablist">
          <button
            className={`px-6 py-3 rounded-full shadow-md transition-all duration-300 transform hover:scale-105 focus:ring-4 ${
              !isAnnual
                ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 focus:ring-blue-300"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-gray-400"
            }`}
            onClick={() => setIsAnnual(false)} // Cambiar a plan mensual
            aria-selected={!isAnnual}
          >
            Monthly Plan
          </button>
          <button
            className={`px-6 py-3 rounded-full shadow-md transition-all duration-300 transform hover:scale-105 focus:ring-4 ${
              isAnnual
                ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 focus:ring-blue-300"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-gray-400"
            }`}
            onClick={() => setIsAnnual(true)} // Cambiar a plan anual
            aria-selected={isAnnual}
          >
            Annual Plan
          </button>
        </div>
      </div>

      {/* Contenedor de las tarjetas de los planes de precios */}
      <div className="mt-12 grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {/* Plan Básico */}
        <div className="p-8 bg-white rounded-xl shadow-2xl border hover:shadow-lg transition-all duration-300 hover:scale-105 hover:rotate-1">
          <h3 className="text-2xl font-bold text-gray-800">Basic</h3>
          <div className="mt-4">
            <span
              className={`text-4xl font-extrabold text-gray-900 transition-all duration-300 ${
                loading ? "animate-pulse" : ""
              }`}
            >
              ${prices.basic}
            </span>
            <span className="text-gray-600">{isAnnual ? "/year" : "/month"}</span>
          </div>
          <p className="text-gray-600 mt-4">
            Perfect for individuals starting their journey.
          </p>
          <ul className="mt-6 space-y-3 text-gray-600">
            <li>✔ All analytics features</li>
            <li>✔ Up to 250,000 tracked visits</li>
            <li>✔ Normal support</li>
            <li>✔ Mobile app</li>
            <li>✔ Up to 3 team members</li>
          </ul>
          <Link href="/get-started" passHref>
            <button
              onClick={handleClick} // Llamada a la función de animación de carga
              className={`mt-6 w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg shadow-md hover:from-blue-600 hover:to-blue-700 transition-all focus:outline-none ${
                loading ? "cursor-wait" : ""
              }`}
            >
              {loading ? (
                <span className="animate-spin">Loading...</span> // Animación de carga
              ) : (
                "Get Started"
              )}
            </button>
          </Link>
        </div>

        {/* Plan Growth (Mejor valor) */}
        <div className="relative p-8 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl shadow-2xl transform scale-105 hover:scale-110 transition-all duration-300">
          <span className="absolute top-2 right-2 bg-yellow-400 text-black px-3 py-1 text-xs rounded-full shadow-lg">
            Best Value
          </span>
          <h3 className="text-2xl font-bold">Growth</h3>
          <div className="mt-4">
            <span
              className={`text-4xl font-extrabold transition-all duration-300 ${
                loading ? "animate-pulse" : ""
              }`}
            >
              ${prices.growth}
            </span>
            <span>{isAnnual ? "/year" : "/month"}</span>
          </div>
          <p className="mt-4">Ideal for small teams scaling their business.</p>
          <ul className="mt-6 space-y-3">
            <li>✔ Everything on Basic plan</li>
            <li>✔ Up to 1,000,000 tracked visits</li>
            <li>✔ Premium support</li>
            <li>✔ Mobile app</li>
            <li>✔ Up to 10 team members</li>
          </ul>
          <Link href="/get-started" passHref>
            <button
              onClick={handleClick} // Llamada a la función de animación de carga
              className={`mt-6 w-full bg-white text-blue-600 py-3 rounded-lg shadow-md hover:bg-gray-100 transition-all focus:outline-none ${
                loading ? "cursor-wait" : ""
              }`}
            >
              {loading ? (
                <span className="animate-spin">Loading...</span> // Animación de carga
              ) : (
                "Get Started"
              )}
            </button>
          </Link>
        </div>

        {/* Plan Enterprise */}
        <div className="p-8 bg-white rounded-xl shadow-2xl border hover:shadow-lg transition-all duration-300 hover:scale-105 hover:rotate-1">
          <h3 className="text-2xl font-bold text-gray-800">Enterprise</h3>
          <div className="mt-4">
            <span
              className={`text-4xl font-extrabold text-gray-900 transition-all duration-300 ${
                loading ? "animate-pulse" : ""
              }`}
            >
              ${prices.enterprise}
            </span>
            <span className="text-gray-600">{isAnnual ? "/year" : "/month"}</span>
          </div>
          <p className="text-gray-600 mt-4">
            For enterprises requiring advanced solutions.
          </p>
          <ul className="mt-6 space-y-3 text-gray-600">
            <li>✔ Everything on Growth plan</li>
            <li>✔ Up to 5,000,000 tracked visits</li>
            <li>✔ Dedicated support</li>
            <li>✔ Mobile app</li>
            <li>✔ Up to 50 team members</li>
          </ul>
          <Link href="/get-started" passHref>
            <button
              onClick={handleClick} // Llamada a la función de animación de carga
              className={`mt-6 w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg shadow-md hover:from-blue-600 hover:to-blue-700 transition-all focus:outline-none ${
                loading ? "cursor-wait" : ""
              }`}
            >
              {loading ? (
                <span className="animate-spin">Loading...</span> // Animación de carga
              ) : (
                "Get Started"
              )}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
