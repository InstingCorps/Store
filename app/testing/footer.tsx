'use client'




import { Button, Card } from 'flowbite-react';
import React from 'react';

const Footer = () => {
  return (
    <Card className="fixed bottom-0 w-full text-center z-40 rounded-xl" horizontal>
        <div className="flex">
            <div className="">hallo</div>
            <div>testkllj</div>

        <Button className="ml-auto font-bold" pill color="success" size="lg"
        >Bayar Sekarang</Button>
        </div>
    </Card>
  );
};

export default Footer;