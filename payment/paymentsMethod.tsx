'use client'

import { Card } from "flowbite-react";
import { useState , useEffect } from "react";
import React from 'react';



const PaymentMethod = (): JSX.Element => {
  const getPrice = sessionStorage.getItem('Price');

    
    const handleClick = (value: string) => () => {
        sessionStorage.setItem('Payment', value);
        console.log(value);
        
      };
    
    // const Payments = (persen : number) => {

    //     let toString
    //     const getPrice = sessionStorage.getItem('Price')
        
    //     if (getPrice !== null) {
    //         toString = parseFloat(getPrice);
    //       } else {
    //         toString = 0
    //         console.log('Nilai tidak tersedia');
    //       }
        
    // const Price = toString
    // const Persen = persen;
    // const TotalPersen = (Price * Persen) / 100;

    // const result = Price + TotalPersen
    // const resultAsString = result.toString();

    
    // setFinalResult(result);
    // };

    return (
        <Card className="bg-gray-800 mt-10">
        <Card className="">
            <div>Payment Method Masih Dalam Proses</div>
           
        </Card>
        <Card className="mt-2">
    
            <div className="text-center font-medium">untuk sementara waktu semua pembelian kamu akan di arahkan ke whatsapp admin!</div>
        
        </Card>
        <Card className="mt-5"onClick={handleClick("WhatsApp")}>
            <div className="flex">
            <img src="https://www.citypng.com/public/uploads/preview/-41601346950a0kcvtszk3.png" alt="" style={{ width: '60%' }} />
                <div className="ml-4">
                    <div className="ml-4 font-sans font-bold text-gray-700">Harga</div>
                    <div className="font-semibold">Rp.{}</div>
                </div>
            </div>
            
        </Card>
        <Card className="mt-5"onClick={handleClick("QRIS")}>
            <div className="flex">
            <img src="https://cdn1.codashop.com/S/content/common/images/mno/QRIS_ID_CHNL_LOGO.png" alt="" style={{ width: '60%' }} />
                <div className="mt-2 font-semibold">Rp.{}</div>
            </div>
            
        </Card>
        <Card className="mt-5">
            <div className="flex">
            <img src="https://cdn1.codashop.com/S/content/common/images/mno/GO_PAY_CHNL_LOGO.png" alt="Gopay" style={{ width: '50%' }} />
                <div>tes</div>
            </div>
            
        </Card>
        <Card className="mt-5">
            <div className="flex">

            <img src="https://cdn1.codashop.com/S/content/common/images/mno/DANA_CHNL_LOGO.png" alt="Gopay" style={{ width: '50%' }} />
                <div>tes</div>
            </div>
            
        </Card>
        <Card className="mt-5">
            <div className="flex">

            <img src="https://cdn1.codashop.com/S/content/common/images/mno/OVO_CHNL_LOGO.png" alt="Gopay" style={{ width: '50%' }} />
                <div>tes</div>
            </div>
            
        </Card>
        <Card className="mt-5">
            <div className="flex">

            <img src="https://cdn1.codashop.com/S/content/common/images/mno/SHOPEE_PAY_CHNL_LOGO.png" alt="Gopay" style={{ width: '50%' }} />
                <div>tes</div>
            </div>
            
        </Card>

        </Card>
    )
}

export default PaymentMethod;