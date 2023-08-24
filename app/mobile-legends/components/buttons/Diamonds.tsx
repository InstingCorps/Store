
'use client';

  import React, { useState, useEffect } from 'react';
  import { Button, Card, Tabs } from 'flowbite-react';
  import { FaGem , FaUserPlus } from 'react-icons/fa';
  import { BsThreeDots } from 'react-icons/bs';
  import { AiOutlineCalendar } from 'react-icons/ai';
  import WeeklyMobileLegends from '@/data/mobile-legends/Weekly';
  import { HiOutlineArrowRight } from 'react-icons/hi';
  import PaymentMethod from '@/payment/paymentsMethod';


  interface Product {
    product_name: string;
    category: string;
    brand: string;
    buyer_sku_code: string;
    price: number;
    // ... informasi lainnya
  }
function ButtonPills({data}:any) {
  const [Price , setPrice] = useState('')
  const [showFooter, setShowFooter] = useState(false);
  const [showPayment , setShowPayment] = useState(false);

  useEffect(() => {
  const getPrice = sessionStorage.getItem('Price')

  if (getPrice) {
    setPrice(getPrice)
  }
  }, [Price]);

  const handleClick = (value: string , Price : any , skuCode: any) => () => {
    setPrice(Price)
    setShowFooter(true);
    console.log(skuCode);
    sessionStorage.setItem('product', value);
    sessionStorage.setItem('Price', Price);
  };

  const ShowPayments = () => () => {
    setShowPayment(!showPayment);
  }

  const Diamonds = () => {
    const buttonData = data
    return (buttonData).map((product:Product) => (
      <Card
      imgSrc='https://shorturl.at/jlqPY'
      className="hover:bg-slate-800 font-bold hover:text-white focus:bg-slate-800 focus:text-white text-black bg-white"
      key={product.product_name}
      color=""
      // value={product.buyer_sku_code}
      onClick={handleClick(product.product_name , product.price , product.buyer_sku_code)}
      >
        {product.product_name}
      </Card>
    ));
  };


  const WeeklyPass = () => {
    const buttonData = WeeklyMobileLegends

    return buttonData.map((button, index) => (
      <Card
      className="hover:bg-slate-800 font-bold hover:text-white focus:bg-slate-800 focus:text-white text-black bg-white"
      imgSrc="https://shorturl.at/jlqPY"
      key={index}
      color=""
      // value={button.value}
      onClick={handleClick(button.value , button.price , button.value)}
      >
        {button.label}
      </Card>
    ));
  };

  return (
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
          <div className="grid grid-cols-2 md:grid-cols-8 gap-2 text-center">
            {Diamonds()}
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

 { showFooter && 
 <Card className="fixed bottom-0 w-full text-center z-40 rounded-xl" horizontal>
        <div className="flex">
            <div>
              <div>jnjj.</div>
                <div>okk</div>
                <div className="font-bold">Rp.{Price}</div>
            </div>
          
        <Button className="ml-auto font-bold mt-4" pill color="success" size="md" href= "/ok"
        >Bayar Sekarang</Button>
        </div>
    </Card>}
  <Card className="font-bold ml-2 m-5">Langkah 3. Pilih Methode Pembayaran.</Card>
  <div className="flex justify-center items-center mt-10">
  <Button onClick={ShowPayments()} size="lg" gradientDuoTone="greenToBlue">
    {showPayment ? 'Sembunyikan Metode Pembayaran' : 'Pilih Metode Pembayaran'}  <HiOutlineArrowRight className="ml-2 h-5 w-5" /></Button>

  </div>
  {showPayment && <PaymentMethod />}
  </div>
  )
}

export default ButtonPills;


