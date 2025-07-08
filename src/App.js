import React, { useState } from 'react';
import './GpayLogin.css';

function App() {
  const [phone, setPhone] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`OTP sent to +91-${phone}`);
  };

  return (
    <div className="gpay-container">
      <div className="gpay-box">
        <img src="/gpay.png" alt="Google Pay" className="gpay-logo" />
        <h2>Sign in to Google Pay</h2>
        <form onSubmit={handleLogin}>
          <input
            type="tel"
            placeholder="Enter mobile number"
            value={phone}
            maxLength="10"
            pattern="[0-9]{10}"
            required
            onChange={(e) => setPhone(e.target.value)}
          />
          <button type="submit">Send OTP</button>
        </form>
        <p className="terms">By continuing, you agree to the Terms & Privacy.</p>
      </div>
    </div>
  );
}

export default App;
