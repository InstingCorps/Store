
'use client'

import { Button, Card } from 'flowbite-react';
import React, { useState, useEffect } from 'react';

const Valid = (): JSX.Element => {
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

  const link = `http://wa.me/6288221574494?text= anda yakin ingin membeli items:
  %0A Isi :"${Value}"
  %0A Seharga : ${PriceValue}`

  return <Card className='font-bold text-center text-black'>
    <div>Type Game : {TypeGame}</div>
    <div>User ID =  {UserID}</div>
    <div>Jumlah DM {Value}</div>
    <div>Harga Rp.{PriceValue}</div>
    <Button
    className='font-bold'
    href={link}
    >
    Bayar Sekarang!!
    </Button>
  </Card>;
};

export default Valid;


