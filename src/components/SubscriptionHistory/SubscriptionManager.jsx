import React, { useState } from 'react';
import './SubscriptionManager.css'; // Import a CSS file for styling

const services = [
  { id: 1, service: 'Spotify', icon: '🎵', status: 'Active', nextPayment: '2023-11-15', deadline: '2023-12-15' },
  { id: 2, service: 'Netflix', icon: '🎬', status: 'Paused', nextPayment: '2023-12-01', deadline: '2024-01-01' },
  { id: 3, service: 'Amazon Prime', icon: '📦', status: 'Active', nextPayment: '2023-11-20', deadline: '2023-12-20' },
  { id: 4, service: 'Apple Music', icon: '🍏', status: 'Active', nextPayment: '2023-11-25', deadline: '2023-12-25' },
  { id: 5, service: 'Google Play', icon: '▶️', status: 'Paused', nextPayment: '2023-12-05', deadline: '2024-01-05' },
  { id: 6, service: 'Microsoft Office', icon: '💼', status: 'Active', nextPayment: '2023-11-30', deadline: '2023-12-30' },
  { id: 7, service: 'Facebook Ads', icon: '📘', status: 'Active', nextPayment: '2023-11-18', deadline: '2023-12-18' },
  { id: 8, service: 'Twitter Blue', icon: '🐦', status: 'Paused', nextPayment: '2023-12-10', deadline: '2024-01-10' },
  { id: 9, service: 'YouTube Premium', icon: '📺', status: 'Active', nextPayment: '2023-11-22', deadline: '2023-12-22' },
  { id: 10, service: 'Twitch Prime', icon: '🎮', status: 'Active', nextPayment: '2023-11-28', deadline: '2023-12-28' },
];

function SubscriptionManager() {
  const [subscriptions, setSubscriptions] = useState(services);

  const cancelSubscription = (id) => {
    setSubscriptions(s => s.filter(sub => sub.id !== id));
  };

  const pauseSubscription = (id) => {
    setSubscriptions(s => s.map(sub => sub.id === id ? { ...sub, status: 'Paused' } : sub));
  };

  return (
    <div className="subscription-manager">
      <h2>Manage Subscriptions</h2>
      <ul className="subscription-list">
        {subscriptions.map(subscription => (
          <li key={subscription.id} className="subscription-item">
            <div className="subscription-icon">{subscription.icon}</div>
            <div className="subscription-details">
              <span className="subscription-service">{subscription.service}</span>
              <span className="subscription-status">Status: {subscription.status}</span>
              <span className="subscription-next-payment">Next Payment: {subscription.nextPayment}</span>
              <span className="subscription-deadline">Deadline: {subscription.deadline}</span>
            </div>
            <button className="cancel-button" onClick={() => cancelSubscription(subscription.id)}>Cancel</button>
            <button className="pause-button" onClick={() => pauseSubscription(subscription.id)}>Pause</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SubscriptionManager;
