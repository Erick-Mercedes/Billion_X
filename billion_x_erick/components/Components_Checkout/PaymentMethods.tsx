/**
 * PaymentMethods Component
 * 
 * Este componente muestra los métodos de pago disponibles para el usuario
 * y permite completar un pedido. Está diseñado para ser visualmente
 * atractivo y accesible.
 */

const PaymentMethods = () => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      {/* Título principal de la sección */}
      <h2 className="text-xl font-bold text-gray-800 mb-6">Your Order</h2>

      <div className="space-y-4">
        {/* Información del producto y el subtotal */}
        <div className="flex justify-between text-sm text-gray-600">
          <span>Product</span>
          <span>Subtotal</span>
        </div>

        <hr className="border-gray-200" />

        {/* Detalle del pedido: Producto y Subtotal */}
        <div className="flex justify-between text-sm text-gray-800 font-medium">
          <span>Algo Bot x 1</span>
          <span>Rs. 250,000.00</span>
        </div>

        {/* Subtotal de la compra */}
        <div className="flex justify-between text-sm text-gray-600">
          <span>Subtotal</span>
          <span>Rs. 250,000.00</span>
        </div>

        {/* Total de la compra */}
        <div className="flex justify-between text-lg font-bold text-gray-800">
          <span>Total</span>
          <span>Rs. 250,000.00</span>
        </div>

        <hr className="border-gray-200" />

        {/* Métodos de pago disponibles */}
        <div className="space-y-2">
          {/* Opción de pago por transferencia bancaria */}
          <label className="flex items-center">
            <input type="radio" name="payment" className="mr-2" />
            <span className="text-black">Direct Bank</span>
          </label>
          <p className="text-xs text-gray-600 ml-6">
            Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
          </p>
        </div>

        <div className="space-y-2">
          {/* Opción de pago por transferencia bancaria directa */}
          <label className="flex items-center">
            <input type="radio" name="payment" className="mr-2" />
            <span className="text-black">Direct Bank Transfer</span>
          </label>
        </div>

        <div className="space-y-2">
          {/* Opción de pago contra entrega */}
          <label className="flex items-center">
            <input type="radio" name="payment" className="mr-2" />
            <span className="text-black">Cash on Delivery</span>
          </label>
        </div>

        {/* Aviso sobre la privacidad de datos del usuario */}
        <p className="text-xs text-gray-600 mt-2">
          Your personal data will be used to process your order and improve your experience.
        </p>

        {/* Botón para confirmar la orden */}
        <button className="w-full bg-black text-white py-2 rounded-md mt-4 hover:bg-gray-800">
          Place Order
        </button>
      </div>
    </section>
  );
};

export default PaymentMethods;
