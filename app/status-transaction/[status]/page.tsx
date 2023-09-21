'use client'
import Development from "@/components/Text/Development";
import { URLvalidation } from "@/components/validation/URLvalidation";
import ComponentNavbar from "@/components/Navbar/Navbar";
import { DecryptAutomated } from "@/encrypt/encrypt";
import axios from "axios";
import { Button, Card } from "flowbite-react";
import { useEffect, useState } from "react";
import CopyButton from "@/components/Text/copyText";


const StatusTransaction = ({params} : {params: {status: string}}) => {
  const [isError, setIsError] = useState(false);
  const [Data, setData] =useState<any>({});


  const response = params.status
  const data = response.replace(/%3A/g, ':');
  const decrpyt = DecryptAutomated(data)

  useEffect(() => {

    const pollingInterval = 7000; // Interval polling dalam milidetik (misalnya, 5 detik)
    const getTRX_ID = sessionStorage.getItem('transactionID');
    let isPolling = true; // Gunakan ini untuk mengendalikan apakah polling harus terus berlanjut

    const poll = async () => {

      try {

        if (getTRX_ID && isPolling) {

          const TRX_ID = getTRX_ID; // Gunakan nilai dari sessionStorage
          const URL = `/api/Transaction/${TRX_ID}`;
          const response = await axios.get(URL);
          const data = await response.data;

          if (data.transaction === null) {
            setIsError(true);
            isPolling = false
          } else if (data.transaction.status === 'Sukses' || data.transaction.status === 'Gagal') {
            isPolling = false
            setData(data.transaction);
          } else {
            setData(data.transaction);
          }
        }
      } catch (error) {
        console.error('Kesalahan:', error);
        setIsError(true);
      } finally {
        setTimeout(poll, pollingInterval); // Lanjutkan polling setelah interval waktu tertentu
      }
    };

    poll(); // Mulai polling pertama kali

      // Membersihkan polling jika komponen unmount
  return () => {
    isPolling = false;
  };
  }, []); 

  console.log(Data);
  
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
      return (
        <div>
      <ComponentNavbar />
      <Development />
      <Card className="text-center rounded-3xl mt-5">
        <div className="font-extrabold font-sans text-xl">Transaction ID:</div>
        <div className="font-extrabold">{Data.transaction_id}<CopyButton textToCopy={Data.transaction_id} /></div>
        <div className="text-xs">Transaction ID adalah identifikasi unik yang digunakan untuk melacak dan memverifikasi transaksi salin kode ini untuk mengecek transaksi anda suatu saat</div>
        
      </Card>

      <Card className="mt-5 rounded-xl">
        <div className="font-extrabold">Waktu Pembelian: <div className="border-4 border-green-500 rounded-2xl text-center p-2">{Data.orderTime}</div></div>
      </Card>
        <div className="text-center font-bold text-white mt-20">OK PESANAN AKAN SEGERA DI PROSESCaC</div>
        <div>
        <div>Kembali Ke Home!</div>
        <Button href={"/"}>HOME</Button>
        </div>
        </div>

      )
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

export default StatusTransaction
