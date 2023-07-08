

'use client';

import { Card,TextInput } from 'flowbite-react';

export default function CardWithFormInputs() {
  const Nickname = `Your NickName : Masih Dalam Proses `
  return (
    <Card className='m-2'>
      <div>Masukkan User ID</div>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-5">

          <TextInput
            id="email1"
            placeholder="Game ID"
            required
            pattern='[0-9]*'
            type="text"

          />
          <TextInput
          //  className="w-10"
            id="email1"
            placeholder="   ( Zone ID )"
            required
            pattern='[0-9]*'
            type="text"
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

        <div className='mt-5'>
        Untuk mengetahui User ID Anda, silakan klik menu profile dibagian kiri atas pada menu utama game. User ID akan terlihat dibagian bawah Nama Karakter Game Anda. Silakan masukkan User ID Anda untuk menyelesaikan transaksi. Contoh : 12345678(1234).
        </div>
      
    </Card>
  )
}


