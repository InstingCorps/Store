

'use client';
import { Card } from 'flowbite-react';

interface CardComponents{
  img: string,
  headers: string,
  body: string
}

export default function Cards({img, headers, body}:CardComponents) {
  return (
    <div>
    <Card className='m-9 h-20px rounded-xl'
      imgSrc= {img}
    >
      <div>Tentang {headers}
    <br /> <br />
    {body}</div>
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


