import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { Eye, EyeOff } from "lucide-react";
import img from "../assets/Gate.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const nav = useNavigate();

  // Dummy effect for "remember me" simulation
  useEffect(() => {
    const savedEmail = localStorage.getItem("rememberEmail");
    if (savedEmail) {
      setEmail(savedEmail);
      setRememberMe(true);
    }
  }, []);

  // Dummy submit handler
  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}\nRemember Me: ${rememberMe}`);
    nav("/"); // Navigate somewhere (frontend only)
  };

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      {/* Left Side */}
      <div
        className="md:w-1/2 w-full text-white flex flex-col justify-center items-center px-8 py-12 relative bg-cover bg-center"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="bg-black/50 absolute inset-0"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 text-white">
            Welcome back!
          </h1>
          <p className="text-md md:text-lg mb-6">
            Get access to your Orders, Wishlist and Recommendations.
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="md:w-1/2 w-full bg-[#f9f3f3] flex items-center justify-center p-8">
        <div className="w-full max-w-md bg-[#fcf6f6] text-black">
          <h2 className="text-2xl font-bold mb-6">Login</h2>

          <form onSubmit={handleLogin}>
            {/* Email */}
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-700 rounded-lg mb-4 focus:outline-none focus:border-blue-500"
              required
            />

            {/* Password */}
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-gray-700 rounded-lg mb-4 focus:outline-none focus:border-blue-500"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Remember Me + Forgot Password */}
            <div className="flex items-center justify-between mb-6 text-sm">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="mr-2"
                />
                Remember Me
              </label>
              <a href="#" className="text-blue-500 hover:underline">
                Forgot Password ?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition"
            >
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-700" />
            <span className="mx-4 text-gray-500">Or with Social Profile</span>
            <hr className="flex-grow border-gray-700" />
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-4 text-white">
            <a href="#" className="bg-blue-600 p-3 rounded-full hover:bg-blue-700">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-sky-500 p-3 rounded-full hover:bg-sky-600">
              <FaTwitter />
            </a>
            <a href="#" className="bg-red-500 p-3 rounded-full hover:bg-red-600">
              <FaGoogle />
            </a>
            <a href="#" className="bg-blue-500 p-3 rounded-full hover:bg-blue-600">
              <FaLinkedinIn />
            </a>
          </div>

          {/* Sign Up Link */}
          <p className="text-center mt-6 text-gray-400">
            Don’t have an account?{" "}
            <a href="/auth" className="text-blue-500 hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
