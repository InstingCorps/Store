

'use client';

import { Card , TextInput } from 'flowbite-react';
import { useState } from 'react';

export default function InputID() {

    const [PlayerID , setID ] = useState<string[]>([]);
    const [ZoneID , setZoneID ] = useState<string[]>([]);

    const SetPlayerID = (event :any) => {
        const { value } = event.target;
        sessionStorage.setItem('PlayerID', value)
        setID([value]); // Anda mengasumsikan menggunakan state hook React
      };

    const SetPlayerZoneID = (event :any) => {
        const { value } = event.target;
        sessionStorage.setItem('ZoneID', value)
        setZoneID([value]);
    };
    //   useEffect(() => {
    //     const a = sessionStorage.getItem('ZoneID')

    //     console.log(a,"session");
    //   },[PlayerID])

  const Nickname = `Your NickName : Masih Dalam Proses `
  return (
    <Card className='m-2 mb-10 md:ml-60 md:mr-60 bg-slate-800 text-white'>
      <div>Masukkan Detail Akun</div>
      <div>Masukkan User ID</div>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-5">

          <TextInput
            id="email1"
            placeholder="User ID"
            required
            pattern='[0-9]*'
            type="text"
            value={PlayerID}
            onChange={SetPlayerID}

          />
          <TextInput
            id="email1"
            placeholder="    ( Zone ID )"
            required
            pattern='[0-9]*'
            type="text"
            value={ZoneID}
            onChange={SetPlayerZoneID}
          />
        </div>
        <div>
        <TextInput
            id="email1"
            disabled
            placeholder={Nickname}
            required
            pattern='[0-9]*'
            type="text"
          />
        </div>
        <div className="text-right mr-5 font-extrabold font-sans text-xl">Your Server : ID</div>

        <div className='mt-3 text-center'>
        Untuk mengetahui User ID Anda, silakan klik menu profile dibagian kiri atas pada menu utama game. User ID akan terlihat dibagian bawah Nama Karakter Game Anda. Silakan masukkan User ID Anda untuk menyelesaikan transaksi. Contoh : 12345678(1234).
        </div>
      
    </Card>
  )
}


