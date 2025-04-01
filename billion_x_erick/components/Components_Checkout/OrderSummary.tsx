// Importación de React (necesaria para los componentes JSX)
import React from 'react';

/**
 * Componente OrderSummary
 * Este componente muestra un resumen del pedido, que incluye el producto,
 * subtotal, total, y opciones de pago. Está diseñado de manera clara y visualmente
 * atractiva utilizando clases de Tailwind CSS para los estilos.
 */
const OrderSummary = () => {
  return (
    // Sección principal que contiene el resumen del pedido
    <section className="bg-white p-6 rounded-lg shadow-md">
      
      {/* Título principal del resumen del pedido */}
      <h2 className="text-xl font-bold text-gray-800 mb-6">
        Your Order
      </h2>

      <div className="space-y-4">
        
        {/* Fila de producto y subtotal */}
        <div className="flex justify-between text-sm text-gray-600">
          <span>Product</span>
          <span>Subtotal</span>
        </div>

        {/* Línea divisoria */}
        <hr className="border-gray-200" />
        
        {/* Fila del producto con su precio */}
        <div className="flex justify-between text-sm text-gray-800 font-medium">
          <span>Algo Bot x 1</span>
          <span>Rs. 250,000.00</span>
        </div>
        
        {/* Fila del subtotal */}
        <div className="flex justify-between text-sm text-gray-600">
          <span>Subtotal</span>
          <span>Rs. 250,000.00</span>
        </div>
        
        {/* Fila del total */}
        <div className="flex justify-between text-lg font-bold text-gray-800">
          <span>Total</span>
          <span>Rs. 250,000.00</span>
        </div>

        {/* Línea divisoria final */}
        <hr className="border-gray-200" />

        <div className="space-y-2">
          
          {/* Opción de pago Direct Bank */}
          <label className="flex items-center">
            <input type="radio" name="payment" className="mr-2" />
            <span className="text-black">Direct Bank</span>
          </label>
          
          {/* Descripción de Direct Bank */}
          <p className="text-xs text-gray-600 ml-6">
            Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
          </p>

          {/* Opción de pago Direct Bank Transfer */}
          <label className="flex items-center">
            <input type="radio" name="payment" className="mr-2" />
            <span className="text-black">Direct Bank Transfer</span>
          </label>

          {/* Opción de pago Cash on Delivery */}
          <label className="flex items-center">
            <input type="radio" name="payment" className="mr-2" />
            <span className="text-black">Cash on Delivery</span>
          </label>
        </div>

        {/* Aviso sobre el uso de datos personales */}
        <p className="text-xs text-gray-600 mt-2">
          Your personal data will be used to process your order and improve your experience.
        </p>
        
        {/* Botón para realizar el pedido */}
        <button className="w-full bg-black text-white py-2 rounded-md mt-4 hover:bg-gray-800">
          Place Order
        </button>
      </div>
    </section>
  );
};

export default OrderSummary;
