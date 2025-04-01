"use client";

import { useState } from "react";

/**
 * Componente que renderiza una sección de Preguntas Frecuentes (FAQ).
 * Permite alternar la visibilidad de las respuestas de manera interactiva.
 * @returns {JSX.Element} - Renderiza la interfaz de las FAQ.
 */
export default function FAQ() {
  // Estado para manejar la visibilidad de las respuestas. Inicialmente solo la primera respuesta es visible.
  const [visibleAnswers, setVisibleAnswers] = useState([true, false, false, false]);

  /**
   * Alterna la visibilidad de la respuesta correspondiente a un índice específico.
   * @param {number} index - Índice de la respuesta que se desea alternar.
   */
  const toggleAnswer = (index: number) => {
    setVisibleAnswers((prev) =>
      prev.map((visible, i) => (i === index ? !visible : visible)) // Cambia la visibilidad solo para la respuesta seleccionada.
    );
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-50 min-h-screen px-6 sm:px-12 lg:px-20">
      {/* Sección de encabezado con título y descripción */}
      <header className="text-center mt-16 lg:mt-20">
        <h1 className="text-indigo-500 font-semibold text-sm lg:text-base uppercase tracking-wider">
          FAQ
        </h1>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mt-6">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-500 mt-6 text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto">
          Cras tincidunt lobortis feugiat vivamus at morbi leo urna molestie atole elementum eu facilisis faucibus interdum posuere.
        </p>
      </header>

      {/* Sección de contenido de preguntas y respuestas */}
      <section className="w-full max-w-4xl mt-16 lg:mt-20">
        <div className="space-y-10">
          {/* Mapeamos las preguntas y respuestas para evitar duplicación de código */}
          {[
            {
              question: "What is Webflow and why is it the best website builder?",
              answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt.",
            },
            {
              question: "What is your favorite template from BRIX Templates?",
              answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            },
            {
              question: "How do you clone a Webflow Template?",
              answer: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
            },
            {
              question: "Why is BRIX Templates the best Webflow agency?",
              answer: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.",
            },
          ].map((item, index) => (
            <div key={index} className="border-b border-gray-300 pb-6">
              {/* Contenedor de la pregunta */}
              <div className="flex justify-between items-start">
                <h3
                  className="text-xl sm:text-2xl font-semibold text-gray-800 cursor-pointer transition-transform duration-300 transform hover:scale-105"
                  onClick={() => toggleAnswer(index)} // Alterna la visibilidad al hacer clic en la pregunta
                  onKeyDown={(e) => e.key === "Enter" && toggleAnswer(index)} // Permite interacción con teclado
                  tabIndex={0} // Asegura que el título sea accesible para teclados
                  aria-expanded={visibleAnswers[index]} // Indica el estado de expansión de la respuesta
                >
                  {item.question}
                </h3>
                {/* Botón para cerrar la respuesta */}
                {visibleAnswers[index] && (
                  <button
                    className="text-gray-500 hover:text-gray-700 ml-4 text-lg transition-colors duration-200"
                    onClick={() => toggleAnswer(index)}
                    aria-label="Close answer"
                  >
                    ✖
                  </button>
                )}
              </div>

              {/* Respuesta desplegable */}
              {visibleAnswers[index] && (
                <p className="text-gray-600 mt-4 text-lg sm:text-xl transition-all duration-300 ease-in-out transform opacity-100">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
