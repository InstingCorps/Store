
'use client'

import Development from '@/app/Text/Development';
import { OrderDigiflazz } from '@/app/services/orders/ordersDigiflazz';
import Countdown from '@/components/CountDown/Countdown';
import ComponentNavbar from '@/components/Navbar/Navbar';
import { Button, Card } from 'flowbite-react';
import React, { useState, useEffect, SyntheticEvent } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

interface CardProps {
  isVisible: boolean; // Properti untuk mengontrol visibilitas card
}



const CheckoutML = () => {
  const [isCardVisible, setIsCardVisible] = useState(true);

  const [TypeGame , setTypeGame] = useState('')
  const [Value, setValue] = useState('');
  const [PriceValue, setPriceValue] = useState('');
  const [Orders, SetOrders] = useState('');
  const [UserID , setUserID] = useState('')
  const [ZoneID , setZoneID] = useState('')
  
  const handleHideCard = () => {
    setIsCardVisible(false); // Panggil ini ketika countdown selesai untuk menyembunyikan card
  };

  const RequestOrder = async (e:SyntheticEvent) => {
    e.preventDefault()
    const uuidRef = uuidv4();
    // Membuat waktu saat ini dalam format tertentu
    const currentTime = moment().format('YYYYMMDDHHmmss');
    // Menggabungkan UUID dan waktu saat ini untuk membuat ref_id
    const ref = `${uuidRef}_${currentTime}`;

    await axios.post('/api/orderWITHemail' , {
      orderid: ref,
      id: UserID,
      zodeid: ZoneID,
      typegame: TypeGame,

    })
    };

  useEffect(() => {
    const getTypeGame = sessionStorage.getItem('TypeGame')
    const getValue = sessionStorage.getItem('product');
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

  const Cards: React.FC<CardProps>  = ({ isVisible }) => {
    return (
      <div>
        {isVisible && (
      <Card className='font-bold text-center text-black mt-10'>
      <div>Type Game : {TypeGame}</div>
      <div>User ID =  {UserID}</div>
      <div>Zone ID = &#40; {ZoneID} &#41;</div>
      <div>Jumlah DM : {Value}</div>
      <div>Harga Rp.{PriceValue}</div>
      <Button
      className='font-bold'
      // href={link}
      onClick={RequestOrder}
      >
      Bayar Sekarang!!
      </Button>
    </Card>
        )}
        </div>
    )
  }

  return (
    <div>
      
      <ComponentNavbar />
      <Development />
      <Countdown onHideCard={handleHideCard} />
      <Cards isVisible={isCardVisible} />

    </div>
  ) ;
};

export default CheckoutML;


