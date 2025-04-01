"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "../Footers";
import GradientBackground from "../GradientBackground";

// Datos de testimonios de clientes
const testimonials = [
  {
    name: "John Doe",
    description: "This is the best service I’ve ever used!",
    rating: 5,
  },
  {
    name: "Jane Smith",
    description: "Amazing experience, highly recommended.",
    rating: 4,
  },
  {
    name: "Michael Johnson",
    description: "Good value for money, will use again.",
    rating: 4,
  },
  {
    name: "Emily Davis",
    description: "Exceptional support and quality service.",
    rating: 5,
  },
];

const About: React.FC = () => {
  // Estado para manejar el testimonio actual (mostrar uno a la vez)
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Cambiar testimonio cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      // Cicla a través de los testimonios, volviendo al primero después del último
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Barra de navegación */}
      <Navbar showLogin={true} />

      {/* Fondo con gradiente */}
      <GradientBackground>
        {/* Sección Hero: Título y descripción introductoria */}
        <section className="flex flex-col items-center justify-center text-center py-16">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
            About Us
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Deserunt nisi veniam ipsum nulla enim adipisicing consectetur
            cupidatat excepteur laboris anim eiusmod duis. Magna ut magna
            commodo sit pariatur ex adipisicing minim ea exercitation labore
            deserunt eu tempor. Voluptate amet aute voluptate et dolor velit
            laboris consequat aliquip enim consequat laborum amet. Officia sunt
            sit quis exercitation. Do anim sunt eu eiusmod dolor qui laborum
            aute sunt cillum ipsum. In enim voluptate velit duis irure culpa id.
          </p>
        </section>

        {/* Sección de imágenes en Z-formation */}
        <section className="py-16">
          <div className="container mx-auto px-6 lg:px-16 space-y-12">
            {/* Mapear las imágenes y descripciones */}
            {[
              {
                imageSrc: "/images/Do_it.png",
                text: "Innovation",
                description:
                  "Innovation drives our creative processes and solutions to meet modern challenges.",
              },
              {
                imageSrc: "/images/Do_it.png",
                text: "Collaboration",
                description:
                  "Collaboration ensures that we deliver projects with combined expertise and mutual success.",
              },
              {
                imageSrc: "/images/Do_it.png",
                text: "Sustainability",
                description:
                  "Sustainability reflects our commitment to environmentally and socially responsible practices.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                } items-center`}
              >
                <img
                  src={item.imageSrc}
                  alt={`Image showcasing ${item.text}`}
                  className="w-full md:w-1/3 rounded-lg shadow-lg"
                />
                <div className="mt-4 md:mt-0 md:ml-8 md:w-2/3 text-center md:text-left">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {item.text}
                  </h3>
                  <p className="text-gray-600 text-lg">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sección de Misión, Visión y Valores */}
        <section className="py-16">
          <div className="container mx-auto px-6 lg:px-16">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Our Mission",
                  description:
                    "To empower individuals and organizations with innovative, scalable, and sustainable solutions.",
                },
                {
                  title: "Our Vision",
                  description:
                    "To be a global leader in providing impactful, technology-driven solutions for the modern era.",
                },
                {
                  title: "Our Values",
                  description:
                    "Integrity, innovation, collaboration, and a commitment to excellence are at the core of everything we do.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="text-center bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300"
                >
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    {item.title}
                  </h2>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sección de Testimonios */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              What Our Clients Say
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
              {/* Mapear los testimonios */}
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300"
                >
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 mb-4">{testimonial.description}</p>
                  <div className="flex justify-center space-x-1">
                    {/* Estrellas de valoración */}
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <svg
                        key={starIndex}
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-6 w-6 ${
                          starIndex < testimonial.rating
                            ? "text-yellow-500"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 .587l3.668 7.429L24 9.64l-6 5.847L19.335 24 12 20.127 4.665 24l1.335-8.513L0 9.64l8.332-1.624z" />
                      </svg>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Llamado a la acción */}
        <section className="bg-gradient-to-b from-gray-100 to-white py-16">
          <div className="container mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Ready to Learn More?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Connect with us today and explore how we can work together to
              achieve great things.
            </p>
            <a
              href="/Resources/Contact_Us"
              className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </section>
      </GradientBackground>

      {/* Pie de página */}
      <Footer />
    </>
  );
};

export default About;
