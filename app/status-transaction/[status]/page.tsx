'use client'
import { URLvalidation } from "@/app/validation/URLvalidation";
import { DecryptAutomated } from "@/crypto/encrypt";
import { Button } from "flowbite-react";


const StatusTransaction = ({params} : {params: {status: string}}) => {
  const response = params.status
  const data = response.replace(/%3A/g, ':');
  const decrpyt = DecryptAutomated(data)

  // try {

  //   fetch('/api/webhooks', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({tes: "OK"})
  //     // Kirim data ke server jika diperlukan
  //     // body: JSON.stringify({ key: 'value' }),
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data); // Data dari server
  //       // Lakukan apa pun yang perlu Anda lakukan dengan data di sini
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
    // const eventSource = new EventSource('/api/webhooks'); // Ganti dengan URL SSE endpoint Anda
    // eventSource.onmessage = function (event) {
    //   const eventData = JSON.parse(event.data);
    //   // Lakukan apa pun yang perlu Anda lakukan dengan data yang diterima dari SSE di sini
    //   console.log(eventData);
    // };

    // eventSource.onerror = (error) => {
    //   console.error("Kesalahan koneksi", error)
    // }
    console.log(decrpyt);
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
