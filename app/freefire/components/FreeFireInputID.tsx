

'use client';

import { Card , TextInput } from 'flowbite-react';
import { useEffect, useState } from 'react';

export default function InputID() {

//   const uid = 6651977708650
//   const link = `https://v1.apigames.id/merchant/M230331TXQU1280OR/cek-username/mobilelegend?user_id=${uid}&signature=6081e07e665cde449d954de3ed05e71b` 

    const [PlayerID , setID ] = useState<string[]>([]);
    // const [ZoneID , setZoneID ] = useState<string[]>([]);
    // const [ID , setID2] = useState('Tidak Di Temukan!')

    // useEffect(() => {
    //   fetch(link)
    //   .then((response) => response.json())
    //   .then((data) => setID2(data.data.username))
    // },[link])

    const SetPlayerID = (event :any) => {
        const { value } = event.target;
        sessionStorage.setItem('PlayerID', value)
        setID([value]); // Anda mengasumsikan menggunakan state hook React
      };

  // const Nickname = `Your NickName : ${ID}`
  return (
    <Card className='m-2 mb-10 md:ml-60 md:mr-60 bg-slate-800 text-white'>
      <div>Masukkan Detail Akun</div>
      <div>Masukkan User ID</div>
        <div className="grid  gap-5">

          <TextInput
            id="email1"
            placeholder="User ID"
            required
            pattern='[0-9]*'
            type="text"
            value={PlayerID}
            onChange={SetPlayerID}

          />
        </div>
        {/* <div>
          <div>Pastikan Nickname Anda Benar!!</div>
        <TextInput
        className="font-bold"
            id="email1"
            disabled
            placeholder={Nickname}
            required
            pattern='[0-9]*'
            type="text"
          />
        </div> */}
        <div className="text-right mr-5 font-extrabold font-sans text-xl">Your Server : ID</div>

        <div className='mt-3 text-center'>
        Untuk menemukan ID Anda, klik pada ikon karakter. User ID tercantum di bawah nama karakter Anda. Contoh: `5363266446`.
        </div>
      
    </Card>
  )
}


