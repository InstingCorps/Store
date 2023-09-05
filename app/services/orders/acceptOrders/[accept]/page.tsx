'use client'
import React, { useState } from 'react';
import { OrderDigiflazz } from '../../ordersDigiflazz';
import { DecryptAutomated } from '@/crypto/encrypt';
import { ORDERvalidation } from '@/app/validation/URLvalidation';

const AcceptOrder: React.FC<{ params: { accept: string } }> = ({ params }) => {
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [enteredPassword, setEnteredPassword] = useState('');
  const [orderResult, setOrderResult] = useState('');
  const response = params.accept;
  
  const data = response.replace(/%3A/g, ':');
  const Decrypt = DecryptAutomated(data)
  try {
    const verify = Decrypt.verify
    if (ORDERvalidation(verify)) {
      const correctPassword = '250106';
      const handlePasswordInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEnteredPassword(event.target.value);
      };
      const handleOrderClick = async () => {
        if (enteredPassword === correctPassword) {
      await OrderDigiflazz(data, enteredPassword , response);
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
  
    } else {
   return (
    <div>PASTIKAN URL ANDA BENAR!</div>
   )
    }  
  } catch (error) {
    return (
      <div>ERROR URL TIDAK VALID</div>
  )
  }
 
};

export default AcceptOrder;
