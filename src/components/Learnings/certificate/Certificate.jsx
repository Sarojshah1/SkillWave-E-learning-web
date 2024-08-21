import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import logo from "../../../assets/logo.png";

const Certificate = ({ courseName, studentName, date, instructorName }) => {
    const certificateRef = useRef();

    const downloadCertificate = () => {
        const input = certificateRef.current;
        html2canvas(input, {
            scale: 3,
            useCORS: true // Handle cross-origin images
        }).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('landscape', 'px', [canvas.width, canvas.height]);
            pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
            pdf.save(`${studentName}_certificate.pdf`);
        });
    };

    return (
        <div>
            <div ref={certificateRef} className="max-w-4xl mx-auto p-12 bg-white border-4 border-gray-300 rounded-lg shadow-2xl relative">
                
                {/* Logo at Top Left */}
                <div className="absolute top-4 left-4">
                    <img
                        src={logo}
                        alt="Skillwave"
                        className="w-32"
                    />
                </div>

                {/* Header */}
                <div className="text-center mb-12 mt-16">
                    <h2 className="text-5xl font-serif font-bold text-blue-700 mb-4 uppercase">Certificate of Completion</h2>
                    <p className="text-lg font-semibold text-gray-600 italic">This is to certify that</p>
                    <h1 className="text-4xl font-serif font-bold text-gray-800 mt-4">{studentName}</h1>
                </div>

                {/* Course Information */}
                <div className="text-center mt-6">
                    <p className="text-lg font-semibold text-gray-600">has successfully completed the course</p>
                    <h2 className="text-3xl font-serif font-semibold text-gray-700 mt-4 italic">{courseName}</h2>
                    <p className="text-lg font-semibold text-gray-600 mt-4">on</p>
                    <p className="text-2xl font-serif font-bold text-gray-800">{date}</p>
                </div>

                {/* Seal and Signature */}
                <div className="flex justify-between items-center mt-16 px-8">
                    <div className="text-left">
                        <p className="text-gray-600">Date</p>
                        <p className="font-semibold text-lg">{date}</p>
                    </div>
                    <div className="text-center">
                        <div className="h-1 bg-blue-700 w-48 mx-auto mb-2"></div>
                        <p className="text-gray-600">Instructor's Signature</p>
                        <p className="font-semibold text-lg text-gray-800 mt-1">{instructorName}</p>
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-24 text-center">
                    <p className="text-sm text-gray-500">This certificate is awarded by</p>
                    <h3 className="text-xl font-bold text-blue-700">Skillwave</h3>
                    <p className="text-sm text-gray-500 mt-1">Empowering skills, one course at a time.</p>
                </div>
            </div>

            <div className="text-center mt-8">
                <button
                    onClick={downloadCertificate}
                    className="bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-800 transition-colors"
                >
                    Download Certificate
                </button>
            </div>
        </div>
    );
};

export default Certificate;
