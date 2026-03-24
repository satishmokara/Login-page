"use client";
import { useState } from 'react';

export default function LoginPage() {
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    // This simulates a backend API call
    if (data.email === "admin@example.com" && data.password === "password123") {
      setMessage("✅ Login Successful!");
    } else {
      setMessage("❌ Invalid credentials.");
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
      <form onSubmit={handleSubmit} style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', width: '300px' }}>
        <h2>Login</h2>
        <input type="email" name="email" placeholder="Email" required style={{ width: '100%', marginBottom: '10px', padding: '8px' }} />
        <input type="password" name="password" placeholder="Password" required style={{ width: '100%', marginBottom: '10px', padding: '8px' }} />
        <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Sign In
        </button>
      </form>
      {message && <p style={{ marginTop: '20px', fontWeight: 'bold' }}>{message}</p>}
    </div>
  );
}
