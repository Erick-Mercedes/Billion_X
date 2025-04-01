"use client";

import React, { useState } from "react";
import GradientBackground from "../GradientBackground";
import Footer from "../Footers";
import Navbar from "../Navbar";  // Importing Navbar for header navigation

/**
 * ContactUs Component
 * This component renders a contact form and displays company contact information.
 * It handles form submission, including loading and success state.
 */
const ContactUs: React.FC = () => {
  const [loading, setLoading] = useState(false);  // State to handle form submission loading
  const [messageSent, setMessageSent] = useState(false);  // State to track successful message submission

  /**
   * Handles form submission
   * This function prevents default form behavior and simulates form submission
   * @param e - Form submission event
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);  // Set loading state to true when form submission begins

    // Simulate form submission with a 2-second delay (e.g., API request)
    setTimeout(() => {
      setLoading(false);  // Reset loading state after form submission
      setMessageSent(true);  // Update state to indicate successful message submission
    }, 2000);
  };

  return (
    <>
      {/* Navbar with login option */}
      <Navbar showLogin={true} />

      {/* Gradient Background Wrapper */}
      <GradientBackground>
        <div className="py-12">
          {/* Main container for contact form and company info */}
          <div className="bg-white rounded-lg shadow-lg max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Section: Company Information */}
              <div className="text-white p-8 rounded-l-lg bg-gradient-to-r from-blue-500 to-teal-500">
                <h2 className="text-3xl font-bold mb-4">Contact Our Company</h2>
                <p className="text-lg mb-6">
                  We are here to help! Feel free to reach out through any of the following methods.
                </p>
                <ul className="space-y-4">
                  {/* Company contact details with proper accessibility */}
                  <li className="flex items-center">
                    <span className="material-icons-outlined text-white mr-3" aria-hidden="true">phone</span>
                    <span>+1 (123) 456-7890</span>
                  </li>
                  <li className="flex items-center">
                    <span className="material-icons-outlined text-white mr-3" aria-hidden="true">email</span>
                    <span>info@example.com</span>
                  </li>
                  <li className="flex items-center">
                    <span className="material-icons-outlined text-white mr-3" aria-hidden="true">location_on</span>
                    <span>123 Main Street, City, Country</span>
                  </li>
                  <li className="flex items-center">
                    <span className="material-icons-outlined text-white mr-3" aria-hidden="true">schedule</span>
                    <span>Mon-Fri: 9:00 AM - 6:00 PM</span>
                  </li>
                </ul>
              </div>

              {/* Right Section: Contact Form */}
              <div className="p-8 bg-gray-50 rounded-r-lg shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>

                {/* Conditional Rendering: Show success message after form submission */}
                {messageSent ? (
                  <div className="bg-green-100 text-green-800 p-4 rounded-lg transition-all duration-500 transform scale-105">
                    Your message has been sent successfully! We'll get back to you soon.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Input */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500 hover:ring-blue-400 transition-all duration-300"
                        placeholder="John Doe"
                        required
                        aria-label="Your Name"
                      />
                    </div>

                    {/* Email Input */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500 hover:ring-blue-400 transition-all duration-300"
                        placeholder="you@example.com"
                        required
                        aria-label="Email Address"
                      />
                    </div>

                    {/* Message Textarea */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500 hover:ring-blue-400 transition-all duration-300"
                        placeholder="Write your message here..."
                        rows={4}
                        required
                        aria-label="Message"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500 transition-all duration-300"
                      disabled={loading}  // Disable the button when form is submitting
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </GradientBackground>
    </>
  );
};

export default ContactUs;
