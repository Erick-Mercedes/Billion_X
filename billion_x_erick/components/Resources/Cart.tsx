"use client";

import React, { useState, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footers";
import CartTable from "@/components/Components_Cart/CartTable";
import CartTotals from "@/components/Components_Cart/CartTotals";
import RemoveProductModal from "@/components/Components_Cart/RemoveProductModal";

/**
 * Interface representing a product in the shopping cart.
 * @interface Product
 * @property {number} id - Unique identifier for the product.
 * @property {string} name - The name of the product.
 * @property {number} price - The price of the product.
 * @property {number} quantity - The quantity of the product in the cart.
 * @property {string} image - The URL to the product's image.
 */
export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const Cart = () => {
  // State for managing products in the cart
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "EA Trading Algo",
      price: 250000,
      quantity: 1,
      image: "/images/product-placeholder.png",
    },
  ]);

  // Loading state for checkout process
  const [isLoading, setIsLoading] = useState(false);

  // Modal state for confirming product removal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productToRemove, setProductToRemove] = useState<Product | null>(null);

  /**
   * Format a number as a currency string.
   * @param {number} value - The value to be formatted.
   * @returns {string} - The formatted currency string.
   */
  const formatCurrency = useCallback(
    (value: number): string =>
      value.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }),
    []
  );

  /**
   * Handle changes in the quantity of a product in the cart.
   * Ensures the quantity cannot be less than 1.
   * @param {number} id - The unique identifier of the product.
   * @param {React.ChangeEvent<HTMLInputElement>} event - The event containing the new quantity value.
   */
  const handleQuantityChange = useCallback(
    (id: number, event: React.ChangeEvent<HTMLInputElement>) => {
      const value = Math.max(Number(event.target.value), 1);
      setProducts((prev) =>
        prev.map((product) =>
          product.id === id ? { ...product, quantity: value } : product
        )
      );
    },
    []
  );

  /**
   * Open the modal for confirming the removal of a product.
   * @param {Product} product - The product to remove.
   */
  const openRemoveModal = useCallback((product: Product) => {
    setProductToRemove(product);
    setIsModalOpen(true);
  }, []);

  /**
   * Remove a product from the cart.
   * Resets the modal and the selected product.
   */
  const handleRemoveProduct = useCallback(() => {
    if (productToRemove) {
      setProducts((prev) =>
        prev.filter((product) => product.id !== productToRemove.id)
      );
    }
    setIsModalOpen(false);
    setProductToRemove(null);
  }, [productToRemove]);

  /**
   * Cancel the removal action and close the modal.
   */
  const handleCancelRemove = useCallback(() => {
    setIsModalOpen(false);
    setProductToRemove(null);
  }, []);

  /**
   * Calculate the subtotal for a given product (price * quantity).
   * @param {number} price - The price of the product.
   * @param {number} quantity - The quantity of the product in the cart.
   * @returns {number} - The calculated subtotal.
   */
  const calculateSubtotal = useCallback(
    (price: number, quantity: number): number => price * quantity,
    []
  );

  /**
   * Calculate the total cost of all items in the cart.
   * @returns {number} - The total cost of the cart.
   */
  const calculateTotal = useCallback((): number => {
    return products.reduce(
      (total, product) => total + calculateSubtotal(product.price, product.quantity),
      0
    );
  }, [products, calculateSubtotal]);

  /**
   * Simulate the checkout process, typically replaced by API calls for payment processing.
   * The loading state simulates the time taken for processing.
   */
  const handleCheckout = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulate a loading period for checkout.
  };

  return (
    <>
      <Navbar showLogin={true} />

      <main className="flex flex-col items-center min-h-screen bg-gray-100 py-8 px-4">
        <header className="w-full max-w-5xl mb-8 text-center">
          <h1 className="font-bold text-gray-800 text-2xl sm:text-3xl lg:text-4xl">
            Cart
          </h1>
          <p className="mt-2 text-gray-600 text-sm sm:text-base">
            Home &gt; Cart
          </p>
        </header>

        <section className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* CartTable handles the display of products and allows quantity changes and removal */}
          <CartTable
            products={products}
            formatCurrency={formatCurrency}
            handleQuantityChange={handleQuantityChange}
            openRemoveModal={openRemoveModal}
          />
          {/* CartTotals displays the total cost and triggers the checkout process */}
          <CartTotals
            products={products}
            calculateTotal={calculateTotal}
            formatCurrency={formatCurrency}
            handleCheckout={handleCheckout}
            isLoading={isLoading}
          />
        </section>
      </main>

      {/* Modal for confirming product removal */}
      {isModalOpen && (
        <RemoveProductModal
          onCancel={handleCancelRemove}
          onConfirm={handleRemoveProduct}
        />
      )}

      {/* Checkout loading spinner */}
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50">
          <div className="spinner">Cargando...</div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Cart;
