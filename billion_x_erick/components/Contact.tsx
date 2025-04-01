"use client";
import { useState } from 'react';

// Componente de contacto para manejar la interacción con el formulario de contacto
export default function Contact() {
  // Estado para gestionar el envío del formulario y los datos de los campos
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  // Estado para gestionar el estado del formulario y los mensajes de error
  const [formStatus, setFormStatus] = useState('');
  const [errors, setErrors] = useState({
    email: '',
    phone: '',
    message: '',
  });

  // Validación de correo electrónico utilizando expresión regular
  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  // Validación de teléfono para aceptar solo números
  const validatePhone = (phone: string) => {
    const phoneRegex = /^[0-9]*$/; // Acepta solo números
    return phoneRegex.test(phone);
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validaciones antes de proceder al envío
    if (!validateEmail(formData.email)) {
      setErrors((prev) => ({ ...prev, email: 'Invalid email address' }));
      setIsSubmitting(false);
      return;
    }

    if (!validatePhone(formData.phone)) {
      setErrors((prev) => ({ ...prev, phone: 'Phone number must be numeric' }));
      setIsSubmitting(false);
      return;
    }

    if (formData.message.length < 20) {
      setErrors((prev) => ({ ...prev, message: 'Message must be at least 20 characters' }));
      setIsSubmitting(false);
      return;
    }

    // Restablecer los errores si las validaciones son exitosas
    setErrors({ email: '', phone: '', message: '' });

    // Simulación de envío (esto debe ser reemplazado por una API real)
    setTimeout(() => {
      setIsSubmitting(false);
      setFormStatus('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      });
    }, 2000); // Simulando un retraso de 2 segundos
  };

  // Función para manejar los cambios en los campos del formulario
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validaciones dinámicas al momento de cambiar los campos
    if (name === 'email' && !validateEmail(value)) {
      setErrors({ ...errors, email: 'Invalid email address' });
    } else if (name === 'phone' && !validatePhone(value)) {
      setErrors({ ...errors, phone: 'Phone number must be numeric' });
    } else if (name === 'message' && value.length < 20) {
      setErrors({ ...errors, message: 'Message must be at least 20 characters' });
    } else {
      setErrors({ ...errors, [name]: '' });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 relative">
      {/* Fondo de imagen optimizado para pantallas grandes y pequeñas */}
      <div className="absolute inset-0">
        <div
          className="h-full w-full lg:w-1/2 bg-cover bg-no-repeat bg-center object-cover"
          style={{ backgroundImage: 'url("/Contact.svg")' }}
        ></div>
      </div>

      {/* Contenedor principal del formulario */}
      <div className="relative w-full lg:w-2/3 flex flex-col items-center bg-white bg-opacity-90 p-8 lg:p-16 rounded-lg shadow-2xl animate__animated animate__fadeInUp">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-4">
          Get in touch today
        </h1>
        <p className="text-gray-500 text-center mb-8">
          Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu malesuada egestas mauris.
        </p>

        {/* Mensaje de estado del formulario */}
        {formStatus && (
          <div className="w-full text-center mb-4 text-green-500 animate__animated animate__fadeIn">
            ✔️ {formStatus}
          </div>
        )}

        {/* Formulario */}
        <form className="w-full max-w-lg" onSubmit={handleSubmit}>
          {/* Campo de nombre */}
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-600 focus:border-indigo-500 text-black transition-all duration-300 transform focus:scale-105"
              placeholder="John Carter"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Campo de correo electrónico */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`mt-1 w-full px-4 py-3 border ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              } rounded-md shadow-sm focus:ring-2 focus:ring-indigo-600 focus:border-indigo-500 text-black transition-all duration-300 transform focus:scale-105`}
              placeholder="example@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {/* Error en el campo de correo */}
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          {/* Campo de teléfono */}
          <div className="mb-6">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className={`mt-1 w-full px-4 py-3 border ${
                errors.phone ? 'border-red-500' : 'border-gray-300'
              } rounded-md shadow-sm focus:ring-2 focus:ring-indigo-600 focus:border-indigo-500 text-black transition-all duration-300 transform focus:scale-105`}
              placeholder="849 - 555 - 5555"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            {/* Error en el campo de teléfono */}
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>

          {/* Campo de empresa */}
          <div className="mb-6">
            <label htmlFor="company" className="block text-sm font-medium text-gray-700">
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-600 focus:border-indigo-500 text-black transition-all duration-300 transform focus:scale-105"
              placeholder="Facebook"
              value={formData.company}
              onChange={handleChange}
            />
          </div>

          {/* Campo de mensaje */}
          <div className="mb-8">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Leave us a message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className={`mt-1 w-full px-4 py-3 border ${
                errors.message ? 'border-red-500' : 'border-gray-300'
              } rounded-md shadow-sm focus:ring-2 focus:ring-indigo-600 focus:border-indigo-500 text-black transition-all duration-300 transform focus:scale-105`}
              placeholder="Please type your message here..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            {/* Error en el campo de mensaje */}
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>

          {/* Botón de enviar */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-indigo-600 text-white py-3 px-4 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 transform hover:scale-105 ${
              isSubmitting ? 'opacity-50 cursor-not-allowed animate-pulse' : ''
            }`}
          >
            {isSubmitting ? (
              <span className="animate-pulse">Sending...</span>
            ) : (
              'Send message'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
