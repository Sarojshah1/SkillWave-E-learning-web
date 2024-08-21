import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="bg-white rounded-lg shadow-lg mb-4 overflow-hidden border border-gray-200">
            <button
                className="w-full p-4 flex items-center justify-between bg-gradient-to-r from-blue-100 to-blue-200 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-300 transition-colors duration-300"
                onClick={toggle}
            >
                <h3 className="text-lg font-semibold text-gray-900">{question}</h3>
                {isOpen ? <FaChevronUp className="text-blue-600" /> : <FaChevronDown className="text-blue-600" />}
            </button>
            {isOpen && (
                <div className="p-4 text-gray-800 border-t border-gray-200">
                    <p>{answer}</p>
                </div>
            )}
        </div>
    );
};

FAQItem.propTypes = {
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
};

const FAQSection = () => {
    const faqs = [
        {
            question: 'What is this platform about?',
            answer: 'This platform offers a variety of online courses to help you advance your skills in various fields like Web Development, Data Science, Digital Marketing, and more.',
        },
        {
            question: 'How can I enroll in a course?',
            answer: 'To enroll in a course, browse our course catalog, select the course you’re interested in, and click on the "Enroll Now" button. You can then follow the instructions to complete your enrollment.',
        },
        {
            question: 'What payment methods are accepted?',
            answer: 'We accept various payment methods including credit/debit cards, PayPal, and other online payment options. Check our payment page for more details.',
        },
        {
            question: 'Do you offer refunds?',
            answer: 'Yes, we offer a refund policy for courses within a certain period. Please refer to our refund policy page for specific details and conditions.',
        },
    ];

    return (
        <div className="p-8 bg-gradient-to-r from-gray-100 to-gray-200">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto">
                {faqs.map((faq, index) => (
                    <FAQItem
                        key={index}
                        question={faq.question}
                        answer={faq.answer}
                    />
                ))}
            </div>
        </div>
    );
};

export default FAQSection;
