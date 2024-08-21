import React, { useState } from 'react';
import { FaPaperPlane, FaQuestionCircle, FaUserShield, FaRegEnvelope } from 'react-icons/fa';

const CustomerSupportPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [faqItems] = useState([
    { question: 'How do I reset my password?', answer: 'You can reset your password by going to the settings page and selecting "Reset Password".' },
    { question: 'How do I contact support?', answer: 'You can contact support via the contact form on this page or email us at support@example.com.' },
    { question: 'Where can I find my course progress?', answer: 'Course progress can be viewed in your dashboard under the "Courses" section.' },
  ]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8">Customer Support</h1>

        {/* Contact Form */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-12 border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <FaPaperPlane className="text-teal-500 mr-3" /> Contact Us
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300"
                rows="6"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-teal-600 text-white px-6 py-3 rounded-md shadow-lg hover:bg-teal-700 transition-transform transform hover:scale-105 flex items-center justify-center"
            >
              Send Message
              <FaPaperPlane className="inline ml-2" />
            </button>
          </form>
        </div>

        {/* FAQ Section */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <FaQuestionCircle className="text-teal-500 mr-3" /> Frequently Asked Questions
          </h2>
          <ul>
            {faqItems.map((item, index) => (
              <li key={index} className="mb-6">
                <div className="flex items-center mb-2">
                  <FaQuestionCircle className="text-teal-500 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-700">{item.question}</h3>
                </div>
                <p className="text-gray-600">{item.answer}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Support Contact Information */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <FaUserShield className="text-teal-500 mr-3" /> Contact Support
          </h2>
          <p className="text-gray-600 mb-4">If you need further assistance, you can reach out to us through the following methods:</p>
          <div className="flex items-center mb-4">
            <FaRegEnvelope className="text-teal-500 mr-3" />
            <a href="mailto:support@example.com" className="text-teal-600 hover:text-teal-700">support@example.com</a>
          </div>
          <div className="flex items-center">
            <FaUserShield className="text-teal-500 mr-3" />
            <a href="tel:+1234567890" className="text-teal-600 hover:text-teal-700">+1 (234) 567-890</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSupportPage;
