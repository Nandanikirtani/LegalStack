import React, { useState } from "react";

const Login = () => {
  const [sign, setSign] = useState(false); // false = Sign In, true = Sign Up

  return (
    <div id="login" className="min-h-screen flex items-center justify-center bg-[#0f172a] px-4">
      <div className="flex flex-col md:flex-row w-full md:h-[600px] max-w-4xl rounded-2xl overflow-hidden shadow-lg border border-yellow-500">
        
        {/* Left Info Section */}
        <div className="md:w-1/2 bg-yellow-500 flex flex-col justify-center items-center p-4 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a] mb-2 md:mb-4 text-center">
            {sign ? "Create your LegalStack account" : "Sign in to LegalStack"}
          </h2>
          <p className="text-md md:text-lg text-center text-[#0f172a]">
            {sign ? "Join LegalStack to simplify your legal journey." : "Log in to your trusted AI legal assistant."}
          </p>
          <p className="mt-4 md:mt-6 text-center text-sm text-black">
            {sign ? "Already have an account?" : "Don’t have an account?"}{" "}
            <button
              className="text-[#0f172a] font-semibold hover:underline"
              onClick={() => setSign(!sign)}
            >
              {sign ? "Sign In" : "Sign Up"}
            </button>
          </p>
        </div>

        {/* Right Form Section */}
        <div className="md:w-1/2 p-10 place-content-center">
          {sign ? (
            // Sign Up Form
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-white">Username</label>
                <input
                  type="text"
                  required
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Choose a username"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white">Email</label>
                <input
                  type="email"
                  required
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white">Password</label>
                <input
                  type="password"
                  required
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="••••••••"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
              >
                Sign Up
              </button>
            </form>
          ) : (
            // Sign In Form
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-white">Username</label>
                <input
                  type="text"
                  required
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Enter your username"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white">Password</label>
                <input
                  type="password"
                  required
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="••••••••"
                />
              </div>
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-white">
                  <input type="checkbox" className="form-checkbox text-yellow-500" />
                  Remember me
                </label>
                <a href="#" className="text-yellow-500 hover:underline">
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
              >
                Sign In
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
