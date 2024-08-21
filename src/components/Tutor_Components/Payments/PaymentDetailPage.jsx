import React, { useState } from 'react';

const PaymentDetailPage = () => {
    const [selectedCourse, setSelectedCourse] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);
    const paymentsPerPage = 5;

    // Dummy data representing payments
    const payments = [
        { id: 1, courseTitle: 'React for Beginners', amount: 499, paymentDate: '2024-08-15', paymentMethod: 'Credit Card' },
        { id: 2, courseTitle: 'Advanced JavaScript', amount: 699, paymentDate: '2024-08-16', paymentMethod: 'PayPal' },
        { id: 3, courseTitle: 'Node.js Mastery', amount: 799, paymentDate: '2024-08-17', paymentMethod: 'Bank Transfer' },
        { id: 4, courseTitle: 'Full Stack Development', amount: 899, paymentDate: '2024-08-18', paymentMethod: 'Credit Card' },
        { id: 5, courseTitle: 'React for Beginners', amount: 499, paymentDate: '2024-08-19', paymentMethod: 'Credit Card' },
        { id: 6, courseTitle: 'Advanced JavaScript', amount: 699, paymentDate: '2024-08-20', paymentMethod: 'PayPal' },
        { id: 7, courseTitle: 'Node.js Mastery', amount: 799, paymentDate: '2024-08-21', paymentMethod: 'Bank Transfer' },
        { id: 8, courseTitle: 'Full Stack Development', amount: 899, paymentDate: '2024-08-22', paymentMethod: 'Credit Card' },
        { id: 9, courseTitle: 'React for Beginners', amount: 499, paymentDate: '2024-08-23', paymentMethod: 'Credit Card' },
        { id: 10, courseTitle: 'Advanced JavaScript', amount: 699, paymentDate: '2024-08-24', paymentMethod: 'PayPal' },
    ];

    // Extract unique course titles for filtering
    const courses = ['All', ...new Set(payments.map(payment => payment.courseTitle))];

    // Filter payments based on selected course
    const filteredPayments = selectedCourse === 'All'
        ? payments
        : payments.filter(payment => payment.courseTitle === selectedCourse);

    // Pagination logic
    const indexOfLastPayment = currentPage * paymentsPerPage;
    const indexOfFirstPayment = indexOfLastPayment - paymentsPerPage;
    const currentPayments = filteredPayments.slice(indexOfFirstPayment, indexOfLastPayment);
    const totalPages = Math.ceil(filteredPayments.length / paymentsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <h1 className="text-4xl font-bold text-center text-gray-800 py-8">Payment Details</h1>

                {/* Course Filter Dropdown */}
                <div className="text-center mb-6">
                    <select
                        value={selectedCourse}
                        onChange={(e) => {
                            setSelectedCourse(e.target.value);
                            setCurrentPage(1); // Reset to the first page on filter change
                        }}
                        className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-600 transition"
                    >
                        {courses.map((course, index) => (
                            <option key={index} value={course}>
                                {course}
                            </option>
                        ))}
                    </select>
                </div>

                <table className="min-w-full bg-white border-collapse">
                    <thead>
                        <tr>
                            <th className="py-4 px-6 bg-teal-600 text-left text-white font-semibold text-sm uppercase">Course Title</th>
                            <th className="py-4 px-6 bg-teal-600 text-left text-white font-semibold text-sm uppercase">Amount (Npr)</th>
                            <th className="py-4 px-6 bg-teal-600 text-left text-white font-semibold text-sm uppercase">Payment Date</th>
                            <th className="py-4 px-6 bg-teal-600 text-left text-white font-semibold text-sm uppercase">Payment Method</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentPayments.length > 0 ? (
                            currentPayments.map(payment => (
                                <tr key={payment.id} className="hover:bg-gray-100 transition">
                                    <td className="py-4 px-6 border-b border-gray-200 text-gray-700 font-medium">{payment.courseTitle}</td>
                                    <td className="py-4 px-6 border-b border-gray-200 text-gray-700">Npr {payment.amount.toFixed(2)}</td>
                                    <td className="py-4 px-6 border-b border-gray-200 text-gray-700">{payment.paymentDate}</td>
                                    <td className="py-4 px-6 border-b border-gray-200 text-gray-700">{payment.paymentMethod}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="py-4 px-6 border-b border-gray-200 text-gray-700 text-center">No payments found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>

                {/* Pagination */}
                <div className="flex justify-center items-center my-4">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => handlePageChange(index + 1)}
                            className={`mx-1 px-3 py-2 border rounded-lg ${currentPage === index + 1 ? 'bg-teal-600 text-white' : 'bg-gray-200 text-gray-800'} hover:bg-teal-600 hover:text-white transition`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PaymentDetailPage;
