'use client'
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';



const Verify: React.FC = () => {
  const router = useRouter();
  const { orderId } = router.query;

  const [verificationStatus, setVerificationStatus] = useState('');

  const handleVerify = async (status: string) => {
    const response = await axios.post(`/api/verify-order/${orderId}`, { status });
    setVerificationStatus(response.data.message);
  };

  return (
    <div>
      <h1>Verification Page</h1>
      <p>Order ID: {orderId}</p>
      <button onClick={() => handleVerify('approved')}>Approve</button>
      <button onClick={() => handleVerify('rejected')}>Reject</button>
      <p>{verificationStatus}</p>
    </div>
  );
};

export default Verify;
