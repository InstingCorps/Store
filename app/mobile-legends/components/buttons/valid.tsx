
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

  return <div className='font-bold text-center text-white'>
    <div>Jumlah DM {Value}</div>
    <div>Harga Rp.{PriceValue}</div>
  </div>;
};

export default Valid;


