import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import KhaltiCheckout from "khalti-checkout-web";
import { MdPayments } from "react-icons/md";
import axios from "axios";
import khalti_Digital_Wallet from "../../assets/Khalti_Digital_Wallet_Logo.jpg";
import esewa from "../../assets/esewa-icon-large.png";

const CheckoutPage = () => {
    const { state } = useLocation();
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");

    if (!state || !state.course) {
        return <div className="p-6 text-center text-red-500">No course data available.</div>;
    }

    const {
        thumbnail,
        title,
        price,
        description,
        duration,
        level,
        creator,
        createdDate,
        totalLessons,
    } = state.course;

    // Khalti payment handling
    const handleKhaltiPayment = () => {
        let checkout = new KhaltiCheckout({
            // replace this key with yours
            publicKey: 'test_public_key_617c4c6fe77c441d88451ec1408a0c0e',
            productIdentity: "1234567890",
            productName: "Furniture Fusion",
            productUrl: "http://localhost:3000",
            eventHandler: {
              onSuccess(payload) {
                // hit merchant api for initiating verfication
                console.log(payload);
                let data = {
                  "token": payload.token,
                  "amount": payload.price
                };
                
                let config = {
                  headers: {'Authorization': 'test_secret_key_3f78fb6364ef4bd1b5fc670ce33a06f5'}
                };
                
                axios.post('https://khalti.com/api/v2/payment/verify/', data, config)
                .then(response => {
                  console.log(response.data);
                })
                .catch(error => {
                  console.log(error);
                });
              },
              // onError handler is optional
              onError(error) {
                // handle errors
                console.log(error);
              },
              onClose() {
                console.log("widget is closing");
              },
            },
            paymentPreference: [
              "KHALTI",
              "EBANKING",
              "MOBILE_BANKING",
              "CONNECT_IPS",
              "SCT",
            ],
          });
        checkout.show({ amount: price * 100 });
       
    };
    const handleEsewaPayment = () => {
        const amount = price;
        const pidx = 'course123'; // Replace with actual payment ID or course ID
        const merchantCode = 'your_merchant_code'; // Replace with your e-Sewa merchant code
        const eSewaPaymentUrl = `
https://uat.esewa.com.np/api/epay/transaction/status/?product_code=EPAYTEST&total_amount=100&transaction_uuid=123
 `;
        window.location.href = eSewaPaymentUrl;
    };

    const handlePayment = () => {
        if (selectedPaymentMethod === 'e-sewa') {
            handleEsewaPayment();
        } else if (selectedPaymentMethod === 'khalti') {
            handleKhaltiPayment();
        } else {
            alert('Please select a payment method.');
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-100 py-12">
            {/* Summary Section */}
            <div className="w-full max-w-xl mb-8 p-8 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Order Summary</h2>
                <div className="flex items-center space-x-4 mb-6">
                    <img src={`http://localhost:3000/thumbnails/${thumbnail}`} alt={title} className="w-40 h-40 rounded-md object-contain" />
                    <div>
                        <h3 className="text-lg font-medium text-gray-800">{title}</h3>
                        <p className="text-gray-500">{description}</p>
                        <p className="text-gray-900 font-bold">{`Npr. ${price}`}</p>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="flex justify-between text-gray-700">
                        <span>Subtotal</span>
                        <span>{`Npr. ${price}`}</span>
                    </div>
                    <div className="flex justify-between text-gray-700">
                        <span>Coupon Discount</span>
                        <span>0%</span>
                    </div>
                    <div className="flex justify-between text-gray-700">
                        <span>TAX</span>
                        <span>5%</span>
                    </div>
                    <div className="flex justify-between text-gray-900 font-bold">
                        <span>Total</span>
                        <span>{`Npr. ${(price * 1.05).toFixed(2)}`}</span>
                    </div>
                </div>
            </div>

            {/* Checkout Section */}
            <div className="w-full max-w-xl p-8 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Checkout</h2>
                <div className="mb-6">
                    <h3 className="text-lg font-medium text-gray-700 mb-2">Payment Method</h3>
                    <div className="flex items-center space-x-4">
                        <button className={`border p-2 rounded-md ${selectedPaymentMethod === 'e-sewa' ? 'border-blue-500' : 'border-gray-300'}`} onClick={() => setSelectedPaymentMethod('e-sewa')}>
                            <img src={esewa} alt="e-Sewa" className="w-12 h-12" />
                        </button>
                        <button className={`border p-2 rounded-md ${selectedPaymentMethod === 'khalti' ? 'border-blue-500' : 'border-gray-300'}`} onClick={() => setSelectedPaymentMethod('khalti')}>
                            <img src={khalti_Digital_Wallet} alt="Khalti" className="w-18 h-12" />
                        </button>
                    </div>
                </div>
                <div className="mt-8">
                    <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-200" onClick={handlePayment}>
                        Confirm Payment
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
