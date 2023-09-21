'use client'
import { URLvalidation } from "@/app/validation/URLvalidation";
import { DecryptAutomated } from "@/encrypt/encrypt";
import axios from "axios";
import { Button, Card } from "flowbite-react";
import { useEffect, useState } from "react";


const StatusTransaction = ({params} : {params: {status: string}}) => {
  const [isError, setIsError] = useState(false);
  const [Data, setData] =useState<any>({});
  const response = params.status
  const data = response.replace(/%3A/g, ':');
  const decrpyt = DecryptAutomated(data)
  
  useEffect(() => {

    const pollingInterval = 5000; // Interval polling dalam milidetik (misalnya, 5 detik)
    const getTRX_ID = sessionStorage.getItem('transactionID');

    const poll = async () => {
      try {

        if (getTRX_ID) {
          const TRX_ID = getTRX_ID; // Gunakan nilai dari sessionStorage

          const URL = `/api/Transaction/${TRX_ID}`;
          const response = await axios.get(URL);
          const data = await response.data;

          if (data.transaction === null) {
            setIsError(true);
          } else {
            setIsError(false);
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

  }, []); 

  console.log(Data);
  
  try {

    const verify = decrpyt.verify
    if (URLvalidation(verify)) {
      return (
        <div>
        <Card>
          {Data.status}
          {Data.message}
        </Card>
        <div className="text-center font-bold text-white mt-20">OK PESANAN AKAN SEGERA DI PROSES!C</div>
        <Button href={"/"}>HOME</Button>
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
