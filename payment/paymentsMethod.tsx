'use client'

import { Card } from "flowbite-react";
import { useState , useEffect } from "react";

// function Payments(persen : number) {

//     const Price = 180000
//     const Persen = persen;
//     const TotalPersen = (Price * Persen) / 100;

//     const result = Price + TotalPersen
//     console.log(result);
// }

export default function PaymentMethod() {
    const [finalResult, setFinalResult] = useState<number>(0);

    const Payments = (persen : number) => {

        let toString
       
        const getPrice = sessionStorage.getItem('Price')
        
        if (getPrice !== null) {
            toString = parseFloat(getPrice);
          } else {
            toString = 0
            console.log('Nilai tidak tersedia');
          }
        
    const Price = toString
    const Persen = persen;
    const TotalPersen = (Price * Persen) / 100;

    const result = Price + TotalPersen
    const resultAsString = result.toString();

    console.log(resultAsString);
    sessionStorage.setItem('FinalPrice' , resultAsString)
    
    setFinalResult(result);
    };

    return(
        <Card className="bg-gray-800">
        <Card className="">
            <div>Payment Method Masih Dalam Proses</div>
           
        </Card>
        <Card className="mt-2">
    
            <div className="text-center font-medium">untuk sementara waktu semua pembelian kamu akan di arahkan ke whatsapp admin!</div>
        
        </Card>
        <Card className="mt-5" onClick={() => Payments(1.5)}>
            <div className="flex">

            <img src="https://cdn1.codashop.com/S/content/common/images/mno/QRIS_ID_CHNL_LOGO.png" alt="" style={{ width: '60%' }} />
                <div>Rp.{finalResult !== null ? finalResult : 'Nilai tidak tersedia'}</div>
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