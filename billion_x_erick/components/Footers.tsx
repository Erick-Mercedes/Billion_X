"use client";

import { useState, useEffect, useRef } from 'react';

/**
 * Footer Component:
 * Renders a footer section with:
 * - Company information
 * - Links to various sections (Product, Company, Resources, Community)
 * - Social media icons
 * - Scroll-to-top button
 * - Modal for displaying Terms and Conditions and Privacy Policy.
 * It also manages the visibility of the scroll-to-top button based on the scroll position.
 */
export default function Footer() {
  // State hooks to manage modal visibility and content
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  // State hook to manage the visibility of the scroll-to-top button
  const [showButton, setShowButton] = useState(false);

  // Ref to track modal element
  const modalRef = useRef<HTMLDivElement>(null);

  /**
   * Opens the modal with the specified content (either "terms" or "privacy").
   * @param content - The content type to display in the modal.
   */
  const openModal = (content: string) => {
    setModalContent(content);
    setModalOpen(true);
  };

  /**
   * Closes the modal.
   */
  const closeModal = () => {
    setModalOpen(false);
  };

  /**
   * Handles the scroll event and shows/hides the scroll-to-top button based on the scroll position.
   */
  useEffect(() => {
    const handleScroll = () => {
      // Show the scroll button when scrolled past half the page height
      if (window.scrollY > window.innerHeight / 2) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  /**
   * Closes the modal if the user clicks outside of the modal content.
   * @param event - The click event.
   */
  const handleOutsideClick = (event: Event) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      closeModal();
    }
  };

  // Add the event listener for clicks outside the modal
  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener('click', handleOutsideClick);
    } else {
      document.removeEventListener('click', handleOutsideClick);
    }

    // Cleanup the event listener when component unmounts or modal closes
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isModalOpen]);

  return (
    <footer className="bg-gray-50 text-gray-600">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-10">
        {/* Main Footer Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          {/* Column 1: Logo and description */}
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                BT {/* Placeholder for company logo */}
              </div>
              <span className="text-lg font-semibold text-gray-800">Brix Templates</span>
            </div>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit aliquam mauris sed ma.
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-3 mt-4">
              {/* Facebook Icon */}
              <a href="#" className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition duration-300 ease-in-out transform hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M3.2 14.9a2.064 2.064 0 0 1-2.065-2.065v-9.6A2.064 2.064 0 0 1 3.2 1.17h9.6a2.064 2.064 0 0 1 2.065 2.065v9.6A2.064 2.064 0 0 1 12.8 14.9zm8.39-5.8h-1.45v4.8h2.67a1.066 1.066 0 0 0 1.066-1.066v-9.6a1.066 1.066 0 0 0-1.066-1.066h-9.6a1.066 1.066 0 0 0-1.066 1.066v9.6A1.066 1.066 0 0 0 3.21 13.9h5.33V9.1h-1.6V7.5h1.6v-.859c0-1.63.793-2.34 2.14-2.34c.635 0 .976.046 1.14.069h.01V5.9h-.922c-.465 0-.685.2-.751.6a2 2 0 0 0-.023.317V7.5h1.68l-.228 1.6z" clip-rule="evenodd"/></svg>
              </a>
              {/* Twitter Icon */}
              <a href="#" className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition duration-300 ease-in-out transform hover:scale-110">
                <svg className="w-6 h-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
                  <path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12.001 2.5c4.478 0 6.717 0 8.108 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.717 0-8.109-1.391c-1.39-1.392-1.39-3.63-1.39-8.109"/>
                  <path d="m7 17l4.194-4.193M17 7l-4.193 4.194m0 0L9.777 7H7l4.194 5.807m1.613-1.614L17 17h-2.778l-3.028-4.193"/>
                </svg>
              </a>
              {/* LinkedIn Icon */}
              <a href="#" className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition duration-300 ease-in-out transform hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="-2 -2 24 24"><g fill="#000"><path d="M15 11.13v3.697h-2.143v-3.45c0-.866-.31-1.457-1.086-1.457c-.592 0-.945.398-1.1.784c-.056.138-.071.33-.071.522v3.601H8.456s.029-5.842 0-6.447H10.6v.913l-.014.021h.014v-.02c.285-.44.793-1.066 1.932-1.066c1.41 0 2.468.922 2.468 2.902M6.213 5.271C5.48 5.271 5 5.753 5 6.385c0 .62.466 1.115 1.185 1.115h.014c.748 0 1.213-.496 1.213-1.115c-.014-.632-.465-1.114-1.199-1.114m-1.086 9.556h2.144V8.38H5.127z"/><path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"/></g></svg>
              </a>
              {/* YouTube Icon */}
              <a href="#" className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition duration-300 ease-in-out transform hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.em" viewBox="0 0 24 24"><g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M2 8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"/><path d="m10 9l5 3l-5 3z"/></g></svg>
              </a>
              {/* Instagram Icon */}
              <a href="#" className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition duration-300 ease-in-out transform hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 16 16"><path fill="#000" d="M8 1c-1.35 0-2.33.016-2.92.047a6 6 0 0 0-1.55.266a3.66 3.66 0 0 0-2.22 2.22a6 6 0 0 0-.266 1.55c-.031.594-.047 1.57-.047 2.92s.016 2.33.047 2.92c.019.525.108 1.05.266 1.55c.182.511.475.976.86 1.36c.38.382.846.666 1.36.828c.497.178 1.02.278 1.55.296c.594.031 1.57.047 2.92.047s2.33-.016 2.92-.047a6 6 0 0 0 1.55-.266a3.67 3.67 0 0 0 2.22-2.22q.236-.754.266-1.55c.031-.594.047-1.57.047-2.92s-.01-2.32-.031-2.91a6.3 6.3 0 0 0-.282-1.56a3.66 3.66 0 0 0-2.219-2.22a6 6 0 0 0-1.55-.266q-.893-.047-2.92-.047zm-.5 12.8q-1.25 0-1.94-.031a6.6 6.6 0 0 1-1.69-.25a2.38 2.38 0 0 1-1.344-1.344a6.6 6.6 0 0 1-.25-1.69c-.021-.458-.031-1.1-.031-1.94v-1q0-1.25.031-1.94c.006-.571.09-1.14.25-1.69a2.26 2.26 0 0 1 1.343-1.343a6.6 6.6 0 0 1 1.69-.25c.458-.021 1.1-.031 1.94-.031h1q1.25 0 1.94.031c.571.006 1.14.09 1.69.25a2.26 2.26 0 0 1 1.344 1.343c.16.549.244 1.12.25 1.69c.02.438.031 1.08.031 1.94v1q0 1.25-.031 1.94a6.6 6.6 0 0 1-.25 1.69a2.38 2.38 0 0 1-1.344 1.344c-.548.16-1.12.244-1.69.25c-.437.02-1.08.031-1.94.031zm4.25-10.4a.87.87 0 0 0-.616 1.49a.85.85 0 0 0 .944.195a.8.8 0 0 0 .272-.195c.16-.168.256-.385.275-.616a.89.89 0 0 0-.875-.875zM8 4.52a3.4 3.4 0 0 0-1.75.472c-.53.307-.971.748-1.28 1.28a3.5 3.5 0 0 0 0 3.5A3.52 3.52 0 0 0 8 11.524a3.515 3.515 0 0 0 3.502-3.502c0-.61-.163-1.22-.472-1.75a3.5 3.5 0 0 0-1.28-1.28A3.4 3.4 0 0 0 8 4.52m0 5.75a2.25 2.25 0 0 1 0-4.5a2.25 2.25 0 0 1 0 4.5"/></svg>
              </a>
            </div>
          </div>

          {/* Product Links Section */}
          <div>
            <h3 className="text-sm font-semibold text-gray-800 mb-3">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Features</a></li>
              <li><a href="#" className="hover:underline">Pricing</a></li>
              <li><a href="#" className="hover:underline">Case studies</a></li>
              <li><a href="#" className="hover:underline">Reviews</a></li>
            </ul>
          </div>

          {/* Company Links Section */}
          <div>
            <h3 className="text-sm font-semibold text-gray-800 mb-3">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
            </ul>
          </div>

          {/* Resources Links Section */}
          <div>
            <h3 className="text-sm font-semibold text-gray-800 mb-3">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Help Center</a></li>
              <li><a href="#" className="hover:underline">Developers API</a></li>
              <li><a href="#" className="hover:underline">Documentation</a></li>
            </ul>
          </div>

          {/* Community Links Section */}
          <div>
            <h3 className="text-sm font-semibold text-gray-800 mb-3">Community</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Forums</a></li>
              <li><a href="#" className="hover:underline">Discord</a></li>
              <li><a href="#" className="hover:underline">Events</a></li>
            </ul>
          </div>
        </div>

        {/* Divider Line and Legal Information */}
        <div className="border-t border-gray-200 mt-8 pt-4 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Brix Templates |{" "}
            <button onClick={() => openModal('terms')} className="hover:underline text-blue-600">Terms & Conditions</button> |{" "}
            <button onClick={() => openModal('privacy')} className="hover:underline text-blue-600">Privacy Policy</button>
          </p>
        </div>

      {/* Scroll to Top Button */}
      {showButton && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-5 right-5 p-3 rounded-full shadow-lg bg-gradient-to-r from-blue-600 to-indigo-300 text-white transform hover:scale-110 hover:from-blue-700 hover:to-indigo-400 transition-all duration-300 ease-in-out animate-pulse"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12 19l0 -13.5"/><path d="M12 5l5 5M12 5l-5 5"/></g></svg>
        </button>
      )}

      </div>

      {/* Modal for Terms and Privacy Policy */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div ref={modalRef} className="bg-white p-6 rounded-lg max-w-lg w-full">
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {modalContent === 'terms' ? 'Terms and Conditions' : 'Privacy Policy'}
              </h2>
              <button onClick={closeModal} className="absolute top-2 right-2 text-gray-600">
                ✖
              </button>
            </div>
            <p className="text-sm text-gray-600">
              {modalContent === 'terms' ? (
                "Terms and Conditions content goes here..."
              ) : (
                "Privacy Policy content goes here..."
              )}
            </p>
          </div>
        </div>
      )}
    </footer>
  );
}
