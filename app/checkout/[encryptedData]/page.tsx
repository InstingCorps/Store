'use client'
import Checkout from "@/app/checkout/checkouts/Checkout";
import { URLvalidation } from "@/components/validation/URLvalidation";
import ComponentFooter from "@/components/footer/footer";
import DukunganPelanggan from "@/Contact/contactUs";
import { DecryptAutomated } from "@/encrypt/encrypt";
import axios from "axios";
import { Button } from "flowbite-react";
import React, {useState , useEffect} from 'react'
import Loading from "@/app/loading";


const EncryptedData = ({params} : {params: {encryptedData: string}}) => {
    const [TypeGame , setTypeGame] = useState('')
    const [isError, setIsError] = useState(false); // Tambahkan state untuk menangani kesalahan


    useEffect(() => {
      if (typeof window !== 'undefined') {
        const getTypeGame = sessionStorage.getItem('TypeGame');
        const getTRX_ID = sessionStorage.getItem('transactionID');
        
        if (getTypeGame) {
          setTypeGame(getTypeGame);
          
          // Pastikan TRX_ID memiliki nilai yang valid sebelum membuat URL
          const TRX_ID = getTRX_ID;
          
          const fetchData = async () => {
            try {
              const URL = `/api/Transaction/${TRX_ID}`;
              const response = await axios.get(URL);
              const data = await response.data;

              if (data.transaction === null) {
                setIsError(true);
                return; // Keluar dari fungsi jika respons adalah null
              }

            } catch (error) {
              console.error('Kesalahan:', error);
              setIsError(true); // Setel isError menjadi true jika respons gagal
            }
          };
    
          fetchData(); // Panggil fetchData di sini untuk menjalankan permintaan HTTP
        }
      }
    }, []);
    
    const response = params.encryptedData
  const data = response.replace(/%3A/g, ':');
  const decrpyt = DecryptAutomated(data)

  if (isError) {
    // Tampilkan elemen JSX ini jika respons gagal
    return (
      <div>
        <div className="text-center font-bold text-white mt-20">AXIOS VALIDASI GAGAL</div>
        <div className="text-center font-bold text-white mt-20">SESSION TELAH BERAKHIR SILAHKAN BUAT TRANSAKSI BARU</div>
      </div>
    );
  }

  try {
    const verify = decrpyt.verify
    if (URLvalidation(verify)) {
      if (TypeGame !== "") {
        return (
          <div>
              <Checkout />
              <DukunganPelanggan />
              <ComponentFooter />
          </div>
      )
      } else {
        // if (typeof window !== 'undefined') {
        //   setTimeout(() => {
        //     if (TypeGame == "" || null) {
        //       window.location.href = '/';
        //     }
        //   }, 10000);
        // }
        return (
          <>
          <Loading />
          </>

        )
      }
    } else {
        return (
            <div className="text-center font-bold text-white mt-20">VALIDASI GAGAL</div>
        )
        
    }

  } catch (error) {
    return (
        <div className="text-center font-bold text-white mt-20">ERROR URL TIDAK VALID</div>
    )
  }


}

export default EncryptedData
