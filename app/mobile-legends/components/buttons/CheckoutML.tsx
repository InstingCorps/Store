
'use client'

import Development from '@/app/Text/Development';
import Countdown from '@/components/CountDown/Countdown';
import ComponentNavbar from '@/components/Navbar/Navbar';
import { Button, Card } from 'flowbite-react';
import React, { useState, useEffect } from 'react';

const CheckoutML = (): JSX.Element => {
  const [TypeGame , setTypeGame] = useState('')
  const [Value, setValue] = useState('');
  const [PriceValue, setPriceValue] = useState('');
  const [UserID , setUserID] = useState('')
  const [ZoneID , setZoneID] = useState('')

  useEffect(() => {
    const getTypeGame = sessionStorage.getItem('TypeGame')
    const getValue = sessionStorage.getItem('buttonValues');
    const getPrice = sessionStorage.getItem('Price');
    const getUserID = sessionStorage.getItem('PlayerID')
    const getZoneID = sessionStorage.getItem('ZoneID')

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

    if (getZoneID) {
      setZoneID(getZoneID)
    }


  }, []);

  const link = `http://wa.me/6288221574494?text=RL09BvC %0A %0A *ROZISTORE* %0A Hallo Kak Saya ingin membeli items sebagai berikut:
  %0A   %0A
  %0A *Type Game :${TypeGame}*
  %0A *User ID :${UserID}*
  %0A *ZoneID : ( ${ZoneID} )*
  %0A *jumlah :"${Value}"*
  %0A *Seharga : ${PriceValue}*
  %0A
  %0A     *!!  MOHON DI BACA  !!*
  %0A
  %0A  !! ADMIN AKAN MENGIRIM DIAMOND MAXIMAL DALAM WAKTU 1 JAM , JIKA MELEBIHI WAKTU TERSEBUT UANG GARANSI KEMBALI 100 PERSEN !!
  %0A  %0A  !! JIKA KAMI TELAH MENGIRIM ITEMS NYA MAKA KAMI AKAN MENGIRIM NOTIFIKASI KE NOMER INI !!
  %0A
  %0A !! PASTIKAN ANDA MENGECEK ID ANDA BENAR! DAN JANGAN SESEKALI MENGGANTI HARGA ATAU JUMLAH DIAMOND DI ATAS !!
  %0A
  %0A   %0A _*SYARAT DAN KETENTUAN BERLAKU*_`

  return(
    <div>
      <ComponentNavbar />
      <Development />
      <Countdown />
  <Card className='font-bold text-center text-black mt-10'>
    <div>Type Game : {TypeGame}</div>
    <div>User ID =  {UserID}</div>
    <div>Zone ID = &#40; {ZoneID} &#41;</div>
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

export default CheckoutML;


