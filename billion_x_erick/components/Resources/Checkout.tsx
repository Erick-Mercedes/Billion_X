'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '../Footers';
import BillingDetails from '@/components/Components_Checkout/BillingDetails';
import OrderSummary from '@/components/Components_Checkout/OrderSummary';

/**
 * Componente principal de la página de Checkout.
 * 
 * Este componente gestiona el proceso completo de checkout, que incluye la recopilación de los detalles
 * de facturación del usuario, la selección de país, provincia y ciudad, así como la revisión del resumen
 * del pedido. Además, maneja la carga dinámica de los países, provincias y ciudades, y actualiza las
 * opciones disponibles según las selecciones del usuario.
 * 
 * @returns JSX.Element
 */
const Checkout = (): JSX.Element => {
  // Estados para almacenar los datos de países, provincias y ciudades, y los valores seleccionados por el usuario
  const [countries, setCountries] = useState<string[]>([]);
  const [provinces, setProvinces] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string>(''); 
  const [selectedProvince, setSelectedProvince] = useState<string>('');
  const [selectedPayment, setSelectedPayment] = useState<string>(''); 

  /**
   * Hook useEffect para manejar la carga dinámica de países, provincias y ciudades.
   * 
   * Este hook se ejecuta cuando el componente se monta y cuando se actualizan los estados
   * de país o provincia seleccionados por el usuario.
   */
  useEffect(() => {
    // Función para cargar la lista de países desde la API
    const fetchCountries = async () => {
      try {
        const response = await fetch('/api/countries');
        if (!response.ok) throw new Error('Error al cargar los países');
        const data = await response.json();
        setCountries(data); // Actualiza el estado con la lista de países
      } catch (error) {
        console.error('Error al cargar los países:', error);
      }
    };

    // Función para cargar las provincias de un país seleccionado
    const fetchProvinces = async () => {
      if (selectedCountry) {
        try {
          const response = await fetch(`/api/provinces?country=${selectedCountry}`);
          if (!response.ok) throw new Error('Error al cargar las provincias');
          const data = await response.json();
          setProvinces(data); // Actualiza el estado con las provincias correspondientes
        } catch (error) {
          console.error('Error al cargar las provincias:', error);
        }
      } else {
        setProvinces([]); // Limpiar provincias si no se ha seleccionado un país
      }
    };

    // Función para cargar las ciudades de una provincia y país seleccionados
    const fetchCities = async () => {
      if (selectedProvince && selectedCountry) {
        try {
          const response = await fetch(`/api/cities?country=${selectedCountry}&region=${selectedProvince}`);
          if (!response.ok) throw new Error('Error al cargar las ciudades');
          const data = await response.json();
          setCities(data); // Actualiza el estado con las ciudades correspondientes
        } catch (error) {
          console.error('Error al cargar las ciudades:', error);
        }
      } else {
        setCities([]); // Limpiar ciudades si no se han seleccionado provincia y país
      }
    };

    // Llamadas a las funciones para cargar los datos
    fetchCountries();
    fetchProvinces();
    fetchCities();
  }, [selectedCountry, selectedProvince]); // Dependencias: se ejecuta al cambiar país o provincia

  return (
    <>
      {/* Barra de navegación */}
      <Navbar showLogin={true} />

      <main className="flex flex-col items-center min-h-screen bg-gray-100 py-8 px-4">
        {/* Header de Checkout */}
        <header className="w-full max-w-5xl mb-8 text-center">
          <h1 className="font-bold text-gray-800 text-2xl sm:text-3xl lg:text-4xl">Checkout</h1>
          <p className="mt-2 text-gray-600 text-sm sm:text-base">Home &gt; Checkout</p>
        </header>

        {/* Contenedor principal con detalles de facturación y resumen de pedido */}
        <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Detalles de facturación */}
          <BillingDetails
            countries={countries}
            provinces={provinces}
            cities={cities}
            selectedCountry={selectedCountry}
            selectedProvince={selectedProvince}
            setSelectedCountry={setSelectedCountry}
            setSelectedProvince={setSelectedProvince}
          />
          {/* Resumen del pedido */}
          <OrderSummary />
        </div>
      </main>

      {/* Pie de página */}
      <Footer />
    </>
  );
};

export default Checkout;
