import React from 'react';

// Definición de tipos para las propiedades del componente
interface BillingDetailsProps {
  countries: string[];
  provinces: string[];
  cities: string[];
  selectedCountry: string;
  selectedProvince: string;
  setSelectedCountry: React.Dispatch<React.SetStateAction<string>>;
  setSelectedProvince: React.Dispatch<React.SetStateAction<string>>;
}

/**
 * Componente BillingDetails
 * 
 * Este componente maneja la entrada de datos de facturación, incluyendo la información personal
 * del usuario, la dirección y la información adicional. Los campos incluyen nombre, dirección
 * de calle, ciudad, provincia, país, código postal, teléfono y correo electrónico.
 *
 * @param countries - Lista de países disponibles para seleccionar.
 * @param provinces - Lista de provincias disponibles para seleccionar.
 * @param cities - Lista de ciudades disponibles para seleccionar.
 * @param selectedCountry - País actualmente seleccionado.
 * @param selectedProvince - Provincia actualmente seleccionada.
 * @param setSelectedCountry - Función para actualizar el país seleccionado.
 * @param setSelectedProvince - Función para actualizar la provincia seleccionada.
 * 
 * @returns JSX.Element
 */
const BillingDetails: React.FC<BillingDetailsProps> = ({
  countries,
  provinces,
  cities,
  selectedCountry,
  selectedProvince,
  setSelectedCountry,
  setSelectedProvince,
}) => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Billing Details</h2>
      
      {/* Formulario de detalles de facturación */}
      <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        
        {/* Campo para el primer nombre */}
        <div>
          <label htmlFor="first-name" className="block text-sm text-gray-600 mb-1">
            First Name
          </label>
          <input
            type="text"
            id="first-name"
            className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-900 bg-white"
            placeholder="Enter your first name"
          />
        </div>

        {/* Campo para el apellido */}
        <div>
          <label htmlFor="last-name" className="block text-sm text-gray-600 mb-1">
            Last Name
          </label>
          <input
            type="text"
            id="last-name"
            className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-900 bg-white"
            placeholder="Enter your last name"
          />
        </div>

        {/* Campo opcional para el nombre de la empresa */}
        <div className="sm:col-span-2">
          <label htmlFor="company-name" className="block text-sm text-gray-600 mb-1">
            Company Name (Optional)
          </label>
          <input
            type="text"
            id="company-name"
            className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-900 bg-white"
            placeholder="Enter your company name"
          />
        </div>

        {/* Campo de selección para el país */}
        <div className="sm:col-span-2">
          <label htmlFor="country" className="block text-sm text-gray-600 mb-1">
            Country / Region
          </label>
          <select
            id="country"
            className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-900 bg-white"
            onChange={(e) => setSelectedCountry(e.target.value)}
            value={selectedCountry}
          >
            <option value="">Select a Country</option>
            {countries.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>

        {/* Campo de selección para la provincia */}
        <div className="sm:col-span-2">
          <label htmlFor="province" className="block text-sm text-gray-600 mb-1">
            Province
          </label>
          <select
            id="province"
            className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-900 bg-white"
            onChange={(e) => setSelectedProvince(e.target.value)}
            value={selectedProvince}
          >
            <option value="">Select a Province</option>
            {provinces.map((province, index) => (
              <option key={index} value={province}>
                {province}
              </option>
            ))}
          </select>
        </div>

        {/* Campo de selección para la ciudad */}
        <div className="sm:col-span-2">
          <label htmlFor="city" className="block text-sm text-gray-600 mb-1">
            Town / City
          </label>
          <select
            id="city"
            className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-900 bg-white"
          >
            <option value="">Select a City</option>
            {cities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        {/* Campo para la dirección de la calle */}
        <div>
          <label htmlFor="street-address" className="block text-sm text-gray-600 mb-1">
            Street Address
          </label>
          <input
            type="text"
            id="street-address"
            className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-900 bg-white"
            placeholder="Enter your address"
          />
        </div>

        {/* Campo para el código postal */}
        <div>
          <label htmlFor="zip-code" className="block text-sm text-gray-600 mb-1">
            ZIP Code
          </label>
          <input
            type="text"
            id="zip-code"
            className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-900 bg-white"
            placeholder="Enter your ZIP code"
          />
        </div>

        {/* Campo para el teléfono */}
        <div>
          <label htmlFor="phone" className="block text-sm text-gray-600 mb-1">
            Phone
          </label>
          <input
            type="text"
            id="phone"
            className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-900 bg-white"
            placeholder="Enter your phone number"
          />
        </div>

        {/* Campo para el correo electrónico */}
        <div className="sm:col-span-2">
          <label htmlFor="email" className="block text-sm text-gray-600 mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-900 bg-white"
            placeholder="Enter your email address"
          />
        </div>

        {/* Campo para información adicional */}
        <div className="sm:col-span-2">
          <label htmlFor="additional-info" className="block text-sm text-gray-600 mb-1">
            Additional Information
          </label>
          <textarea
            id="additional-info"
            rows={4}
            className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-900 bg-white"
            placeholder="Enter any additional information"
          ></textarea>
        </div>
      </form>
    </section>
  );
};

export default BillingDetails;
