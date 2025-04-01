import Navbar from "@/components/Navbar";
import Footer from "@/components/Footers";
import GradientBackground from "@/components/GradientBackground";

const HeaderAccount: React.FC = () => {
  const togglePasswordVisibility = (id: string) => {
    const input = document.getElementById(id) as HTMLInputElement;
    if (input) {
      input.type = input.type === "password" ? "text" : "password";
    }
  };

  return (
    <>
      {/* Navbar con los botones Login y GET STARTED */}
      <Navbar showLogin={true} />

      {/* Contenido de la página */}
      <GradientBackground className="py-20">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold text-gray-800 tracking-tight">My Account</h1>
          <p className="mt-4 text-lg text-gray-600">Home &gt; My Account</p>

          {/* Sección de formulario */}
          <div className="bg-white shadow-lg rounded-2xl p-12 w-full max-w-6xl mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Log In Section */}
              <div className="p-8 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <h2 className="text-4xl font-bold mb-8 text-gray-700">Log In</h2>
                <form className="space-y-6">
                  {/* Campos para Login */}
                  <div>
                    <label htmlFor="login-email" className="block text-gray-700 font-medium mb-3">
                      Username or email address
                    </label>
                    <input
                      type="email"
                      id="login-email"
                      className="w-full px-6 py-4 border rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 text-lg text-black transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="login-password" className="block text-gray-700 font-medium mb-3">
                      Password
                    </label>
                    <div className="relative flex items-center">
                      <input
                        type="password"
                        id="login-password"
                        className="w-full px-6 py-4 border rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 text-lg text-black transition-all duration-300"
                        placeholder="Enter your password"
                      />
                      <button
                        type="button"
                        className="absolute right-4 text-gray-500 hover:text-gray-700"
                        onClick={() => togglePasswordVisibility("login-password")}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12l-2 2m0 0l-2-2m2 2V9m6 6h-12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="remember-me"
                      className="mr-3 w-6 h-6 transition-transform duration-300 transform hover:scale-110"
                    />
                    <label htmlFor="remember-me" className="text-gray-700 text-lg">
                      Remember me
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-blue-300 to-blue-500 text-white px-6 py-3 rounded-md hover:from-blue-400 hover:to-blue-600 hover:scale-105 transition-transform duration-300 text-base"
                    >
                      Log In
                    </button>
                    <a href="#" className="text-lg text-blue-400 hover:underline transition-opacity duration-300 hover:opacity-80">
                      Lost Your Password?
                    </a>
                  </div>
                </form>
              </div>

              {/* Register Section */}
              <div className="p-8 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <h2 className="text-4xl font-bold mb-8 text-gray-700">Register</h2>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="register-fullname" className="block text-gray-700 font-medium mb-3">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="register-fullname"
                      className="w-full px-6 py-4 border rounded-lg focus:outline-none focus:ring-4 focus:ring-green-300 text-lg text-black transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="register-email" className="block text-gray-700 font-medium mb-3">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="register-email"
                      className="w-full px-6 py-4 border rounded-lg focus:outline-none focus:ring-4 focus:ring-green-300 text-lg text-black transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="register-password" className="block text-gray-700 font-medium mb-3">
                      Password
                    </label>
                    <div className="relative flex items-center">
                      <input
                        type="password"
                        id="register-password"
                        className="w-full px-6 py-4 border rounded-lg focus:outline-none focus:ring-4 focus:ring-green-300 text-lg text-black transition-all duration-300"
                        placeholder="Create a password"
                      />
                      <button
                        type="button"
                        className="absolute right-4 text-gray-500 hover:text-gray-700"
                        onClick={() => togglePasswordVisibility("register-password")}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12l-2 2m0 0l-2-2m2 2V9m6 6h-12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="register-confirm-password" className="block text-gray-700 font-medium mb-3">
                      Confirm Password
                    </label>
                    <div className="relative flex items-center">
                      <input
                        type="password"
                        id="register-confirm-password"
                        className="w-full px-6 py-4 border rounded-lg focus:outline-none focus:ring-4 focus:ring-green-300 text-lg text-black transition-all duration-300"
                        placeholder="Confirm your password"
                      />
                      <button
                        type="button"
                        className="absolute right-4 text-gray-500 hover:text-gray-700"
                        onClick={() => togglePasswordVisibility("register-confirm-password")}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12l-2 2m0 0l-2-2m2 2V9m6 6h-12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="accept-terms"
                      className="mr-3 w-6 h-6 transition-transform duration-300 transform hover:scale-110"
                    />
                    <label htmlFor="accept-terms" className="text-gray-700 text-lg">
                      I agree to the{" "}
                      <a href="#" className="text-blue-400 hover:underline transition-opacity duration-300 hover:opacity-80">
                        terms and conditions
                      </a>.
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-green-300 to-green-500 text-white px-6 py-3 rounded-md hover:from-green-400 hover:to-green-600 hover:scale-105 transition-transform duration-300 text-base w-full"
                  >
                    Register
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </GradientBackground>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default HeaderAccount;
