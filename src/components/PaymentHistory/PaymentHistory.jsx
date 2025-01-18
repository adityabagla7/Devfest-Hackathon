import React, { useState } from 'react';
import './PaymentHistory.css';

const initialPayments = [
  { id: 1, service: 'Service A', date: '2023-10-15', amount: '0.05 ETH' },
  { id: 2, service: 'Service B', date: '2023-09-13', amount: '0.04 ETH' },
];

function PaymentHistory() {
  const [payments, setPayments] = useState(initialPayments);

  const deletePayment = (id) => {
    setPayments(p => p.filter(payment => payment.id !== id));
  };

  return (
    <div className="payment-history">
      <h2>Payment History</h2>
      <ul className="payment-list">
        {payments.map(payment => (
          <li key={payment.id} className="payment-item">
            <div className="payment-details">
              <span className="payment-service">{payment.service}</span>
              <span className="payment-date">Date: {payment.date}</span>
              <span className="payment-amount">Amount: {payment.amount}</span>
            </div>
            <button className="delete-button" onClick={() => deletePayment(payment.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PaymentHistory;