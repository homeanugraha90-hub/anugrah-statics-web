import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import img1 from "../assets/third.png";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [agree, setAgree] = useState(false);
  const nav = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Dummy submit handler just for frontend
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted (frontend only)!");
    nav("/"); // Navigate somewhere
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Section */}
      <div
        className="md:w-1/2 w-full md:h-screen lg:h-screen h-[300px] text-white flex flex-col justify-center px-8 py-12 relative bg-cover bg-center"
        style={{ backgroundImage: `url(${img1})` }}
      >
        <div className="bg-opacity-70 absolute inset-0"></div>
        <div className="relative z-10">
          <h1 className="text-lg md:text-3xl font-bold mb-4">
            Looks like you're new here!
          </h1>
          <p className="md:text-lg text-sm">
            Join our group in few minutes! Sign up with your details to get
            started
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 w-full flex items-center pt-10 md:pt-20 justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Sign Up
          </h2>

          <form onSubmit={handleSubmit}>
            {/* Full Name */}
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Enter Your Name"
              className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-blue-500"
            />

            {/* Email */}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter Your Email"
              className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-blue-500"
            />

            {/* Password */}
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg mb-6 focus:outline-none focus:border-blue-500"
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

            {/* Terms & Privacy */}
            <label className="flex items-center text-gray-600 text-sm mb-6">
              <input
                type="checkbox"
                className="mr-2"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
              />
              I agree to the{" "}
              <a href="#" className="text-blue-600 hover:underline mx-1">
                Terms
              </a>
              and
              <a href="#" className="text-blue-600 hover:underline mx-1">
                Privacy Policy
              </a>
            </label>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg shadow-md transition"
            >
              Sign Up
            </button>
          </form>

          {/* OR Divider */}
          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-4 text-gray-500">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Google Sign In */}
          <button className="w-full flex items-center justify-center border border-gray-300 rounded-lg p-3 hover:bg-gray-100 transition">
            <FcGoogle className="text-xl mr-3" />
            Sign up with Google
          </button>

          {/* Already have account */}
          <p className="text-center mt-6 text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-blue-600 hover:underline">
              Log In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
