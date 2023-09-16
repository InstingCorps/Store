'use client'
import { URLvalidation } from "@/app/validation/URLvalidation";
import { DecryptAutomated } from "@/encrypt/encrypt";
import axios from "axios";
import { Button } from "flowbite-react";
import { useEffect } from 'react';


const StatusTransaction = ({params} : {params: {status: string}}) => {
  const response = params.status
  const data = response.replace(/%3A/g, ':');
  const decrpyt = DecryptAutomated(data)

  useEffect(() => {
        // Lakukan permintaan GET menggunakan Axios dalam useEffect
        axios.get('/api/webhooks')
        .then((response) => {
            console.log(response.data);
            console.log(response.data.data);
            console.log(response.data.message);
        })
        .catch((error) => {
          console.error("Terjadi kesalahan dalam permintaan:", error);
          window.location.reload()
        });
        //ok

    
    // const eventSource = new EventSource('/api/webhooks');

    // eventSource.onmessage = (event) => {
    //   const message = event.data;
    //   console.log('Pesan dari server:', message);
    //   // Lakukan sesuatu dengan pesan yang diterima dari server
    // };

    // eventSource.onerror = (error) => {
    //   console.error('Kesalahan SSE:', error);
    // };

    // return () => {
    //   eventSource.close(); // Tutup koneksi SSE saat komponen unmount
    // };
  }, []);


    // console.log(decrpyt);
    const verify = decrpyt.verify
    
    if (URLvalidation(verify)) {
      return (
        <div>
        <div className="text-center font-bold text-white mt-20">OK PESANAN AKAN SEGERA DI PROSES!</div>
        <Button href={"/"}>HOME</Button>
        </div>

      )
    } else {
      return (
          <div className="text-center font-bold text-white mt-20">VALIDASI GAGAL</div>
      )
  }

  
}
//   } catch (error) {
//     return (
//       <div className="text-center font-bold text-white mt-20">ERROR URL TIDAK VALID</div>
//   )
//   }
// }

export default StatusTransaction
