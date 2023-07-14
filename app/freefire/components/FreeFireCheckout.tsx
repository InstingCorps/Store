
'use client'

import Development from '@/app/Text/Development';
import ComponentNavbar from '@/components/Navbar/Navbar';
import { Button, Card } from 'flowbite-react';
import React, { useState, useEffect } from 'react';

const CheckoutFF = (): JSX.Element => {
  const [TypeGame , setTypeGame] = useState('')
  const [Value, setValue] = useState('');
  const [PriceValue, setPriceValue] = useState('');
  const [UserID , setUserID] = useState('')

  useEffect(() => {
    const getTypeGame = sessionStorage.getItem('TypeGame')
    const getValue = sessionStorage.getItem('buttonValues');
    const getPrice = sessionStorage.getItem('Price');
    const getUserID = sessionStorage.getItem('PlayerID')

    if (getTypeGame) {
      setTypeGame(getTypeGame)
      
    }
    if (getValue) {
      setValue(getValue);
    }

    if (getPrice) {
      setPriceValue(getPrice);
    }

    if (getUserID) {
      setUserID(getUserID)
    }



  }, []);

  const link = `http://wa.me/6288221574494?text= Hallo Admin Saya ingin membeli items sebagai berikut:
  %0A   %0A
  %0A Type Game :${TypeGame}
  %0A User ID :${UserID}
  %0A jumlah :"${Value}"
  %0A Seharga : ${PriceValue}
  %0A
  %0A     !!  MOHON DI BACA  !!
  %0A
  %0A  !! ADMIN AKAN MENGIRIM DIAMOND MAXIMAL DALAM WAKTU 1 JAM , JIKA MELEBIHI WAKTU TERSEBUT UANG GARANSI KEMBALI 100 PERSEN !!
  %0A  %0A  !! JIKA KAMI TELAH MENGIRIM ITEMS NYA MAKA KAMI AKAN MENGIRIM NOTIFIKASI KE NOMER INI !!
  %0A
  %0A !! PASTIKAN ANDA MENGECEK ID ANDA BENAR! DAN JANGAN SESEKALI MENGGANTI HARGA ATAU JUMLAH DIAMOND DI ATAS !!
  %0A
  %0A   %0A SYARAT DAN KETENTUAN BERLAKU`

  return(
    <div>
        <ComponentNavbar />
        <Development />
  <Card className='font-bold text-center text-black mt-10'>
    <div>Type Game : {TypeGame}</div>
    <div>User ID =  {UserID}</div>
    <div>Jumlah DM : {Value}</div>
    <div>Harga Rp.{PriceValue}</div>
    <Button
    className='font-bold'
    href={link}
    >
    Bayar Sekarang!!
    </Button>
  </Card>
    </div>
  ) ;
};

export default CheckoutFF;


