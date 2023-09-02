
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

interface CheckoutData {
  product_name: string;
  category: string;
  brand: string;
  seller_name: string;
  buyer_sku_code: string;
  price: string;
  Orders: string;
  UserID: string;
  ZoneID: string;
  seller_price: string;
}



const CheckoutML = () => {
  const [isCardVisible, setIsCardVisible] = useState(true);

  const [checkoutData, setCheckoutData] = useState<CheckoutData>({
    brand: '',
    product_name: '',
    category: '',
    price: '',
    seller_name: '',
    buyer_sku_code: '',
    Orders: '',
    UserID: '',
    ZoneID: '',
    seller_price: '',
  });

  
  const handleHideCard = () => {
    setIsCardVisible(false); // Panggil ini ketika countdown selesai untuk menyembunyikan card
  };


  useEffect(() => {
    if (typeof window !== 'undefined') {
      
      const storedData: CheckoutData = {
        product_name: sessionStorage.getItem('product_name') || '',
        category: sessionStorage.getItem('category') || '',
        brand: sessionStorage.getItem('TypeGame') || '',
        price: sessionStorage.getItem('Price') || '',
        seller_name: sessionStorage.getItem('seller_name') || '',
        buyer_sku_code: sessionStorage.getItem('buyer_sku_code') || '',
        Orders: sessionStorage.getItem('Orders') || '',
        UserID: sessionStorage.getItem('PlayerID') || '',
        ZoneID: sessionStorage.getItem('ZoneID') || '',
        seller_price: sessionStorage.getItem('seller_price') || '',
      };
  
      setCheckoutData((prevData) => ({ ...prevData, ...storedData }));
    }
  }, []);



  const RequestOrder = async (e:SyntheticEvent) => {
    e.preventDefault()
    const uuidRef = uuidv4();
    // Membuat waktu saat ini dalam format tertentu
    const currentTime = moment().format('YYYYMMDDHHmmss');
    // Menggabungkan UUID dan waktu saat ini untuk membuat ref_id
    const ref = `${uuidRef}_${currentTime}`;

    await axios.post('/api/orderWITHemail' , {
      id: checkoutData.UserID,
      zoneid: checkoutData.ZoneID,
      product_name: checkoutData.product_name,
      category: checkoutData.category,
      brand: checkoutData.brand,
      price: checkoutData.price,
      seller_name: checkoutData.seller_name,
      buyer_sku_code: checkoutData.buyer_sku_code,
      seller_price: checkoutData.seller_price,

    })
    };

  const link = `http://wa.me/6288221574494?text=RL09BvC %0A %0A *ROZISTORE* %0A Hallo Kak Saya ingin membeli items sebagai berikut:
  %0A   %0A
  %0A *Type Game :${checkoutData.brand}*
  %0A *User ID :${checkoutData.UserID}*
  %0A *ZoneID : ( ${checkoutData.ZoneID} )*
  %0A *jumlah :"${checkoutData.product_name}"*
  %0A *Seharga : ${checkoutData.price}*
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
      <div>Type Game : {checkoutData.brand}</div>
      <div>User ID =  {checkoutData.UserID}</div>
      <div>Zone ID = &#40; {checkoutData.ZoneID} &#41;</div>
      <div>Jumlah DM : {checkoutData.product_name}</div>
      <div>Harga Rp.{checkoutData.price}</div>
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


