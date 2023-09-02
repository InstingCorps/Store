'use client'

import React, { useState, useEffect } from 'react';

interface CountdownProps {
  onHideCard: () => void; // Callback untuk menyembunyikan card
}

const Countdown: React.FC<CountdownProps> = ({ onHideCard }) => {
  const initialSeconds = parseInt(localStorage.getItem('countdownSeconds') || '300', 10); // Jumlah detik (5 menit = 300 detik)
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    // Fungsi untuk mengupdate countdown
    const updateCountdown = () => {
      setSeconds((prevSeconds) => {
        if (prevSeconds <= 1) {
          clearInterval(countdownInterval);
          localStorage.removeItem('countdownSeconds'); // Hapus nilai dari localStorage saat countdown selesai
          onHideCard()
        } else {
          localStorage.setItem('countdownSeconds', (prevSeconds - 1).toString()); // Simpan nilai di localStorage
        }
        return prevSeconds - 1;
      });
    };

    // Jalankan updateCountdown setiap 1 detik
    const countdownInterval = setInterval(updateCountdown, 1000);

    // Hentikan interval ketika komponen di-unmount
    return () => {
      clearInterval(countdownInterval);
      localStorage.removeItem('countdownSeconds'); // Hapus nilai dari localStorage saat komponen di-unmount
    };
  }, [onHideCard]);

  // Fungsi untuk mengubah detik menjadi format menit:detik
  const formatTime = (time: number) => {
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
          <p>Kami belum menerima pembayaran Anda. Harap selesaikan pembayaran di aplikasi Tersebut dalam Waktu Yang Ditentukan.</p>
          <p>Butuh bantuan? Kunjungi Pusat Bantuan kami. (error: 213)</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      <div className="flex gap-8 mt-10">
        <div className="text-white w-3/5 text-center font-bold">Silakan selesaikan pembayaran Anda dalam :</div>
        <div className="text-center text-white font-extrabold text-3xl mt-3">{formatTime(seconds)}</div>
      </div>
      {renderEndText()}
    </div>
  );
};

export default Countdown;

