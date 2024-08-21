import React from 'react';
import loginImage from "../../assets/login.png"; 
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const login=()=>{
      navigate('/tutor/dashboard')
    }
    // const onSignUp=()=>{
    //     navigate('/signup')
    // }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white flex rounded-3xl shadow-lg overflow-hidden w-full max-w-4xl">
        
        {/* Left Section - Form */}
        <div className="w-1/2 p-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Welcome Back!</h2>
          <p className="text-gray-600 mb-6">Login to your account to continue learning</p>

          <form className="space-y-6">
            <div>
              <label className="block text-gray-700">Email Address</label>
              <input
                type="email"
                className="w-full mt-2 p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-teal-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                className="w-full mt-2 p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-teal-500"
                placeholder="Enter your password"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input type="checkbox" id="remember" className="h-4 w-4 text-teal-500 focus:ring-teal-400 border-gray-300 rounded" />
                <label htmlFor="remember" className="ml-2 text-gray-700">Remember me</label>
              </div>
              <a href="#" className="text-teal-500 hover:text-teal-600 text-sm">Forgot Password?</a>
            </div>

            <button
            onClick={login}
              className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 rounded-lg transition duration-200">
              Login
            </button>
          </form>

          <p className="text-gray-600 mt-6 text-center">Don't have an account? <a href="/signup" className="text-teal-500 hover:text-teal-600">Sign Up</a></p>
        </div>

        {/* Right Section - Image */}
        <div className="w-1/2 hidden md:block">
          <img src={loginImage} alt="Login illustration" className="object-cover h-full w-full" />
        </div>
      </div>
    </div>
  );
};

export default Login;
