import React from 'react';
import SubscriptionManager from './components//SubscriptionHistory/SubscriptionManager';
import PaymentHistory from './components/PaymentHistory/PaymentHistory';

function App() {
  return (
    <div className="App">
      <SubscriptionManager />
      <PaymentHistory />
    </div>
  );
}

export default App;