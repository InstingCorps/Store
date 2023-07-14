

'use client';

import { Card } from 'flowbite-react';

export default function Cards() {
  return (
    <div>
    <Card className='m-9 h-20px rounded-xl'
      imgSrc="https://cdn1.codashop.com/S/content/mobile/images/product-tiles/ID_FF-tile-cb-sd100k.jpg"
    >
      <div>Tentang Free Fire
    <br /> <br />
    Free Fire adalah game battle royale yang seru dan intens yang dimainkan di platform mobile. Dalam Free Fire, pemain dijatuhkan ke pulau terpencil dan harus bertahan hidup dengan melawan pemain lain dalam pertempuran untuk menjadi yang terakhir bertahan.</div>
    </Card>

    <Card>
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <div>
          Proses Cepat dan Aman:
        </div>
      </h5>
      <div className="font-normal text-gray-700 dark:text-gray-400">
        <div>
           Kami memprioritaskan kecepatan dan keamanan dalam setiap transaksi. Pengisian ulang diamonds hanya membutuhkan beberapa langkah mudah, dan semua informasi pribadi dan pembayaranmu dijaga kerahasiaannya.
        </div>
      </div>
    </Card>

    </div>
  )
}


