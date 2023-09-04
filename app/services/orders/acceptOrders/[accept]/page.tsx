'use client'
import React, { useState } from 'react';
import { OrderDigiflazz } from '../../ordersDigiflazz';

const AcceptOrder: React.FC<{ params: { accept: string } }> = ({ params }) => {
  const response = params.accept;
  const data = response.replace(/%3A/g, ':');

  const correctPassword = '250106';

  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [enteredPassword, setEnteredPassword] = useState('');
  const [orderResult, setOrderResult] = useState('');

  const handlePasswordInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredPassword(event.target.value);
  };

  const handleOrderClick = async () => {
    if (enteredPassword === correctPassword) {
      const result = await OrderDigiflazz(data, enteredPassword);
      setOrderResult("SUKSESS , ORDER SEDANG DI PROSSES");
    } else {
      setOrderResult('Password salah. Silakan coba lagi.');
    }
  };

  return (
    <div>
      <button onClick={() => setShowPasswordForm(true)}>ORDER</button>
      {showPasswordForm && (
        <div>
          <input
            type="password"
            placeholder="Masukkan password"
            value={enteredPassword}
            onChange={handlePasswordInputChange}
          />
          <button onClick={handleOrderClick}>Konfirmasi</button>
        </div>
      )}
      {orderResult && <div>{orderResult}</div>}
    </div>
  );
};

export default AcceptOrder;
