import React, { useState, useMemo, useEffect, useRef, useCallback } from "react";
import { Product } from "@/components/Resources/Shop";
import { motion } from "framer-motion";

// Definición de las propiedades del componente CartModal
interface CartModalProps {
  cart: Product[]; // Lista de productos en el carrito de compras
  isOpen: boolean; // Controla si el modal está abierto o cerrado
  onClose: () => void; // Función para cerrar el modal
}

const CartModal: React.FC<CartModalProps> = ({ cart, isOpen, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isCheckoutConfirmed, setIsCheckoutConfirmed] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);

  const cartBoxRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  // Agrupar productos repetidos
  const groupedCart = useMemo(() => {
    const grouped: { [key: string]: { product: Product; quantity: number } } = {};
    cart.forEach((product) => {
      if (grouped[product.id]) {
        grouped[product.id].quantity += 1;
      } else {
        grouped[product.id] = { product, quantity: 1 };
      }
    });
    return Object.values(grouped);
  }, [cart]);

  // Cálculo del total
  const total = useMemo(
    () =>
      groupedCart.reduce(
        (sum, { product, quantity }) => sum + product.price * quantity,
        0
      ),
    [groupedCart]
  );

  // Manejador para cerrar el modal
  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
      if (backdropRef.current) {
        backdropRef.current.classList.add("backdrop-blur-lg"); // Aplica el desenfoque al fondo
      }
      return () => {
        window.removeEventListener("keydown", handleEscape);
        if (backdropRef.current) {
          backdropRef.current.classList.remove("backdrop-blur-lg"); // Elimina el desenfoque cuando se cierra
        }
      };
    }
  }, [isOpen, handleEscape]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cartBoxRef.current && !cartBoxRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  useEffect(() => {
    if (isOpen && cartBoxRef.current) {
      cartBoxRef.current.focus();
    }
  }, [isOpen]);

  const handleCheckout = () => {
    if (cart.length === 0) {
      setError("Your cart is empty. Add some products before proceeding.");
      return;
    }
    setError(null);
    setLoading(true);
    setProcessing(true);
    setTimeout(() => {
      setLoading(false);
      setProcessing(false);
      setIsCheckoutConfirmed(true);
      setIsRedirecting(true);
    }, 2000);
  };

  useEffect(() => {
    if (isRedirecting) {
      const timer = setTimeout(() => {
        window.location.href = "/Resources/Cart";
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isRedirecting]);

  useEffect(() => {
    if (isCheckoutConfirmed) {
      const timer = setTimeout(() => {
        setIsCheckoutConfirmed(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isCheckoutConfirmed]);

  if (!isOpen) return null;

  return (
    <div
      ref={backdropRef} // Referencia para aplicar el desenfoque al fondo
      className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50 backdrop-blur-none" // Se añadirá la clase de desenfoque aquí
      aria-labelledby="cart-modal-title"
      aria-describedby="cart-modal-description"
    >
      <motion.div
        ref={cartBoxRef}
        id="cart-modal"
        tabIndex={-1}
        className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        role="dialog"
        aria-labelledby="cart-modal-title"
        aria-describedby="cart-modal-description"
      >
        <button
          onClick={onClose}
          aria-label="Close cart modal"
          className="absolute top-2 right-2 text-gray-600 bg-gray-200 hover:bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center transition-all"
        >
          ✕
        </button>

        <h2 id="cart-modal-title" className="text-2xl font-semibold text-gray-800 mb-6 text-center">Your Cart</h2>
        <p id="cart-modal-description" className="sr-only">Review the items in your shopping cart</p>

        {error && <div className="text-red-500 text-center mb-4">{error}</div>}

        {groupedCart.length === 0 ? (
          <div className="text-gray-600 text-center">
            <p>Your cart is empty.</p>
            <button className="mt-4 text-blue-600 hover:text-blue-700 transition-all" onClick={onClose}>
              Continue Shopping
            </button>
          </div>
        ) : (
          <div>
            <ul className="space-y-4">
              {groupedCart.map(({ product, quantity }) => (
                <li key={product.id} className="flex items-center gap-4 pb-4 last:border-none">
                  <img
                    src={product.imageUrl || "/images/product-placeholder.png"}
                    alt={product.name}
                    className="w-20 h-20 object-contain rounded-lg shadow-md"
                    onError={(e) => (e.currentTarget.src = "/images/product-placeholder.png")}
                  />
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-gray-800">{product.name}</h3>
                    <p className="text-xs text-gray-500">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold text-gray-800">${(product.price * quantity).toFixed(2)}</p>
                      {quantity > 1 && (
                        <span className="text-xs text-gray-500">
                          +{quantity - 1} <button className="text-red-500">✕</button>
                        </span>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex justify-between items-center">
              <span className="text-lg font-medium text-gray-700">Total</span>
              <span className="text-xl font-bold text-gray-900">${total.toFixed(2)}</span>
            </div>

            <motion.button
              className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg shadow hover:bg-blue-600 transition-all disabled:bg-gray-300"
              onClick={handleCheckout}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              disabled={processing}
            >
              {loading ? (
                <span className="flex justify-center items-center">
                  <svg
                    className="animate-spin h-5 w-5 mr-2 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 1 1 16 0A8 8 0 0 1 4 12z" />
                  </svg>
                  Processing...
                </span>
              ) : (
                "Proceed to Checkout"
              )}
            </motion.button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default CartModal;
