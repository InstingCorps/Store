'use client'




import { Button, Card } from 'flowbite-react';
import React from 'react';

const BuyNow = () => {
    const Link = "/checkout"
  return (
    <Card className="fixed bottom-0 w-full text-center z-40 rounded-xl" horizontal>
        <div className="flex">
            <div>
                <div>2424242 diamonds</div>
                <div>Pembayaran : OVO</div>
                <div>Harga Rp.10_10323</div>
            </div>
          

        <Button className="ml-auto font-bold" pill color="success" size="md" href={Link}
        >Bayar Sekarang</Button>
        </div>
    </Card>
  );
};

export default BuyNow;