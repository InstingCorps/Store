

'use client';

import { Card } from 'flowbite-react';

export default function Cards() {
  return (
    <div>
    <Card className='m-9 h-20px rounded-xl'
      imgSrc="https://cdn1.codashop.com/S/content/mobile/images/product-tiles/ID_MLBB-M4-Codacash-tile.jpg"
    >
      <div>Tentang Mobile Legends
    <br /> <br />
    Mobile Legends: Bang Bang Dirilis pada tahun 2016, Mobile Legends: Bang Bang merupakan Mobile Multiplayer Online Battle Arena yang dikembangkan oleh Moonton. Game ini sangat populer terutama di Asia Tenggara dan menjadi salah satu game terpilih untuk kompetisi e-sport pertama di ASEAN Games Filipina, 2019 lalu.</div>
    </Card>

    <Card>
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <div>
          Noteworthy technology acquisitions 2021
        </div>
      </h5>
      <div className="font-normal text-gray-700 dark:text-gray-400">
        <div>
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </div>
      </div>
    </Card>

    </div>
  )
}


