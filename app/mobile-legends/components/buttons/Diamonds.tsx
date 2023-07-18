

'use client';

  import React, { useState, useEffect } from 'react';
  import { Button, Card, Tabs } from 'flowbite-react';
  import DataMobileLegends from '@/data/mobile-legends/values';
  import { FaGem , FaUserPlus } from 'react-icons/fa';
  import { BsThreeDots } from 'react-icons/bs';
  import { AiOutlineCalendar } from 'react-icons/ai';
  import WeeklyMobileLegends from '@/data/mobile-legends/Weekly';
  import BuyNow from '@/payment/Confirm';
import Test from './tes';
import PaymentMethod from '@/payment/paymentsMethod';

function ButtonPills(): JSX.Element {
  const [buttonValues, setButtonValues] = useState<string[]>([]);
  const [Price , setPrice] = useState('')
  const [showFooter, setShowFooter] = useState(false);
  const [showPayment , setShowPayment] = useState(false);


  useEffect(() => {
  const getPrice = sessionStorage.getItem('Price')

  if (getPrice) {
    setPrice(getPrice)
  }
  }, [buttonValues]);

  const handleClick = (value: string , Price : any) => () => {
    setButtonValues([value]);
    setShowFooter(true);
    sessionStorage.setItem('buttonValues', value);
    sessionStorage.setItem('Price', Price);
    // sessionStorage.setItem('Payment', "Pilih Pembayaran");

    Test(2)
  };  



  const renderButtons = () => {
    const buttonData = DataMobileLegends

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


  const WeeklyPass = () => {
    const buttonData = WeeklyMobileLegends

    return buttonData.map((button, index) => (
      <Card
      className="hover:bg-slate-800 font-bold hover:text-white focus:bg-slate-800 focus:text-white text-black bg-white"
      imgSrc="data:image/jpeg;base64,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"
      key={index}
      color=""
      // value={button.value}
      onClick={handleClick(button.value , button.price)}
      >
        {button.label}
      </Card>
    ));
  };

  return( 
    <div>


  <Card className='m-2 rounded-3xl bg-gray-800 text-white'>
    <div className='text-center font-extrabold'>Pilih Nominal Topup</div>
    <div className="font-sans text-xl font-bold text-right mr-5">Harga : Rp.{Price}</div>
    <Tabs.Group className="m-0 gap-1"
      aria-label="Tabs with icons"
      style="underline"
    >
        <Tabs.Item
        active
        icon={FaGem}
        title="Diamonds"
      >
          <div className="grid grid-cols-3 md:grid-cols-8 gap-2">
            {renderButtons()}
          </div>
      </Tabs.Item>
      <Tabs.Item
        icon={FaUserPlus}
        title="WeeklyPass"
      >
         <div className="grid grid-cols-2 md:grid-cols-8 gap-2">
            {WeeklyPass()}
          </div>
      </Tabs.Item>
      <Tabs.Item
        icon={AiOutlineCalendar}
        title="Event"
      >
      <div>COMING SOON...</div>
      </Tabs.Item>
      <Tabs.Item
        icon={BsThreeDots}
        title="Items Lainnya"
      >
        <div>COMING SOON...</div>
      </Tabs.Item>
    </Tabs.Group>

    <div className="text-center font-bold">!!  HARAP DI BACA  !!</div>
    <div className="text-center font-bold">JIKA JUMLAH DI ATAS TIDAK SESUAI DENGAN PILIHAN ANDA. SILAHKAN CONTACT ADMIN UNTUK MENAMBAHKAN LAGI!</div>
  </Card>

  {showFooter && <BuyNow />}
  <Button>Lihat Metode Pembayaran</Button>
  {<PaymentMethod />}
  </div>
  )
}

export default ButtonPills;


