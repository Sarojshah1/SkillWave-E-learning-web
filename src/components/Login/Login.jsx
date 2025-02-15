import React, { useState,useEffect } from 'react';
import loginImage from "../../assets/login.png"; 
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Login = () => {

  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const token=localStorage.getItem('token');
    const role=localStorage.getItem('role');
    useEffect(() => {
      if(token===null){
        navigate('/login');

      }else if(token!==null && role==='tutor'){
        navigate('/tutor/dashboard');
      }else if(token!==null && role==='student'){
        navigate('/')
      }
    },[token, role, navigate])
    const handleLogin = async (e) => {
      e.preventDefault();
      try {
          const response = await axios.post('http://localhost:3000/api/user/login', { email, password });
          console.log(response)
          const { token, role,id } = response.data;
          localStorage.setItem('token', token);
          localStorage.setItem('role', role);
          localStorage.setItem('userid', id);

          if (role === 'tutor') {
              navigate('/tutor/dashboard');
          } else if (role === 'student') {
              navigate('/');
          } else if (role === 'admin') {
              navigate('/admin/dashboard');
          }
          window.location.reload();
      } catch (error) {
          setError('Invalid credentials. Please try again.');
      }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white flex rounded-3xl shadow-lg overflow-hidden w-full max-w-4xl">
        
        {/* Left Section - Form */}
        <div className="w-1/2 p-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Welcome Back!</h2>
          <p className="text-gray-600 mb-6">Login to your account to continue learning</p>

          <form onSubmit={handleLogin}  className="space-y-6">
            <div>
              <label className="block text-gray-700">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-2 p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-teal-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
            {error && <p className="text-red-500 text-center">{error}</p>}

            <button
            type="submit"
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
