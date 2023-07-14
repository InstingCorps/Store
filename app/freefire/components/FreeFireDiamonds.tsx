

'use client';

  import React, { useState, useEffect } from 'react';
  import { Button, Card } from 'flowbite-react';
import DataFreeFire from '@/data/freefire/values/values';

function Diamonds(): JSX.Element {
  const [buttonValues, setButtonValues] = useState<string[]>([]);
  const [Price , setPrice] = useState('')

  useEffect(() => {
  const getPrice = sessionStorage.getItem('Price')

  if (getPrice) {
    setPrice(getPrice)
  }
  }, [buttonValues]);

  const handleClick = (value: string , Price : any) => () => {
    setButtonValues([value]);
    sessionStorage.setItem('buttonValues', value);
    sessionStorage.setItem('Price', Price);

  };



  const renderButtons = () => {
    const buttonData = DataFreeFire

    return buttonData.map((button, index) => (
      <Button
      className="hover:bg-slate-800 font-bold focus:bg-slate-800 bg-unipin"
      key={index}
      color=""
      pill
      value={button.value}
      onClick={handleClick(button.value , button.price)}
      >
        {button.label}
      </Button>
    ));
  };

  return( 
  <Card className='m-2 rounded-3xl bg-gray-800 text-white'>
    <div className='text-center font-extrabold'>Pilih Nominal Topup</div>
    <div className="font-sans text-xl font-bold text-right mr-5">Harga : Rp.{Price}</div>
    <div className='text-center font-extrabold'>SEGERA DI TAMBAHKAN!</div>
  <div className="grid grid-cols-3 md:grid-cols-8 gap-2">
    {renderButtons()}
  </div>
    <div className="text-center font-bold">!!  HARAP DI BACA  !!</div>
    <div className="text-center font-bold">JIKA JUMLAH DI ATAS TIDAK SESUAI DENGAN PILIHAN ANDA. SILAHKAN CONTACT ADMIN UNTUK MENAMBAHKAN LAGI!</div>
  </Card>
  )
}

export default Diamonds;


