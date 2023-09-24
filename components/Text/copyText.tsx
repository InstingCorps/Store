'use client'

// components/CopyButton.tsx
import React, { useState } from 'react';
import CopyTextAlert from '../Alert/CopyTextAlert';
import { Alert } from 'flowbite-react';

const CopyButton: React.FC<{ textToCopy: string }> = ({ textToCopy }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = async () => {
    
      try {
      await navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => {
    setCopied(false);
      }, 7000);
    } catch (error) {
      console.error('Gagal menyalin teks:', error);
    }
  };

  return (
    <div>
      {copied && (
              <Alert
              color="success"
              onDismiss={()=>alert("Alert dismissed!")}
            >
              <span>
                <p>
                  <span className="font-extrabold">
                    Info!
                  </span>
                  Text Berhasil Di Salin!
                </p>
              </span>
            </Alert>
      )}
    <div
    className={`font-bold border rounded-2xl p-2 text-sm text-center cursor-pointer
    ${copied ? 'bg-orange-500 text-white border-orange-500' : 'border-2 border-orange-500 text-orange-500'}`}
    onClick={handleCopyClick}
  >
    {copied ? 'Teks Telah Disalin!' : 'Salin'}
  </div>
  </div>
  );
};

export default CopyButton;
