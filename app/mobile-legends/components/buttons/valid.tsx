
'use client'

import React, { useState, useEffect } from 'react';

const Valid = (): JSX.Element => {
  const [Value, setValue] = useState('');
  const [PriceValue, setPriceValue] = useState('');

  useEffect(() => {
    const getValue = sessionStorage.getItem('buttonValues');
    const getPrice = sessionStorage.getItem('Price');

    if (getValue) {
      setValue(getValue);
    }

    if (getPrice) {
      setPriceValue(getPrice);
    }


  }, []);

  const link = `http://wa.me/6288221574494?text= anda yakin ingin membeli items:
  %0A Isi :"${Value}"
  %0A Seharga : ${PriceValue}`

  return <div className='font-bold text-center text-white'>
    <div>Jumlah DM {Value}</div>
    <div>Harga Rp.{PriceValue}</div>
    <a href={link} className='font-bold text-orange-400'>Bayar</a>
  </div>;
};

export default Valid;


