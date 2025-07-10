// src/components/RazorpayPayment.tsx
import React from "react";

declare global {
  interface Window {
    Razorpay: any;
  }
}

interface RazorpayOrder {
  id: string;
  amount: number;
  currency: string;
}

const RazorpayPayment: React.FC = () => {
  const handlePayment = async () => {
    try {
      // Call backend to create Razorpay order
      const response = await fetch(
        "https://ks-bantwala.onrender.com/create-order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ amount: 500 }), // ₹500
        }
      );

      const data: RazorpayOrder = await response.json();

      const options = {
        key: "rzp_test_xlq8duT5OQFSXd", // Replace with your Razorpay key_id (public key)
        amount: data.amount,
        currency: data.currency,
        name: "Kulala Sangha",
        description: "Membership Payment",
        order_id: data.id,
        handler: function (response: any) {
          alert("Payment Successful!");
          console.log("Payment ID:", response.razorpay_payment_id);
          console.log("Order ID:", response.razorpay_order_id);
          console.log("Signature:", response.razorpay_signature);
        },
        prefill: {
          name: "Premnath K",
          email: "prem@example.com",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment Error", error);
      alert("Something went wrong during payment.");
    }
  };

  return <button onClick={handlePayment}>Pay ₹500</button>;
};

export default RazorpayPayment;
