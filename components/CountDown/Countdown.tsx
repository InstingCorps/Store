'use client'

import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const [seconds, setSeconds] = useState(600); // Jumlah detik (5 menit = 300 detik)

  useEffect(() => {
    // Fungsi untuk mengupdate countdown
    const updateCountdown = () => {
      setSeconds((prevSeconds) => {
        if (prevSeconds <= 1) {
          clearInterval(countdownInterval);
        }
        return prevSeconds - 1;
      });
    };

    // Jalankan updateCountdown setiap 1 detik
    const countdownInterval = setInterval(updateCountdown, 1000);

    // Hentikan interval ketika komponen di-unmount
    return () => clearInterval(countdownInterval);
  }, []);

  // Fungsi untuk mengubah detik menjadi format menit:detik
  const formatTime = (time:any) => {
    const minutes = Math.floor(time / 60);
    const remainingSeconds = time % 60;

    const displayMinutes = String(minutes).padStart(2, '0');
    const displaySeconds = String(remainingSeconds).padStart(2, '0');

    return `${displayMinutes}:${displaySeconds}`;
  };

  // Fungsi untuk menampilkan teks setelah countdown selesai
  const renderEndText = () => {
    if (seconds <= 0) {
      return (
        <div className="text-center font-bold text-white mt-10">
          <p>Maaf, sesi Anda telah berakhir.</p>
          <p>Kami belum menerima pembayaran Anda. Harap selesaikan pembayaran di aplikasi Tersebut dalam Waktu Yang Di tentukan.</p>
          <p>Butuh bantuan? Kunjungi Pusat Bantuan kami. (error:213)</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div>
        {/* <div>Dengan melanjutkan, artinya Anda setuju dengan Syarat dan Ketentuan dan juga kebijakan privasi kami.</div> */}
      <div className="flex gap-8 mt-10">
        <div className="text-white w-3/5 text-center font-bold">Silakan selesaikan pembayaran Anda dalam : </div>
        <div className="text-center text-white font-extrabold text-3xl mt-3">{formatTime(seconds)}</div>
       </div>
      {renderEndText()}
    </div>
  );
};

export default Countdown;
