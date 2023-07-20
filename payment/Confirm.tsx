'use client'

import { Button, Card } from 'flowbite-react';
import React from 'react';

const BuyNow = (): JSX.Element => {
  
  const getPrice = sessionStorage.getItem('Price');
  const getValue = sessionStorage.getItem('buttonValues');
  const getPayment = sessionStorage.getItem('Payment');

  let Payment = getPayment !== null ? getPayment : 'Pilih Pembayaran';

    const Link = "/checkout"
  return (
    <Card className="fixed bottom-0 w-full text-center z-40 rounded-xl" horizontal>
        <div className="flex">
            <div>
              <div>{getValue}.</div>
                <div>{Payment}</div>
                <div className="font-bold">Rp.{getPrice}</div>
            </div>
          
        <Button className="ml-auto font-bold mt-4" pill color="success" size="md" href={Link}
        >Bayar Sekarang</Button>
        </div>
    </Card>
  );
};

export default BuyNow;